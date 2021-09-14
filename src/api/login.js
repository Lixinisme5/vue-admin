import request from '../utils/request'

//获取登录信息
export function loginApi(params){
    return request({
        url:'/login',
        method:'post',
        data:params
    })
}  