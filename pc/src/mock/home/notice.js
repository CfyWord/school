import Mock from 'mockjs';
const Random = Mock.Random;// Mock.Random 是一个工具类，用于生成各种随机数据
const res = ()=>{
    let data = [];
    for (let i=1;i<=10;i++) {
        data.push({
            "id": i,
            "title": Random.ctitle(6, 20),
            "url":"",
        })
    }
    return {
        code:0,
        message:'请求成功',
        messageCode:'00000',
        authCode:null,
        data:data
    };
};
export default res