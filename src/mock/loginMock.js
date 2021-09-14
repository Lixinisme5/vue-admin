import Mock from 'mockjs'

export default{
    //!登录
    login:(config)=>{
        //!逻辑
        let {user,password}  = JSON.parse(config.body)

        let token =''
        if(user === 'admin' && password === '123456'){
            token = 'admin --- token --- xxx'
        }else if(user === 'user' && password === '123456'){
            token = 'user --- token --- xxx'
        }else{
            return{
                code:101,
                msg:'账号密码不存在',
                data:null
            }
        }
        return{
            code:200,
            msg:'成功',
            data:token
        }
    }
}