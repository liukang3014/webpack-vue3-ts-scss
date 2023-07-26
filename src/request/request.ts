
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建一个自定义的 Axios 实例
const instance: AxiosInstance = axios.create({
  baseURL: 'https://server.lingyun-ai.com', // 设置基本的 API 地址
  timeout: 10000, // 设置请求超时时间
});

// 可以在这里添加请求拦截器、响应拦截器等等
// instance.interceptors.request.use(...)
// instance.interceptors.response.use(...)



const request = <T>(config: AxiosRequestConfig): Promise<T> => {
  return instance.request<T>(config)
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
