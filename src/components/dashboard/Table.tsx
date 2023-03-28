import { Link } from "react-router-dom"

interface TableProps {
    data: any[]
    columns: any[]
}

const Table = ({ data, columns }: TableProps): JSX.Element => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="table-auto table border-collapse border border-gray-300 w-full">
                            <thead>
                                <tr>
                                    {columns.map((column) => (
                                        <th
                                            key={column.id}
                                            className="px-4 py-2"
                                        >
                                            {column.label}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row) => (
                                    <tr key={row.id} className="cursor-pointer">
                                        {columns.map((column) => (
                                            <td
                                                key={column.id}
                                                className="border px-4 py-2 text-center"
                                            >
                                                {column.id !== "actions" &&
                                                    row[column.id]}
                                                {column.id === "actions" && (
                                                    <div className="flex justify-between items-center gap-2">
                                                        {row[column.id].map(
                                                            (action: any) =>
                                                                action.type ===
                                                                "edit" ? (
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
                                                                        onClick={
                                                                            action.onClick
                                                                        }
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
