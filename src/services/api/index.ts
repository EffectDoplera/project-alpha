import axios, {AxiosInstance, AxiosResponse} from 'axios';

const BASE_URL = 'https://601b990059fa2c0017560dbc.mockapi.io/api/v1/';

const axiosInstance: AxiosInstance = axios.create();

//TODO: pagination users
export const fetchUsers = async (
  pageCount = 1,
  limit = 10
): Promise<AxiosResponse> =>
  await axiosInstance.get(`${BASE_URL}/users?p=${pageCount}&l=${limit}`);

export const fetchProfile = async (userId: string): Promise<AxiosResponse> =>
  await axiosInstance.get(`/api/profile/${userId}`);

export const auth = async (authData: any): Promise<any> =>
  await axiosInstance.post('/api/auth/login', {
    data: authData,
  });
