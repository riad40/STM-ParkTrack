const formatDate = (date: Date | string, forInput: boolean = false): string => {
    date = new Date(date)

    // get the date, month and year
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()

    // get the hours and minutes
    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")

    // return the formatted date
    if (forInput) {
        return `${year}-${month}-${day}T${hours}:${minutes}`
    }

    return `${day}/${month}/${year} ${hours}:${minutes}`
}

export default formatDate
