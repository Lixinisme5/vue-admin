import Cookie from "js-cookie";

//! 设定cookie
export function setCookie(key,value){
    Cookie.set(key,value)
}

//! 获取Cookie
export function getCookie(key,value){
    Cookie.get(key,value)
}

//! 删除cookie
export function removeCookie(key){
    Cookie.remove(key)
}