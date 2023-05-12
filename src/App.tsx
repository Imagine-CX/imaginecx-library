import { BiSearch } from 'react-icons/bi';

import { Alert, Button, Card, CheckBox, Dropdown, Header, InputField, Radio, Table, Tabs, Toggle } from './components';
import { ContCalendar } from './components/Calendar/ContCalendar';

const options = [
  { id: 1, value: 'option1', label: 'Option 1' },
  { id: 2, value: 'option2', label: 'Option 2' },
  { id: 3, value: 'option3', label: 'Option 3' },
];

const tableTitles = ['Id', 'Campaña', 'Próximo Envío', 'Estado', 'SMS Enviados', 'SMS Fallidos'];

const tableItems = [
  // {
  //   id: 1,
  //   name: {
  //     first: 'Hola',
  //     second: 'Mundo',
  //   },
  //   date: 'Oct 9, 2023',
  //   status: 'Active',
  //   enviados: 5,
  //   fallidos: 0,
  // },
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

function App() {
  return (
    <div className="">
      <Header text="Imagine CX Library" variant="h1" />
      <div>
        <Header text="Imagine CX Library" variant="h1" />
      </div>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 md:icx-grid-cols-2 lg:icx-grid-cols-4">
        <Button text="Button Primary" color="icx-btn-primary" />
        <Button text="Button Secondary" color="icx-btn-secondary" animation />
        <Button text="Error" color="icx-btn-error" />
        <Button text="Alternative" color="icx-btn-alternative" />
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
      <form action="">
        <div className="icx-grid icx-grid-cols-2 icx-gap-4">
          <div>
            <InputField
              placeholder="Nombre"
              label="Nombre"
              name="nombre"
              required
              icon={<BiSearch className="icx-w-5 icx-h-5" />}
            />
          </div>
          <div>
            <InputField placeholder="Apellido" name="apellido" label="Apellido" disabled required />
          </div>
        </div>
        <Button text="Subir" color="icx-btn-primary" type="submit" />
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
      <div className="mt-10">
        <ContCalendar
          beforeYear={7}
          afterYear={7}
          disableAfter={new Date('2023-08-10')}
          disableBefore={new Date('2023-05-08')}
        />
      </div>
      <div className="icx-mt-2">
        <Card title="Card Test">
          <p>
            Dolore dolor mollit tempor aliquip minim aute magna irure. Ipsum commodo commodo do commodo ut aliqua mollit
            aliquip amet dolor. Cillum mollit laborum enim exercitation culpa ipsum incididunt cillum mollit quis quis
            laborum. Reprehenderit non labore magna duis nisi fugiat ut fugiat veniam. Labore dolor enim eu laboris
            fugiat sunt consequat sint. Mollit et officia adipisicing do qui id enim dolore aliquip ullamco officia.
          </p>
        </Card>
      </div>
      <div className="icx-my-10">
        <Tabs
          tabs={['Campañas Activas', 'Campañas Finalizadas']}
          content={[
            <Button key="one" text="Button Secondary" color="icx-btn-secondary" animation />,
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
          type="error"
        />
      </div>
    </div>
  );
}

export default App;
