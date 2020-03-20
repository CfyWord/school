import Mock from 'mockjs';
const Random = Mock.Random;// Mock.Random 是一个工具类，用于生成各种随机数据
const res= ()=>{
    let data = [];
    let ad1 = [];
    for (let i=1;i<=4;i++){
        ad1.push({
            title:Random.ctitle(6, 20),
            url:'',
            img:Random.image("290x200")
        });
    }
    data.push(ad1);

    return {
        code:0,
        message:'请求成功',
        messageCode:'00000',
        authCode:null,
        data:data
    };
};
export default res;