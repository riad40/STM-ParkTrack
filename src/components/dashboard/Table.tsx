import { Link } from "react-router-dom"

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
                                        {row[column.id].map((action: any) =>
                                            action.type === "edit" ? (
                                                <Link
                                                    to={`/logs/${row._id}/edit`}
                                                >
                                                    <button className="text-blue-500 bg-blue-100 px-2 py-1 rounded">
                                                        Edit
                                                    </button>
                                                </Link>
                                            ) : (
                                                <button
                                                    className="text-red-500 bg-red-100 px-2 py-1 rounded"
                                                    onClick={action.onClick}
                                                >
                                                    Delete
                                                </button>
                                            )
                                        )}
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
