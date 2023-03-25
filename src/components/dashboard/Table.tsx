interface TableProps {
    data: any[]
    columns: any[]
}

const Table = ({ data, columns }: TableProps): JSX.Element => {
    return (
        <table className="table-auto w-2/4 mx-auto border-collapse border border-gray-300 rounded">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.id} className="px-4 py-2">
                            {column.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id} className="cursor-pointer">
                        {columns.map((column) => (
                            <td key={column.id} className="border px-4 py-2">
                                {column.id !== "actions" && row[column.id]}
                                {column.id === "actions" && (
                                    <div className="flex justify-between">
                                        {row[column.id].map((action: any) => (
                                            <button
                                                key={action}
                                                className="bg-blue-500 text-black font-bold py-2 px-4 rounded"
                                            >
                                                {action}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
