
export interface AuthStateInterface {
    username: string | null,
    token: string | null,
    status: string | null,
}

export interface UserInterface {
    username: string,
    password: string,
    _id: string,
    createdAt: string,
    updatedAt: string
}

export interface NewUserDataInterface {
    token: string,
    newUser: UserInterface,
    message: string
}

export interface UserDataInterface {
    token: string,
    user: UserInterface,
    message: string
}