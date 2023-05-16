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
    <div className="icx-flex icx-items-center icx-py-4 icx-overflow-x-auto icx-whitespace-nowrap">
      <a href={home} className="icx-text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="icx-w-7 icx-h-7" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </a>
      {items.map((item, index) => (
        <>
          <span className="icx-mx-3 icx-text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="icx-w-5 icx-h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <a href={item.link} key={index} className="icx-text-gray-600 hover:icx-underline">
            {item.label === selected ? (
              <span className="icx-font-bold icx-text-primary-400">{item.label}</span>
            ) : (
              <span>{item.label}</span>
            )}
          </a>
        </>
      ))}
    </div>
  );
};
