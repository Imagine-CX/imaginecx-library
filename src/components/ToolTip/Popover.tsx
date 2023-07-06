import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

type Position = 'bottom-center' | 'left-center' | 'right-center';
const defaultRect = {
  left: 0,
  top: 0,
  height: 0,
  width: 0,
};

type Rect = Pick<DOMRect, 'left' | 'top' | 'height' | 'width'>;
const PopoverContext = createContext<{
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  position: Position;
  triggerRect: Rect;
  setTriggerRect: React.Dispatch<React.SetStateAction<Rect>>;
}>({
  isShow: false,
  setIsShow: () => {
    throw new Error('Popover setIsShow context error');
  },
  position: 'bottom-center',
  triggerRect: defaultRect,
  setTriggerRect: () => {
    throw new Error('Popover setTriggerRect context error');
  },
});

//* mantiene el estado y lo expone a través del context
export const Popover = ({
  children,
  position = 'bottom-center',
}: {
  children: ReactNode;
  position: Position;
}): ReactElement => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [triggerRect, setTriggerRect] = useState(defaultRect);
  const contextValue = {
    isShow,
    setIsShow,
    position,
    triggerRect,
    setTriggerRect,
  };

  useEffect(() => {
    if (isShow) {
      document.body.classList.add('popover-open'); // Agregando clase CSS al cuerpo cuando se muestra el popover
    } else {
      document.body.classList.remove('popover-open'); // Eliminando clase CSS del cuerpo cuando se cierra el popover
    }
  }, [isShow]);

  return <PopoverContext.Provider value={contextValue}>{children}</PopoverContext.Provider>;
};

//* Metodo de activacion to children
const Trigger = ({ children }: { children: ReactElement }) => {
  const { setIsShow, setTriggerRect } = useContext(PopoverContext);
  const ref = useRef<HTMLElement>(null);

  const onClick = () => {
    const element = ref.current;
    if (element === null) {
      return;
    }
    const rect = element.getBoundingClientRect();
    setTriggerRect(rect);
    setIsShow((isShow) => !isShow);
  };

  const childrenToTriggerPopover = cloneElement(children, {
    onClick,
    ref,
  });

  return childrenToTriggerPopover;
};

//* Renderiza condicionalmente basado en el state
const Content = ({ children }: { children: ReactElement }) => {
  const { isShow } = useContext(PopoverContext);

  if (!isShow) {
    return null;
  }

  return <ContentInternal>{children}</ContentInternal>;
};

function ContentInternal({ children }: { children: ReactElement }) {
  const { triggerRect, position } = useContext(PopoverContext);
  const ref = useRef<HTMLDialogElement>(null);
  const [coords, setCoords] = useState({
    left: 0,
    top: 0,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    if (element === null) {
      return;
    }

    const rect = element.getBoundingClientRect();

    const coords = getPopoverCoords(triggerRect, rect, position);
    setCoords(coords);
  }, []);

  return (
    <dialog
      open={true}
      ref={ref}
      className="icx-rounded-md element-shadow"
      style={{
        position: 'fixed',
        left: `${coords.left}px`,
        top: `${coords.top}px`,
        margin: 0,
        zIndex: 10,
      }}
    >
      {children}
    </dialog>
  );
}

//* Close method to children
const Close = ({ children }: { children: ReactElement }) => {
  const { setIsShow } = useContext(PopoverContext);
  const onClick = () => {
    setIsShow(false);
  };
  const childrenToClosePopover = cloneElement(children, {
    onClick,
  });

  return childrenToClosePopover;
};

Popover.Trigger = Trigger;
Popover.Content = Content;
Popover.Close = Close;

function getPopoverCoords(triggerRect: Rect, popoverRect: Rect, position: Position) {
  switch (position) {
    case 'bottom-center': {
      let top1 = triggerRect.top + triggerRect.height + 10;
      const left1 = Math.max(triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2, 10);

      if (top1 + popoverRect.height > window.innerHeight - 10) {
        top1 = triggerRect.top - 10 - popoverRect.height;
      }

      return {
        top: top1,
        left: left1,
      };
    }
    default: {
      let top = triggerRect.top + triggerRect.height + 10;
      const left = Math.max(triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2, 10);

      if (top + popoverRect.height > window.innerHeight - 10) {
        top = triggerRect.top - 10 - popoverRect.height;
      }

      return {
        top,
        left,
      };
    }
  }
}
