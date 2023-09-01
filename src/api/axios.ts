// 导入 AxiosRequestConfig 类型，用于配置请求
import { AxiosRequestConfig } from 'axios';
// 导入自定义的 request 函数，用于发送网络请求
import request from '@/request/request';
import { PostExample, GetExample } from '@/utils/type';
// 创建一个请求配置对象
const getconfig: AxiosRequestConfig = {
  method: 'GET',
  url: '/api/data',
  params: {
    key: 'value'
  }
};


request<GetExample>(getconfig)
  .then((data) => {
    console.log('res:', data);
  })
  .catch((error) => {
    console.error('err:', error);
  });




const postconfig: AxiosRequestConfig = {
  method: 'POST',
  url: '/api/data',
  data: {
    key: 'value'
  }
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Bearer yourAccessToken'
  // }
};

request<PostExample>(postconfig)
  .then((data) => {
    console.log('res:', data);
  })
  .catch((error) => {
    console.error('err:', error);
  });