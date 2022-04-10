import axios from 'axios';
// 重写axios
const requests = axios.create({
  // 一些默认信息,接口地址不统一不做过多设置
  timeout: 5000,
});

// 添加请求拦截器
requests.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
requests.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default requests;
