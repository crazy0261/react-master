import axios from "axios";
import { serverUrl } from './tool'


const instanceAxios = axios.create({
    // 根路径
    baseURL:serverUrl,
    // 过期时间
    timeout:3000
})

export const get = (url,params ={}) => instanceAxios.get(url,{params})