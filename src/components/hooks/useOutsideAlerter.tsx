import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';

interface Hook {
  ref: RefObject<HTMLDivElement | null>;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const useOutsideAlerter = ({ ref, active, setActive }: Hook) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (active && ref && ref.current && event.target instanceof HTMLElement && !ref.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, active]);
};
