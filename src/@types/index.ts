export enum HeaderOpions {
    User,
    Admin,
    Home,
}

export type NavOptions = {
    name: string
}[]

export type AuthOptions = {
    isAuth: boolean
    user: object
    token: string
}

export type AuthContextType = {
    auth: AuthOptions
    setAuth: (auth: AuthOptions) => void
}
