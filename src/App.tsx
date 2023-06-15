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
  Modal,
  Popover,
  Radio,
  Select,
  Selector,
  Table,
  Tabs,
  TextArea,
  Toggle,
  Tooltip,
} from './components';
import { ContCalendar } from './components/Calendar/ContCalendar';
import { useForm } from './components/hooks/useForm';

const options = [
  { id: 1, value: 'option1', label: 'Option 1' },
  { id: 2, value: 'option2', label: 'Option 2' },
  { id: 3, value: 'option3', label: 'Option 3' },
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

const optionsSelect = [
  {
    id: 2,
    name: 'Programada',
  },
  {
    id: 3,
    name: 'Recurrente',
  },
  {
    id: 6,
    name: 'Programada2',
  },
  {
    id: 7,
    name: 'Recurrente2',
  },
];

const optionsSelect2 = [
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
    label: 'Programada2',
  },
  {
    value: 7,
    label: 'Recurrente2',
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

  const { selector, nombre, check, onInputChange, onCheckChange } = useForm(FormFields);

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log({ selector, nombre, check, currentDate });
  };

  return (
    <div className="">
      <Header text="Imagine CX Library" variant="h1" />
      <div>
        <Header text="Imagine CX Library" variant="h1" />
      </div>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 md:icx-grid-cols-2 lg:icx-grid-cols-4">
        <Button color="primary" className="icx-py-1">
          Button Primary
        </Button>
        <Button color="secondary" animation>
          Button Seondary
        </Button>
        <Button color="error">Error</Button>
        <Button color="alternative">Alternative</Button>
        <Button color="success">
          <p className="icx-font-bold">Success</p>
        </Button>
        <Button color="success" disabled>
          Success
        </Button>
      </div>
      <div>
        <CheckBox text="Checkbox" id="check1" />
        <CheckBox text="Checkbox2" id="check2" disabled />
        <CheckBox text="Checkbox2" id="check2" disabled checked />
        <CheckBox text="Checkbox checked" checked />
        <Radio text="Radio Button Disable" disabled id="radio1" />
        <Radio text="Radio Button checked disabled" checked disabled id="radio2" />

        {options.map((option) => (
          <div key={option.id}>
            <Radio text={option.label} id={`${option.id}`} name="options" />
          </div>
        ))}
      </div>
      <form action="" onSubmit={handleChange}>
        <div className="icx-grid icx-grid-cols-2 icx-gap-4">
          <div>
            <Selector options={optionsSelect} label="Opciones" required />
          </div>
          <div>
            <InputField
              placeholder="Nombre"
              title="Nombre"
              name="nombre"
              className="icx-py-1.5"
              value={nombre}
              onChange={onInputChange}
              required
              icon={<BiSearch className="icx-w-5 icx-h-5" />}
              action={
                <button>
                  <BiSearch className="icx-w-5 icx-h-5" />
                </button>
              }
            />
          </div>
          <div>
            <CheckBox text="Checkbox" id="checkPrueba" name="check" checked={check} onChange={onCheckChange} />
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
              icon={<BiSearch className="icx-w-5 icx-h-5" />}
            />
          </div>
          <div>
            <InputField placeholder="Apellido" name="apellido" title="Apellido" required />
            <div>
              <div className="icx-flex">
                <label htmlFor="">Hola</label>
                <Tooltip text="Recuerda que debes ingresar entre corchetes [ ] el número de la columna que deseas utilizar.">
                  <BsQuestionCircle className="icx-w-5 icx-h-5" />
                </Tooltip>
              </div>
              <InputField placeholder="Apellid2" name="apellido2" disabled />
            </div>
          </div>
          <div>
            <TextArea title="Mensaje" placeholder="Mensaje" content="Hola Mundo" required />
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
      <div className="icx-mt-2">
        <Card title="Card Test" type="warning">
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
    </div>
  );
}

export default App;
