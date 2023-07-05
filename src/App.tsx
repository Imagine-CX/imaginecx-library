import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';

import {
  Alert,
  BreadCrumb,
  Button,
  Card,
  CheckBox,
  Dropdown,
  Header,
  InputField,
  // Loader,
  Modal,
  Popover,
  Radio,
  Select,
  Skeleton,
  Table,
  Tabs,
  TextArea,
  Toggle,
  Tooltip,
} from './components';
import { ContCalendar } from './components/Calendar/ContCalendar';
import { useForm } from './components/hooks/useForm';

const options = [
  { id: 1, value: 'option1', label: 'Radio Button 1' },
  { id: 2, value: 'option2', label: 'Radio Button 2' },
];

const tableTitles = ['Id', 'Campaña', 'Próximo Envío', 'Estado', 'SMS Enviados', 'SMS Fallidos'];

const tableItems = [
  {
    id: 2,
    name: 'Vigente',
    date: 'Oct 12, 2023',
    status: 'Finalizada',
    enviados: 4,
    fallidos: 2,
  },
  {
    id: 3,
    name: 'Vigente',
    date: 'Oct 12, 2023',
    status: 'Finalizada',
    enviados: 4,
    fallidos: 2,
  },
];
const optionsSelect2 = [
  {
    value: 1,
    label: 'Selecciona...',
    hidden: true,
  },
  {
    value: 2,
    label: 'Programada',
  },
  {
    value: 3,
    label: 'Recurrente',
  },
  {
    value: 6,
    label: 'Periodica',
  },
];

const itemsBread = [
  { label: 'Inicio', link: '/' },
  { label: 'Productos', link: '/productos' },
  { label: 'Detalles del producto', link: 'details' },
];

type FormState = {
  selector: string;
  nombre: string;
  calendar: string;
  area: string;
  check: boolean;
};

const FormFields: FormState = {
  selector: '',
  nombre: '',
  calendar: '',
  area: '',
  check: false,
};

function App() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const { selector, onInputChange } = useForm(FormFields);

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log({ selector, nombre, check, currentDate });
  };

  return (
    <div className="icx-container icx-ml-3">
      <Header variant="h2">Buttons</Header>
      <div className="icx-grid icx-grid-cols-2 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-3 lg:icx-grid-cols-4">
        <Button color="primary" className="icx-py-1">
          Primary
        </Button>
        <Button color="secondary">Secondary</Button>
        <Button color="error">Error</Button>
        <Button color="alternative">Alternative</Button>
        <Button color="success">
          <p className="icx-font-bold">Success</p>
        </Button>
        <Button color="success" disabled>
          Disabled
        </Button>
        <Button color="success" icon={<BiSearch className="icx-w-5 icx-h-5" />}>
          Button with Icon
        </Button>
        <Button color="primary" animation>
          Primary with animation
        </Button>
      </div>
      <Header variant="h2">Checkbox</Header>
      <div className="icx-grid icx-grid-cols-2 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-4">
        <CheckBox text="Checkbox" id="check1" />
        <CheckBox text="Checkbox Disabled" id="check2" disabled />
        <CheckBox text="Checkbox disabled checked" id="check2" disabled checked />
        <CheckBox text="Checkbox checked" checked />
      </div>
      <Header variant="h2">Radio Buttons</Header>
      <div className="icx-grid icx-grid-cols-2 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-4">
        <Radio text="Radio Button Disable" disabled id="radio1" />
        <Radio text="Radio Button checked disabled" checked disabled id="radio2" />
        {options.map((option) => (
          <div key={option.id}>
            <Radio text={option.label} id={`${option.id}`} name="options" />
          </div>
        ))}
      </div>
      <Header variant="h2">Inputs</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-3">
        <InputField placeholder="Input basic" name="Input basic" title="Input basic" />
        <InputField placeholder="Input required" name="Input required" title="Input required" required />
        <InputField
          placeholder="Input with Icon"
          name="Input with Icon"
          title="Input with Icon"
          icon={<BiSearch className="icx-w-5 icx-h-5" />}
          required
        />
        <InputField
          placeholder="Input with action"
          name="Input with action"
          title="Input with action"
          action={
            <button>
              <BiSearch className="icx-w-5 icx-h-5" />
            </button>
          }
          required
        />
        <InputField
          placeholder="Input with icon and action"
          name="Input with icon and action"
          title="Input with icon and action"
          action={
            <button>
              <BiSearch className="icx-w-5 icx-h-5" />
            </button>
          }
          icon={<BiSearch className="icx-w-5 icx-h-5" />}
          required
        />
        <InputField placeholder="Input disabled" name="Input disabled" title="Input disabled" required disabled />
      </div>
      <Header variant="h2">Calendar</Header>
      <div className="icx-flex icx-gap-4 icx-mt-3 icx-pb-8 ">
        <ContCalendar
          beforeYear={7}
          afterYear={7}
          disableAfter={new Date('2023-08-10')}
          disableBefore={new Date('2023-05-08')}
          title="Calendar basic"
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          onChangeCalendar={setCurrentDate}
        />
        <ContCalendar
          beforeYear={7}
          afterYear={7}
          disableAfter={new Date('2023-08-10')}
          disableBefore={new Date('2023-05-08')}
          title="Calendario with icon"
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          onChangeCalendar={setCurrentDate}
          icon={<BiSearch className="icx-w-5 icx-h-5" />}
        />
        <ContCalendar
          beforeYear={7}
          afterYear={7}
          disableAfter={new Date('2023-08-10')}
          disableBefore={new Date('2023-05-08')}
          title="Calendario disabled"
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          onChangeCalendar={setCurrentDate}
          icon={<BiSearch className="icx-w-5 icx-h-5" />}
          disabled
        />
      </div>
      <Header variant="h2">Text Area</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-3">
        <TextArea title="Mensaje" placeholder="Mensaje" content="Hola Mundo" />
        <TextArea title="Mensaje required" placeholder="Mensaje" content="Hola Mundo" required />
        <TextArea title="Mensaje disabled" placeholder="Mensaje disabled" required disabled />
      </div>
      <Header variant="h2">Select</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-3">
        <Select
          options={optionsSelect2}
          name="selector"
          value={selector}
          onChange={onInputChange}
          title="Select basic"
        />
        <Select
          options={optionsSelect2}
          name="selector"
          value={selector}
          onChange={onInputChange}
          title="Select required"
          required
        />
        <Select
          options={optionsSelect2}
          name="selector"
          value={selector}
          onChange={onInputChange}
          title="Select disabled"
          disabled
        />
      </div>
      <form action="" onSubmit={handleChange}>
        <div className="icx-grid icx-grid-cols-2 icx-gap-4">
          <div className="icx-flex">
            <label htmlFor="">Hola</label>
            <Tooltip text="Recuerda que debes ingresar entre corchetes [ ] el número de la columna que deseas utilizar.">
              <BsQuestionCircle className="icx-w-5 icx-h-5" />
            </Tooltip>
          </div>
          <div>
            <Select
              options={optionsSelect2}
              name="selector"
              value={selector}
              onChange={onInputChange}
              title="opciones"
            />
          </div>
        </div>
        <Button color="primary" type="submit">
          Subir
        </Button>
      </form>
      <div>
        <Toggle text="Toggle" id="toggle1" />
        <Toggle text="Toggle disabled" id="toggle2" disabled />
      </div>
      <div className="icx-w-64">
        <Dropdown
          title="hola"
          items={[{ id: '1', value: 'action 1', click: () => {} }]}
          disabled={false}
          icon={<BiSearch size={19} className="icx-text-white icx-ml-1 icx-mt-1.5" />}
        />
      </div>
      <div className="icx-grid icx-grid-cols-3" style={{ position: 'relative' }}>
        <div>
          <input type="text" className="icx-border icx-w-full icx-py-1.5" />
        </div>
        <div>
          <Popover position="bottom-center">
            <Popover.Trigger>
              <input type="text" className="icx-border icx-w-full icx-py-1.5" />
              {/* <InputField placeholder="Click" type="text" /> */}
            </Popover.Trigger>
            <Popover.Content>
              <p className="icx-w-96">
                Recuerda que, en la primera columna del informe, debe ir el número telefónico del contacto. debe ir el
                número telefónico del contacto.
              </p>
            </Popover.Content>
          </Popover>
        </div>
      </div>
      <div>
        <ContCalendar
          beforeYear={7}
          afterYear={7}
          disableAfter={new Date('2023-08-10')}
          disableBefore={new Date('2023-05-08')}
          title="Calendario"
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          onChangeCalendar={setCurrentDate}
        />
      </div>
      <div className="icx-mt-2 icx-px-4">
        <Card title="Card Test" type="error12">
          <p>
            Ipsum cillum ipsum pariatur labore adipisicing occaecat quis ut. Officia ipsum mollit sit occaecat qui id
            nulla. Occaecat exercitation voluptate aliqua veniam ea pariatur excepteur non. Ipsum mollit velit excepteur
            culpa qui velit minim.
          </p>
        </Card>
      </div>
      <div className="icx-my-10">
        <Tabs
          tabs={['Campañas Activas', 'Campañas Finalizadas']}
          content={[
            <Button key="one" color="secondary" animation>
              Secondary
            </Button>,
            <CheckBox key="two" text="Checkbox" id="check11" />,
          ]}
          navElement={
            <div className="icx-w-96">
              <InputField type="text" placeholder="Escribe aquí" />
            </div>
          }
        />
      </div>
      <div>
        <Table headers={tableTitles} data={tableItems.map(Object.values)} />
      </div>
      <div>
        <Button color="primary" className="icx-py-1.5" onClick={() => setOpen1(!open1)}>
          Alert
        </Button>
        <div className="icx-fixed icx-bottom-0 icx-right-0 icx-m-8 icx-w-5/6 md:icx-w-full icx-max-w-sm">
          <Alert
            open={open1}
            setOpen={setOpen1}
            icon={
              <svg
                className="icx-w-8 icx-h-8 icx-text-white icx-fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            }
            type="success"
          >
            Se ha producido un error, cierra este cuadro para recargar la pagina
          </Alert>
        </div>
      </div>
      <div>
        <BreadCrumb items={itemsBread} selected="Inicio" home="/" />
      </div>
      <div>
        <Button color="success" className="icx-py-1.5" onClick={() => setOpen(!open)}>
          Modal
        </Button>
        <Modal open={open} setOpen={setOpen}>
          <div className="icx-flex icx-items-center icx-justify-center icx-p-4 icx-mt-3">
            <p>¿Estás seguro de que quieres actualizar la campaña sin hacer ninguna prueba de envío?</p>
          </div>
          <div className="icx-flex icx-items-center icx-gap-3 icx-p-4 icx-mt-5">
            {/* <Button color="primary" text="Si" onClick={() => setState(false)} />
            <Button color="primary" text="No" onClick={() => setState(false)} /> */}
            <Button color="primary">No</Button>
            <Button color="primary">Si</Button>
          </div>
        </Modal>
      </div>
      <div className="icx-flex icx-flex-col icx-items-center icx-justify-center">
        <div className="icx-my-2 icx-w-64 icx-h-20">
          <Skeleton variant="rectangular" animation />
        </div>
        <Skeleton variant="rounded" width="90%" height="50px" animation />
        <div className="icx-my-2 icx-w-64">
          <Skeleton variant="text" animation />
        </div>
        <div className="icx-my-2 icx-w-64 icx-h-20">
          <Skeleton variant="circular" width={'5rem'} height={'5rem'} animation />
        </div>
      </div>
      {/* <div>
        <Loader>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTZdgzlxDOgNfaEgPT1tD2EFS5PaLxJ0lBg&usqp=CAU" alt="icx" width={'100px'} height={'100px'}/>
        </Loader>
      </div> */}
    </div>
  );
}

export default App;
