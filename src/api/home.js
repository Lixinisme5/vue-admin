import request from '../utils/request'

//  获取首页数据列表
export function getDataFun(params){
    return request({
        url:"/money/get",
        method:'get',
        params,
    })
}


//删除   post和get传递参数不一样
export function deleteById(params){
    return request({
        url:'/money/delete',
        method:'post',
        data:params,
    })
}

//批量删除   post和get传递参数不一样
export function batchDeleteById(params){
    return request({
        url:'/money/batchDelete',
        method:'post',
        data:params,
    })
}


//添加请求   post和get传递参数不一样
export function addDataFun(params){
    return request({
        url:'/money/addData',
        method:'post',
        data:params,
    })
}

//修改请求   post和get传递参数不一样
export function updataDataFun(params){
    return request({
        url:'/money/updateData',
        method:'post',
        data:params,
    })
}