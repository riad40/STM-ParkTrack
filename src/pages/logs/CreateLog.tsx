import { FormContainer, Input, Alert } from "../../components"
import { useState, useEffect, useCallback } from "react"
import { CarLog } from "../../@types"
import createLog from "../../services/logs/createLog"
import getUsers from "../../services/auth/users"
import InputValidator from "../../helpers/formValidator"
import { useNavigate, Link } from "react-router-dom"

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
    const handleOnChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            setLogsData({
                ...logsData,
                [e.target.name]: e.target.value,
            })
            setErrors("")
        },
        [logsData]
    )

    // get the users
    const [users, setUsers] = useState<any>([])
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers()
            setUsers(response)
        }
        fetchUsers()
    }, [])

    // handle the form validation
    const [errors, setErrors] = useState<string>("")
    const [success, setSuccess] = useState<string>("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const navigate = useNavigate()

    const validateInputs = () => {
        if (!InputValidator.isAllInputsFilled([licensePlate, timeIn, user])) {
            setErrors("All inputs are required")
            setIsSubmitting(false)
            return false
        }
        return true
    }

    // trigger the createLog function when the form is submitted
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!validateInputs()) {
            setIsSubmitting(false)
            return
        }
        const response: any = await createLog(
            licensePlate,
            timeIn,
            timeOut,
            user
        )

        setIsSubmitting(true)

        if (response.status === 201) {
            setIsSubmitted(true)
            setIsSubmitting(false)
            setLogsData({
                licensePlate: "",
                timeIn: "",
                timeOut: "",
                user: "",
            })
            setSuccess(
                `${response?.data?.message} Redirecting to dashboard ...`
            )
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000)
        }

        setErrors(response.message)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <FormContainer
                title="Create a new log"
                children={
                    <>
                        {errors && <Alert content={errors} success={false} />}
                        {isSubmitted && (
                            <Alert content={success} success={true} />
                        )}
                        <form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="licensePlate"
                                id="licensePlate"
                                placeholder="License Plate Number (e.g. 123ABC)"
                                value={licensePlate}
                                onChange={handleOnChange}
                            />

                            <Input
                                type="text"
                                name="timeIn"
                                id="timeIn"
                                placeholder="Time In (e.g. 2021-08-01T12:00:00)"
                                value={timeIn}
                                onChange={handleOnChange}
                                date={true}
                            />
                            <Input
                                type="text"
                                name="timeOut"
                                id="timeOut"
                                placeholder="Time Out (e.g. 2021-08-01T12:00:00)"
                                value={timeOut}
                                onChange={handleOnChange}
                                date={true}
                            />
                            <select
                                name="user"
                                id="owner"
                                value={user}
                                onChange={handleOnChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-transparent mb-4 bg-gray-50 text-gray-900"
                            >
                                <option value="">Select a user</option>
                                {users.map((user: any) => (
                                    <option key={user._id} value={user._id}>
                                        {user.username}
                                    </option>
                                ))}
                            </select>
                            <div className="flex justify-between items-center">
                                <button
                                    className="px-5 py-2 bg-blue-600 text-white rounded-md focus:outline-none focus:border-transparent"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                                <Link to="/dashboard">
                                    <button className="px-5 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:border-transparent">
                                        Cancel
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </>
                }
            />
        </div>
    )
}

export default CreateLog
