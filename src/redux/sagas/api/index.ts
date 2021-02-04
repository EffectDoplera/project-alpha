import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://601b990059fa2c0017560dbc.mockapi.io/api/v1/';

export const fetchUsers = async (): Promise<AxiosResponse> => await axios.get(`${ BASE_URL }/users?p=1&l=10`)

export const fetchProfile = async ():Promise<AxiosResponse> => await axios.get(`${BASE_URL}/profile`)
