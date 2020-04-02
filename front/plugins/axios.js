import Vue from 'vue'
import axios from 'axios'

const service = axios.create({
    //timeout:5
    baseURL:'/api'
})
//请求拦截  主要作token管理


//相应拦截
service.interceptors.response.use(
    async response=>{
        let {data} = response

        return data
    }
)


Vue.prototype.$http = service

export const http = service