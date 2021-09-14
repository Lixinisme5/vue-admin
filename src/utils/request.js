//!发送请求  axios

//! 1、引入
import axios from 'axios';

//! 2、创建server
const server = axios.create({
    baseURL:"",   //*  /index/index    http://kumanxuan1.f3322.net:8001
    timeout:5000    //*超时连接
})

//! 3、请求拦截    登录放token的地方
server.interceptors.request.use(config=>{ 
    return config
})
 
//! 4、响应拦截   解码  加密  公共逻辑判断  项目中所有的错误都在这里进行处理
server.interceptors.response.use(res=>{
    return res.data
})

export default server
