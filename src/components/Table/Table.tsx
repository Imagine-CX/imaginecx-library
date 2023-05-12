interface ITableProps {
  headers: string[];
  data: any[][];
}

export const Table = ({ headers, data }: ITableProps): JSX.Element => {
  return (
    <div className="icx-max-w-screen-xl icx-mx-auto icx-px-4 md:icx-px-4 ">
      <div className="icx-mt-3 icx-relative icx-h-max icx-overflow-auto">
        <table className="icx-w-full icx-table-auto icx-text-sm icx-text-center">
          <thead className="icx-font-medium icx-border-b">
            <tr>
              {headers.map((item) => (
                <th className="icx-py-3" key={item}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="icx-divide-y icx-border-b">
            {data.map((item, idx) => (
              <tr key={idx}>
                {item.map((column, index) => (
                  <td className="icx-py-3 icx-whitespace-nowrap" key={index}>
                    {column}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
