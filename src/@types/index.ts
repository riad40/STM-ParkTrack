export enum HeaderOpions {
    User,
    Admin,
    Home,
}

export type NavOptions = {
    name: string
}[]

export type AuthOptions = {
    user: User
    token: string
}

export type AuthContextType = {
    auth: AuthOptions
    setAuth: (auth: AuthOptions) => void
}

export type User = {
    _id: string
    email: string
    username: string
    roles: string[]
}

export type CarLog = {
    licensePlate: string
    timeIn: string
    timeOut: string
    user: string
}
