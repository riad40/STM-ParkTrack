import { FormContainer, Input, Alert, Loading } from "../../components"
import { useState, useEffect } from "react"
import { CarLog } from "../../@types"
import updateLog from "../../services/logs/updateLog"
import getUsers from "../../services/auth/users"
import getOneLog from "../../services/logs/getOneLog"
import { useParams, useNavigate, Link } from "react-router-dom"
import InputValidator from "../../helpers/formValidator"
import formatDate from "../../helpers/formatDate"

const UpdateLog = (): JSX.Element => {
    // Create the state for the form
    const [logsData, setLogsData] = useState<CarLog>({
        licensePlate: "",
        timeIn: "",
        timeOut: "",
        user: "",
    })
    const [isLoading, setIsLoading] = useState(true)

    // Destructure the state
    const { licensePlate, timeIn, timeOut, user } = logsData

    // Create the handleOnChange function
    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setLogsData({ ...logsData, [e.target.name]: e.target.value })
        // reset the errors
        setErrors("")
    }

    // get the id from the url
    const { id } = useParams<{ id: any }>()

    // get the users
    const [users, setUsers] = useState<any>([])
    useEffect(() => {
        // fetch the users
        const fetchUsers = async () => {
            const response = await getUsers()
            setUsers(response)
        }

        // fetch the log
        const fetchLog = async () => {
            const response = await getOneLog(id)
            setLogsData(response)
            setIsLoading(false)
        }

        fetchUsers()
        fetchLog()
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

    // trigger the UpdateLog function when the form is submitted
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!validateInputs()) {
            setIsSubmitting(false)
            return
        }

        const response: any = await updateLog(
            licensePlate,
            timeIn,
            timeOut,
            user,
            id
        )

        setIsSubmitting(true)

        if (response.status === 200) {
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

    if (isLoading) return <Loading />

    return (
        <div className="flex justify-center items-center h-screen">
            <FormContainer
                title="Update the log"
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
                                placeholder="15332618HFZF5"
                                value={licensePlate}
                                onChange={handleOnChange}
                            />
                            <Input
                                type="datetime-local"
                                name="timeIn"
                                id="timeIn"
                                placeholder="2021-08-01T12:00:00"
                                value={formatDate(timeIn, true)}
                                onChange={handleOnChange}
                            />

                            <Input
                                type="datetime-local"
                                name="timeOut"
                                id="timeOut"
                                placeholder="2021-08-01T12:00:00"
                                value={
                                    !timeOut ? "" : formatDate(timeOut, true)
                                }
                                onChange={handleOnChange}
                            />

                            <select
                                name="user"
                                id="owner"
                                value={user}
                                onChange={handleOnChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-4 bg-gray-50 text-gray-900"
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

export default UpdateLog
