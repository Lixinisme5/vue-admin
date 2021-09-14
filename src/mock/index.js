//mock的接口抛出
import Mock from 'mockjs';
import home from './home';
import loginMock from './loginMock';

Mock.setup({
    timeout:300,
})

//接口
//1、获取表格数据接口
Mock.mock(/\/money\/get/,'get',home.getTable)
//2、删除接口
Mock.mock(/\/money\/delete/,'post',home.deleteById)
//3、批量删除接口
Mock.mock(/\/money\/batchDelete/,'post',home.batchDeleteById)
//4、添加接口
Mock.mock(/\/money\/addData/,'post',home.addData)
//5、修改接口
Mock.mock(/\/money\/updateData/,'post',home.updateData)
//6、登录接口
Mock.mock(/\/login/,'post',loginMock.login)
