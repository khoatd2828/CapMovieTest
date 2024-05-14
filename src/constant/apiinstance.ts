import axios, { CreateAxiosDefaults, InternalAxiosRequestConfig } from "axios"

export const apiInstance = {
    create: (configDefault?: CreateAxiosDefaults) => {
        const api = axios.create(configDefault)
        api.interceptors.request.use((config) => {
            return {
                ...config,
                headers: {
                    TokenCybersoft:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MyIsIkhldEhhblN0cmluZyI6IjA5LzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTg0MDAwMDAwMCIsIm5iZiI6MTY5Njg3MDgwMCwiZXhwIjoxNzI1OTg3NjAwfQ.eka9nnrY4RvjgyAAdJH7uruVGj0DfXCfIM8V8HRpIMI',
                }
            } as unknown as InternalAxiosRequestConfig
        })

        return api
    }
}