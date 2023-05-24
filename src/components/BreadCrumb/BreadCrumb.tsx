interface BreadcrumbProps {
  home: string;
  items: Array<{
    label: string;
    link: string;
  }>;
  selected?: string;
}

export const BreadCrumb = ({ items, selected, home }: BreadcrumbProps): JSX.Element => {
  return (
    <>
      <nav className="icx-flex icx-text-gray-700 icx-py-3" aria-label="Breadcrumb">
        <ol className="icx-inline-flex icx-items-center icx-space-x-1 md:icx-space-x-3">
          <li className="icx-inline-flex icx-items-center">
            <a href={home} className="icx-text-gray-700 hover:icx-text-gray-900 icx-inline-flex icx-items-center">
              <svg
                className="icx-w-6 icx-h-6 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </a>
          </li>
          {items.map((item) => (
            <li key={item.label}>
              <div className="icx-flex icx-items-center">
                <svg
                  className="icx-w-6 icx-h-6 icx-text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a href={item.link} className="icx-text-gray-700 hover:icx-text-gray-900 icx-ml-1 md:icx-ml-2">
                  {item.label === selected ? (
                    <span className="icx-font-bold icx-text-primary-400">{item.label}</span>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
