const data = [
  { id: "uiahsdsfuiahaasdfas", date: '2021-10-01', status: 'success', code: '200' },
  { id: "uiahsdsfuiahaasdfas", date: '2021-10-01', status: 'success', code: '200' },
  { id: "uiahsdsfuiahaasdfas", date: '2021-10-01', status: 'success', code: '200' },
  { id: "uiahsdsfuiahaasdfas", date: '2021-10-01', status: 'success', code: '200' },
  { id: "uiahsdsfuiahaasdfas", date: '2021-10-01', status: 'success', code: '200' },
]

export default function RecentRequests() {
  return <div className="relative overflow-x-auto border-2 border-base-content rounded-lg">
    <table className="w-full text-sm text-left">
      <thead className="text-xs uppercase border-b-2 border-base-content">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            Date Executed
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Code
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-b border-base-content">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              {item.id}
            </th>
            <td className="px-6 py-4">
              {item.date}
            </td>
            <td className="px-6 py-4">
              {item.status}
            </td>
            <td className="px-6 py-4">
              {item.code}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}