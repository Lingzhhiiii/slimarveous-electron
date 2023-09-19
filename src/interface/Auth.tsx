export interface User {
    id: number,
    username: string,
    photo: string,
    qq: string,
    birthday: string,
    password: string,
    email: string,
    gender: number
}

export interface UserBrief {
    id: number,
    username: string,
    photo: string,
    gender: number
}

export interface LoginRequest  {
	username: string,
	password: string,
}

export interface LoginResponse {
    statusMsg: string,
    statusCode: number,
    user: User
}

export interface RegisterRequest {
	username: string,
	password: string,
}

export interface RegisterResponse {
    statusMsg: string,
    statusCode: number,
    user: User
}

