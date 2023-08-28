
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import Axios from '@/api/response';

// 可以在这里添加请求拦截器、响应拦截器等等
// instance.interceptors.request.use(...)
// instance.interceptors.response.use(...)



const request = <T>(config: AxiosRequestConfig): Promise<T> => {
  return Axios.request<T>(config)
    .then((response: AxiosResponse<T>) => {
      return response.data;
    })
    .catch((error) => {
      // 这里可以添加统一的错误处理逻辑
      console.error('Request Error:', error);
      throw error;
    });
};

export default request;
