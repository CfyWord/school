import Mock from 'mockjs';
import UrlParams from "../../utils/getUrlParams";
const Random = Mock.Random;// Mock.Random 是一个工具类，用于生成各种随机数据
const res = (params)=>{
    let paramsArr = UrlParams.getStrUrlParams(params.url);
    let dataList = []; // 用于接受生成数据的数组
    let pageSize = paramsArr.pageSize;
    let tagArr = [
        "",{
            name:'新品上市',
            color:'',
            background:'#ff8486',
        },{
            name:'爆款',
            color:'',
            background:'#ff8486',
        },{
            name:'分期免息',
            color:'',
            background:'#68BEFF',
        }];
    for (let i = 0; i < pageSize; i++) { // 可自定义生成的个数
        const template = {
            id:Random.integer(1, 9999),
            tag:tagArr[Random.integer(0, 3)],
            pic:Random.image("180x180"),
            title:Random.ctitle(6, 15),
            price:Random.float(1000, 20000, 1,2),
            sukCount:Random.boolean(),
            inventory:Random.integer(0, 1),
            comment:{
                count:Random.integer(100, 10000),
                percentage:Random.integer(0, 100),
            },
        };
        dataList.push(template)
    }

    let priceRange = {
        name:'价格区间',
        field_name:'price_range',
        list:[{name:'2000-3999',value:'2000-3999'},{name:'4000-5999',value:'4000-5999'},{name:'6000-以上',value:'6000-999999'}],
    };

    let cateList = {
        name:'分类',
        field_name:'cate_id',
        list:[
            {name:'平板电脑',value:1},
            {name:'笔记本电脑',value:2},
            {name:'笔记本配件',value:3},
            {name:'充电器/线材',value:4},
        ],
    };

    let attributes = [{name:'操作系统','field_name':'operating_system','list':[
            {name:'Android(安卓)',value:12},{name:'Harmony(鸿蒙)',value:13}
        ]},{name:'屏幕尺寸','field_name':'screen_size','list':[
            {name:'6.0英寸',value:1},{name:'5.6英寸',value:2},{name:'6.5英寸',value:3}
        ]},{name:'运行内存','field_name':'ram','list':[
            {name:'4G',value:4},{name:'6G',value:5},{name:'8G',value:6},{name:'12G',value:7}
        ]},{name:'存储容量','field_name':'rom','list':[
            {name:'32G',value:8},{name:'64G',value:9},{name:'128G',value:10},{name:'320G',value:11}
        ]}];

    let res = {
        code:0,
        message:'请求成功',
        messageCode:'00000',
        authCode:null,
        data:{
            total:200,
            list:dataList,
            attributes:attributes,
            price_range:priceRange,
            cate_list:cateList,
        }
    };
    return res;
}
export default res