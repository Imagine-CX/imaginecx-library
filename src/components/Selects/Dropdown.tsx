export interface IDropdown {
  title: string;
  children: JSX.Element;
}

export const Dropdown = ({ children, title }: IDropdown) => {
  return (
    <div className="icx-relative icx-inline-block icx-text-left icx-font-imagine icx-text-md">
      <div>
        <button
          type="button"
          className="icx-text-disable-200 icx-bg-neutral-100 icx-border icx-border-disable-200 icx-rounded-[0.5rem] icx-p-2.5 icx-min-w-[12rem] icx-flex icx-justify-between icx-items-center icx-gap-x-1.5 "
        >
          {title}
          <svg
            className="icx--mr-1 icx-h-5 icx-w-5 icx-text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="icx-absolute icx-right-0 icx-z-10 icx-w-full icx-origin-top-right icx-rounded-md">{children}</div>
    </div>
  );
};
