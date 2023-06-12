
export interface AuthStateInterface {
    username: string,
    password: string
}

export interface NewUserInterface {
    username: string,
    password: string,
}

export interface NewUserDataInterface {
    token: string,
    newUser: NewUserInterface,
    message: string
}

