module.exports ={
    //todo  关闭eslint
    
    //todo  配置代理
    devServer:{
        proxy:{
            '/api':{
                target:'http://kumanxuan1.f3322.net:8001',   //后台连接
                changeOrigin:true,  //是否跨域
                pathRewrite:{
                    '^/api':' '
                }
            }
        }
    }
}