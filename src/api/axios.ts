import { AxiosRequestConfig } from 'axios'; // 导入 AxiosRequestConfig 类型，用于配置请求
import request from '@/request/request';
import { Point } from '@/utils/type';
// 创建一个请求配置对象
const config: AxiosRequestConfig = {
  method: 'GET', // 请求方法
  url: '/api/data', // 请求的具体 URL
  params: {
    key: 'value' // 请求参数
  }
};

// 调用 request 函数发送请求
request<Point>(config) 
  .then((data) => {
    console.log('res:', data);
  })
  .catch((error) => {
    console.error('err:', error);
  });