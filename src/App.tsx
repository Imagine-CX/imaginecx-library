import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';

import { Close } from './assets/Close';
import smsIcon from './assets/Messages.svg';
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
  Selector,
  SelectSearch,
  Skeleton,
  Tabs,
  TextArea,
  Toggle,
  Tooltip,
} from './components';
import { ContCalendar } from './components/Calendar/ContCalendar';
import { useForm } from './components/hooks/useForm';
import { Options } from './components/interfaces/selectInterface';

const options = [
  { id: 1, value: 'option1', label: 'Radio Button 1' },
  { id: 2, value: 'option2', label: 'Radio Button 2' },
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

const optionsSelect3 = [
  {
    id: 1,
    name: 'Selecciona...',
  },
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
    name: 'Periodica',
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

const staticOptionSearch = [
  { value: 'item 1', label: 'Item 1' },
  { value: 'item 2', label: 'Item 2' },
  { value: 'item 3', label: 'Item 3' },
  { value: 'item 4', label: 'Item 4' },
  { value: 'item 5', label: 'Item 5' },
];

function App() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [valueSelected, setValueSelected] = useState<Options>({ value: 'item 1', label: 'Item 1' });

  const [currentDate, setCurrentDate] = useState(new Date());

  const { selector, onInputChange } = useForm(FormFields);

  return (
    <div className="icx-container icx-ml-3">
      <div className="icx-text-center">
        <Header variant="h2">ICX Library</Header>
      </div>
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
        <Button color="success" icon={smsIcon}>
          Button with Icon
        </Button>
        <Button color="primary" animation>
          Primary with animation
        </Button>
        <img src={smsIcon} alt="" />
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
        {options.map((option) => (
          <div key={option.id}>
            <Radio text={option.label} id={`${option.id}`} name="options" />
          </div>
        ))}
        <Radio text="Radio Button Disable" disabled id="radio1" />
        <Radio text="Radio Button checked disabled" checked disabled id="radio2" />
      </div>
      <Header variant="h2">Toggle</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-4">
        <Toggle text="Toggle" id="toggle1" />
        <Toggle text="Toggle disabled" id="toggle2" disabled />
        <Toggle text="Toggle disabled checked" id="toggle3" checked disabled />
        <Toggle text="Toggle checked" id="toggle4" checked />
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
        <InputField
          placeholder="Input Label as tooltip"
          name="Input Label with tooltip"
          title="Input Label with Toltip"
          labelAction={
            <Tooltip text="This is a tooltip to guide the user in the interface">
              <BsQuestionCircle className="icx-w-5 icx-h-5" />
            </Tooltip>
          }
        />
        <InputField
          placeholder="Input Label tooltip and required"
          name="Input Label with tooltip and required"
          title="Input Label with tooltip and required"
          labelAction={
            <Tooltip text="This is a tooltip to guide the user in the interface">
              <BsQuestionCircle className="icx-w-5 icx-h-5" />
            </Tooltip>
          }
          required
        />
        <InputField
          placeholder="Input Label tooltip Disabled"
          name="Input Label with tooltip Disabled"
          title="Input Label with tooltip Disabled"
          labelAction={
            <Tooltip text="This is a tooltip to guide the user in the interface">
              <BsQuestionCircle className="icx-w-5 icx-h-5" />
            </Tooltip>
          }
          disabled
        />
      </div>
      <Header variant="h2">Calendar</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-3 ">
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
          // disableAfter={new Date('2023-08-10')}
          disableBefore={new Date('Tue Aug 29 2023 00:00:00')}
          title="Calendar with icon"
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          onChangeCalendar={setCurrentDate}
          icon={<BiSearch className="icx-w-5 icx-h-5" />}
        />
        <ContCalendar
          beforeYear={7}
          afterYear={7}
          disableAfter={new Date('2023-08-10')}
          disableBefore={new Date()}
          title="Calendar disabled"
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          onChangeCalendar={setCurrentDate}
          icon={<BiSearch className="icx-w-5 icx-h-5" />}
          disabled
        />
      </div>
      <Header variant="h2">Text Area</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-3">
        <TextArea title="Text Area" placeholder="Mensaje" content="Hola Mundo" />
        <TextArea title="Text Area required" placeholder="Mensaje" content="Hola Mundo" required />
        <TextArea title="Text Area disabled" placeholder="Mensaje disabled" required disabled />
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
        <Selector options={optionsSelect3} />

        <SelectSearch
          placeholder="Selecciona ..."
          valueSelected={valueSelected}
          setValueSelected={setValueSelected}
          options={staticOptionSearch}
        />
      </div>
      <Header variant="h2">Dropdown</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-3">
        <Dropdown title="Dropdown basic" items={[{ id: '1', value: 'action 1', click: () => {} }]} />
        <Dropdown
          title="Dropdown with Icon"
          items={[{ id: '1', value: 'action 1', click: () => {} }]}
          icon={<BiSearch size={19} className="icx-text-white icx-ml-1 icx-mt-1.5" />}
        />
        <Dropdown
          title="Dropdown disabled"
          items={[{ id: '1', value: 'action 1', click: () => {} }]}
          icon={<BiSearch size={19} className="icx-text-white icx-ml-1 icx-mt-1.5" />}
          disabled
        />
      </div>
      <Header variant="h2">Popover</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-2">
        <Popover position="bottom-center">
          <Popover.Trigger>
            <input
              type="text"
              className="icx-border icx-rounded-md icx-w-full icx-py-1.5 focus:icx-border-primary-400"
            />
            {/* <InputField placeholder="Click" type="text" /> */}
          </Popover.Trigger>
          <Popover.Content>
            <p className="icx-w-96">
              Recuerda que, en la primera columna del informe, debe ir el número telefónico del contacto. debe ir el
              número telefónico del contacto.
            </p>
          </Popover.Content>
        </Popover>
        <Popover position="bottom-center">
          <Popover.Trigger>
            <Button color="success">Hola</Button>
          </Popover.Trigger>
          <Popover.Content>
            <p className="icx-w-96">
              Recuerda que, en la primera columna del informe, debe ir el número telefónico del contacto. debe ir el
              número telefónico del contacto.
            </p>
          </Popover.Content>
        </Popover>
      </div>
      <Header variant="h2">Tooltip</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-2">
        <Tooltip text="Recuerda que debes ingresar entre corchetes [ ] el número de la columna que deseas utilizar.">
          <BsQuestionCircle className="icx-w-5 icx-h-5" />
        </Tooltip>
        <Tooltip text="Recuerda que debes ingresar entre corchetes [ ] el número de la columna que deseas utilizar.">
          <BiSearch className="icx-w-5 icx-h-5 icx-text-blue-500" />
        </Tooltip>
      </div>
      <Header variant="h2">Cards</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-4">
        <Card title="Card Basic" type="error12">
          <p>
            Ipsum cillum ipsum pariatur labore adipisicing occaecat quis ut. Officia ipsum mollit sit occaecat qui id
            nulla. Occaecat exercitation voluptate aliqua veniam ea pariatur excepteur non. Ipsum mollit velit excepteur
            culpa qui velit minim.
          </p>
        </Card>
        <Card title="Card Error" type="error">
          <p>
            Ipsum cillum ipsum pariatur labore adipisicing occaecat quis ut. Officia ipsum mollit sit occaecat qui id
            nulla. Occaecat exercitation voluptate aliqua veniam ea pariatur excepteur non. Ipsum mollit velit excepteur
            culpa qui velit minim.
          </p>
        </Card>
        <Card title="Card Success" type="success">
          <p>
            Ipsum cillum ipsum pariatur labore adipisicing occaecat quis ut. Officia ipsum mollit sit occaecat qui id
            nulla. Occaecat exercitation voluptate aliqua veniam ea pariatur excepteur non. Ipsum mollit velit excepteur
            culpa qui velit minim.
          </p>
        </Card>
        <Card title="Card Success-light" type="success-light">
          <p>
            Ipsum cillum ipsum pariatur labore adipisicing occaecat quis ut. Officia ipsum mollit sit occaecat qui id
            nulla. Occaecat exercitation voluptate aliqua veniam ea pariatur excepteur non. Ipsum mollit velit excepteur
            culpa qui velit minim.
          </p>
        </Card>
        <Card title="Card Info" type="info">
          <p>
            Ipsum cillum ipsum pariatur labore adipisicing occaecat quis ut. Officia ipsum mollit sit occaecat qui id
            nulla. Occaecat exercitation voluptate aliqua veniam ea pariatur excepteur non. Ipsum mollit velit excepteur
            culpa qui velit minim.
          </p>
        </Card>
        <Card title="Card Warning" type="warning">
          <p>
            Ipsum cillum ipsum pariatur labore adipisicing occaecat quis ut. Officia ipsum mollit sit occaecat qui id
            nulla. Occaecat exercitation voluptate aliqua veniam ea pariatur excepteur non. Ipsum mollit velit excepteur
            culpa qui velit minim.
          </p>
        </Card>
        <Card title="Card Primary" type="primary">
          <p>
            Ipsum cillum ipsum pariatur labore adipisicing occaecat quis ut. Officia ipsum mollit sit occaecat qui id
            nulla. Occaecat exercitation voluptate aliqua veniam ea pariatur excepteur non. Ipsum mollit velit excepteur
            culpa qui velit minim.
          </p>
        </Card>
        <Card title="Card Inactive" type="inactive">
          <p>
            Ipsum cillum ipsum pariatur labore adipisicing occaecat quis ut. Officia ipsum mollit sit occaecat qui id
            nulla. Occaecat exercitation voluptate aliqua veniam ea pariatur excepteur non. Ipsum mollit velit excepteur
            culpa qui velit minim.
          </p>
        </Card>
      </div>
      <Header variant="h2">Tabs</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-2">
        <div>
          <h1 className="icx-mb-3 icx-font-bold">Tabs basic</h1>
          <Tabs
            tabs={['Tab 1', 'Tab 2']}
            content={[
              <p key="one" className="icx-p-4">
                Culpa cillum nostrud nostrud est proident et dolore excepteur dolor. Deserunt aliqua magna voluptate
                voluptate ea commodo in est id non. Nulla id pariatur mollit esse eu pariatur cillum. Eiusmod ullamco
                excepteur non anim sit eu eiusmod et. Dolore culpa exercitation aliquip veniam aliquip aliqua ullamco.
              </p>,
              <p key="two" className="icx-p-4">
                Dolore officia irure veniam excepteur ut commodo culpa esse id. Laboris sunt in non et. Voluptate
                pariatur veniam voluptate voluptate ut ut est in incididunt. Proident laborum aute consectetur eiusmod
                ad. Aliqua ut fugiat qui voluptate qui reprehenderit officia aliqua amet. Sint exercitation dolore anim
                sit.
              </p>,
            ]}
          />
        </div>
        <div>
          <h1 className="icx-mb-3 icx-font-bold">Tabs with navElement</h1>
          <Tabs
            tabs={['Tab 1', 'Tab 2', 'Tab 3']}
            content={[
              <p key="one" className="icx-p-4">
                Otro
              </p>,
              <p key="two" className="icx-p-4">
                Hola
              </p>,
              <p key="two" className="icx-p-4">
                Nuevo 3
              </p>,
            ]}
            navElement={
              <div className="icx-w-64 icx-mr-4">
                <InputField type="text" placeholder="Escribe aquí" />
              </div>
            }
            iconSmScreen={
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            }
          />
        </div>
      </div>
      <Header variant="h2">Alerts</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-4">
        <div>
          <Button color="success" className="icx-py-1.5" onClick={() => setOpen1(!open1)}>
            Alert Success
          </Button>
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
            Campaña creada exitosamente
            {/* Se ha producido un error, cierra este cuadro para recargar la pagina */}
          </Alert>
        </div>
        <div>
          <Button color="error" className="icx-py-1.5" onClick={() => setOpen2(!open2)}>
            Alert Error
          </Button>
          <Alert
            open={open2}
            setOpen={setOpen2}
            icon={
              <svg
                className="icx-w-8 icx-h-8 icx-text-white icx-fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            }
            type="error"
          >
            Se ha producido un error, cierra este cuadro para recargar la pagina
          </Alert>
        </div>
        <div>
          <Button color="success" className="icx-py-1.5" onClick={() => setOpen3(!open3)}>
            Alert con type incorrecto
          </Button>
          <Alert
            open={open3}
            setOpen={setOpen3}
            icon={
              <svg
                className="icx-w-8 icx-h-8 icx-text-white icx-fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            }
            type="errorwe"
          >
            Campaña creada exitosamente
            {/* Se ha producido un error, cierra este cuadro para recargar la pagina */}
          </Alert>
        </div>
        <div>
          <Button color="error" className="icx-py-1.5" onClick={() => setOpen4(!open4)}>
            Alert con opción de cerrar
          </Button>
          <Alert
            open={open4}
            setOpen={setOpen4}
            icon={
              <svg
                className="icx-w-8 icx-h-8 icx-text-white icx-fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            }
            type="warning"
            closeCustom={
              <button
                className="icx-p-1 icx-transition-colors icx-duration-300 icx-transform icx-rounded-md hover:icx-bg-opacity-25 hover:icx-bg-gray-600 focus:icx-outline-none"
                onClick={() => setOpen4(false)}
              >
                <Close className="icx-w-5 icx-h-5 icx-mx-auto icx-text-white" />
              </button>
            }
          >
            Se ha producido un error, cierra este cuadro para recar gar la pagina
          </Alert>
        </div>
      </div>
      <Header variant="h2">BreadCrumb</Header>
      <div className="icx-flex icx-justify-center icx-items-center">
        <BreadCrumb items={itemsBread} selected="Inicio" home="/" />
      </div>
      <Header variant="h2">Modal</Header>
      <div className="icx-mt-3 icx-pb-8">
        <Button color="success" className="icx-py-1.5" onClick={() => setOpen(!open)}>
          Modal
        </Button>
        <Modal open={open} setOpen={setOpen}>
          <div className="icx-text-center icx-p-4 icx-mt-3">
            <p>¿Estás seguro de que quieres actualizar la campaña sin hacer ninguna prueba de envío?</p>
          </div>
          <div className="icx-flex icx-items-center icx-gap-3 icx-p-4 icx-mt-5">
            <Button color="alternative">No</Button>
            <Button color="primary">Si</Button>
          </div>
        </Modal>
      </div>
      <Header variant="h2">Loader</Header>
      <div>
        {/* <Loader>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTZdgzlxDOgNfaEgPT1tD2EFS5PaLxJ0lBg&usqp=CAU"
            alt="icx"
            width={'100px'}
            height={'100px'}
          />
        </Loader> */}
      </div>
      <Header variant="h2">Skeleton</Header>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 icx-pb-8 md:icx-grid-cols-2 lg:icx-grid-cols-4">
        <div className="icx-h-20">
          <p>Rectangular</p>
          <Skeleton variant="rectangular" />
        </div>
        <div>
          <p>Rectangular con bordes redondeados</p>
          <Skeleton variant="rounded" width="100%" height="80px" />
        </div>
        <div className="icx-h-20">
          <p>Circular</p>
          <Skeleton variant="circular" width={'5rem'} height={'5rem'} />
        </div>
        <div className="">
          <p>Texto</p>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </div>
        <div className="icx-h-20">
          <p>Rectangular animación</p>
          <Skeleton variant="rectangular" animation />
        </div>
        <div>
          <p>Bordes redondeados con animación</p>
          <Skeleton variant="rounded" width="100%" height="80px" animation />
        </div>
        <div className="icx-h-20">
          <p>Circular animación</p>
          <Skeleton variant="circular" width={'5rem'} height={'5rem'} animation />
        </div>
        <div className="">
          <p>Texto animación</p>
          <Skeleton variant="text" animation />
          <Skeleton variant="text" animation />
          <Skeleton variant="text" animation />
        </div>
      </div>
    </div>
  );
}

export default App;
