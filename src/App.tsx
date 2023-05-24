import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

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
  Radio,
  Select,
  Selector,
  Table,
  Tabs,
  TextArea,
  Toggle,
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

  const { selector, nombre, calendar, check, onInputChange, onCheckChange } = useForm(FormFields);

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ selector, nombre, calendar, check });
  };
  return (
    <div className="">
      <Header text="Imagine CX Library" variant="h1" />
      <div>
        <Header text="Imagine CX Library" variant="h1" />
      </div>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 md:icx-grid-cols-2 lg:icx-grid-cols-4">
        <Button text="Button Primary" color="primary" />
        <Button text="Button Secondary" color="secondary" animation />
        <Button text="Error" color="error" />
        <Button text="Alternative" color="alternative" />
        <Button text="Success" color="success" />
        <Button text="Success" color="success" disabled />
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
              label="Nombre"
              name="nombre"
              value={nombre}
              onChange={onInputChange}
              required
              icon={<BiSearch className="icx-w-5 icx-h-5" />}
            />
          </div>
          <div>
            <CheckBox text="Checkbox" id="checkPrueba" name="check" checked={check} onChange={onCheckChange} />
          </div>
          <div>
            <InputField placeholder="Apellido" name="apellido" label="Apellido" disabled required />
          </div>
          <div>
            <ContCalendar
              beforeYear={7}
              afterYear={7}
              disableAfter={new Date('2023-08-10')}
              disableBefore={new Date('2023-05-08')}
              label="Calendario"
              required
              name="calendar"
              value={calendar}
              onChange={onInputChange}
            />
          </div>
          <div>
            <TextArea label="Mensaje" placeholder="Mensaje" content="Hola Mundo" disabled />
          </div>
          <div>
            <Select options={optionsSelect2} name="selector" value={selector} onChange={onInputChange} />
          </div>
        </div>
        <Button text="Subir" color="primary" type="submit" />
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
      <div className="icx-mt-2">
        <Card title="Card Test" type="success">
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
            <Button key="one" text="Button Secondary" color="secondary" animation />,
            <CheckBox key="two" text="Checkbox" id="check11" />,
          ]}
        />
      </div>
      <div>
        <Table headers={tableTitles} data={tableItems.map(Object.values)} />
      </div>
      <div>
        <Alert
          message="¡La campaña fue creada exitosamente!"
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
        />
      </div>
      <div>
        <BreadCrumb items={itemsBread} selected="Inicio" home="/" />
      </div>
      <div>
        <Button color="success" text="Modal" onClick={() => setOpen(!open)} />
        <Modal open={open} setOpen={setOpen}>
          <div className="icx-flex icx-items-center icx-justify-center icx-p-4 icx-mt-3">
            <p>¿Estás seguro de que quieres actualizar la campaña sin hacer ninguna prueba de envío?</p>
          </div>
          <div className="icx-flex icx-items-center icx-gap-3 icx-p-4 icx-mt-5">
            {/* <Button color="primary" text="Si" onClick={() => setState(false)} />
            <Button color="primary" text="No" onClick={() => setState(false)} /> */}
            <Button color="primary" text="No" />
            <Button color="primary" text="Si" />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
