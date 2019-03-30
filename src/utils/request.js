/* eslint-disable arrow-body-style */

import axios from 'axios';

// 创建一个 axios 实例
const server = axios.create({
    // baseURL: 'http://192.168.10.110:8080',
    baseURL: 'http://localhost:8080',
    timeout: 5000, // 请求超时设置
});


export default server;
