// src/service/apiClient.ts
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';

// Define the base URL for your API
//const env = 'dev';
const baseURL = '/api/'
  // process.env.NODE_ENV === 'development'
  //   ? `https://aj.${env}.aj.ai/api/`
  //   : '/api/';
// Create an Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Modify the request config here (e.g., add authorization token)
    // const token = getCookie('access_token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle successful response here
    return response;
  },
  (error: AxiosError) => {
    // Handle response error here
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 410)
    ) {
      // Handle unauthorized error (e.g., redirect to login)
    }
    return Promise.reject(error);
  }
);

// Template methods
const get = async <T>(
  url: string,
  config?: InternalAxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.get<T>(url, config);
  return response.data;
};

const post = async <T, D>(
  url: string,
  data: D,
  config?: InternalAxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.post<T>(url, data, config);
  return response.data;
};

const put = async <T, D>(url: string, data: D, config?: any): Promise<T> => {
  const response = await apiClient.put<T>(url, data, config);
  return response.data;
};

const patch = async <T, D>(
  url: string,
  data: D,
  config?: InternalAxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.patch<T>(url, data, config);
  return response.data;
};

const del = async <T>(
  url: string,
  config?: InternalAxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.delete<T>(url, config);
  return response.data;
};

const options = async <T>(
  url: string,
  config?: InternalAxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient.options<T>(url, config);
  return response.data;
};
export { get, post, put, patch, del, options };
export default apiClient;
