import { BiSearch } from 'react-icons/bi';

import { Button, Card, CheckBox, Dropdown, Header, InputField, Radio, Tabs, Toggle } from './components';
import { ContCalendar } from './components/Calendar/ContCalendar';

const options = [
  { id: 1, value: 'option1', label: 'Option 1' },
  { id: 2, value: 'option2', label: 'Option 2' },
  { id: 3, value: 'option3', label: 'Option 3' },
];

function App() {
  return (
    <div className="">
      <Header text="Imagine CX Library" variant="h1" />
      <div>
        <Header text="Imagine CX Library" variant="h1" />
      </div>
      <div className="icx-grid icx-grid-cols-1 icx-gap-4 icx-mt-3 md:icx-grid-cols-2 lg:icx-grid-cols-4">
        <Button
          text="Button Primary"
          color="icx-btn-primary"
          icon={
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              stroke-width="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                  fill="#292D32"
                ></path>{' '}
              </g>
            </svg>
          }
        />
        <Button text="Button Secondary" color="icx-btn-secondary" animation />
        <Button text="Error" color="icx-btn-success" />
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
            <InputField
              placeholder="Apellido"
              name="apellido"
              label="Apellido"
              disabled
              icon={
                <svg
                  fill="#e8af11"
                  width="25px"
                  height="25px"
                  viewBox="0 0 32.00 32.00"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#e8af11"
                  stroke-width="0.00032"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <title>alt-brightness</title>{' '}
                    <path d="M2.016 16q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44-0.608-1.408-1.408-0.576-1.408 0.576-0.576 1.408zM5.504 24.512q0 0.8 0.576 1.408t1.44 0.576 1.408-0.576 0.576-1.408-0.576-1.408-1.408-0.608-1.44 0.608-0.576 1.408zM5.504 7.52q0 0.832 0.576 1.408t1.44 0.576 1.408-0.576 0.576-1.408-0.576-1.408-1.408-0.608-1.44 0.608-0.576 1.408zM8 16q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632zM12 16q0-1.632 1.184-2.816t2.816-1.184 2.816 1.184 1.184 2.816-1.184 2.848-2.816 1.152-2.816-1.152-1.184-2.848zM14.016 28q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44-0.608-1.408-1.408-0.576-1.408 0.576-0.576 1.408zM14.016 4q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44-0.608-1.408-1.408-0.576-1.408 0.576-0.576 1.408zM22.496 24.512q0 0.8 0.576 1.408t1.408 0.576 1.44-0.576 0.576-1.408-0.576-1.408-1.44-0.608-1.408 0.608-0.576 1.408zM22.496 7.52q0 0.832 0.576 1.408t1.408 0.576 1.44-0.576 0.576-1.408-0.576-1.408-1.44-0.608-1.408 0.608-0.576 1.408zM26.016 16q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44-0.608-1.408-1.408-0.576-1.408 0.576-0.576 1.408z"></path>{' '}
                  </g>
                </svg>
              }
              required
            />
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
      <div className="">
        <Card title="Card Test" color="icx-card-finish">
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
    </div>
  );
}

export default App;
