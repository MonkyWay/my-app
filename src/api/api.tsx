import axios from "axios"

export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "7cda2977-051b-4825-8bd1-3302c2c1fca5"
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCapctha {
    CaptchaIsRequired = 10
}


