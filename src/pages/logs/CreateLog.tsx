import { FormContainer, Input, Button } from "../../components"
import { useState } from "react"
import { CarLog } from "../../@types"

const CreateLog = (): JSX.Element => {
    // Create the state for the form
    const [logsData, setLogsData] = useState<CarLog>({
        licensePlate: "",
        timeIn: "",
        timeOut: "",
        user: "",
    })

    // Destructure the state
    const { licensePlate, timeIn, timeOut, user } = logsData

    // Create the handleOnChange function
    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setLogsData({ ...logsData, [e.target.name]: e.target.value })
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <FormContainer
                title="Create a new log"
                children={
                    <form>
                        <Input
                            type="text"
                            name="licensePlate"
                            id="licensePlate"
                            placeholder="15332618HFZF5"
                            value={licensePlate}
                            onChange={handleOnChange}
                        />

                        <Input
                            type="datetime-local"
                            name="timeIn"
                            id="timeOut"
                            placeholder="2021-08-01T12:00:00"
                            value={timeIn}
                            onChange={handleOnChange}
                        />
                        <Input
                            type="datetime-local"
                            name="timeOut"
                            id="timeOut"
                            placeholder="2021-08-01T12:00:00"
                            value={timeOut}
                            onChange={handleOnChange}
                        />
                        <select
                            name="user"
                            id="owner"
                            value={user}
                            onChange={handleOnChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-4 bg-gray-50 text-gray-900"
                        >
                            <option value="1">John Doe</option>
                            <option value="2">Jane Doe</option>
                        </select>
                        <Button text="Create" type="submit" />
                    </form>
                }
            />
        </div>
    )
}

export default CreateLog
