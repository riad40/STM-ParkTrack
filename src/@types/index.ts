export type AuthOptions = {
    user: User | null
    token: string | null
}

export type AuthContextType = {
    auth: AuthOptions
    setAuth: (auth: AuthOptions) => void
}

export type User = {
    id?: string
    email: string
    username: string
    roles: string[]
}

export type CarLog = {
    _id?: string
    licensePlate: string
    timeIn: string
    timeOut: string
    user: string
}
