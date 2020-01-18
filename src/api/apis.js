import axios from 'axios'
import qs from 'qs'

// export let IP='http://127.0.0.1:80'//本地
export let IP='http://192.168.1.3:80'

let res=axios.create({
    baseURL:IP,
    timeout:10000
})
// 登录
export function login(acc,pwd){
    return res.post('/login.php',qs.stringify({
        acc,pwd
    }))
}
/* 猜你喜欢列表*/
export function homelist(){
    return res.get('/gethouselist.php')
}
/* 注册 */
export function reg(acc,pwd){
    return res.post('/reg.php',qs.stringify({
        acc,pwd
    }))
}
/* 获取验证码 */

export function code(){
    return res.get('/valitecode.php')
}