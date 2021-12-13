import Axios from "axios"

const baseUrl = "//15.237.2.25/api/v1"

export const axios = Axios.create({baseURL: baseUrl})