import Mock from 'mockjs'
import {param2Obj} from '../utils/paramUtils'


let List = []   //保存所有的数据
for(let i =0;i < 60; i++){
    List.push(Mock.mock({
        id:Mock.Random.guid(),
        name:Mock.Random.cname(),
        address:Mock.mock('@county(true)'),
        payDate:Mock.Random.datetime(),
        payType:Mock.Random.integer(1,5), //数字类型  映射成字符串
        income: Mock.Random.integer(2000,10000),
        pay: Mock.Random.integer(3000,8000),
        money: Mock.Random.integer(50000,15000),
    }))
}

export default {
    //!筛选
    getTable:(config)=>{
        const {search} = param2Obj(config.url);
        let newList = List.filter(item=>{
            return item.name.indexOf(search) != -1;
        })
        return{
            code:200,
            msg:'',
            data:newList,

        }
    },
    //!删除
    deleteById:(config)=>{
        let { id } = JSON.parse(config.body);
        let newList = List.filter(item=>{
            return item.id != id;
        })
        List = newList;
        return{
            code:200,
            msg:'删除成功',
            data:List,

        }
    },
    //!批量删除
    batchDeleteById:(config)=>{
        let { ids } = JSON.parse(config.body);
        let newList = List.filter(item=>{
            return ids.indexOf(item.id) == -1;
        }) 
        List = newList;
        return{
            code:200,
            msg:'批量删除成功',
            data:List,

        }
    },

    //!添加
    addData:(config)=>{
        //时间设置
        console.log('添加接收的信息',JSON.parse(config.body));
        Date.prototype.Format = function (fmt) {
            var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "H+": this.getHours(), //小时 
                "m+": this.getMinutes(), //分 
                "s+": this.getSeconds(), //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            }; 
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
    var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");
        let {name,address,payType,income,pay,money} = JSON.parse(config.body)
        List.unshift(Mock.mock({
            id:Mock.Random.guid(),
            name:name,
            address:address,
            payDate: time2,
            payType:payType, //数字类型  映射成字符串
            income: income,
            pay:pay,
            money: money,
        }))

        return{
            code:200,
            msg:'添加成功', 
            data:null
        }
    },
    updateData:(config)=>{
        let {id,name,address,payType,income,pay,money} = JSON.parse(config.body)
        List.forEach(item=>{
            if(item.id == id){
                item.name = name;
                item.address = address;
                item.payType = payType;
                item.income = income;
                item.pay = pay;
                item.money = money;
            }
        })

        return {
            code:200,
            msg:'更新成功',
            data:null
        }
    }
}