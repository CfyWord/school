import Mock from 'mockjs';
const Random = Mock.Random;// Mock.Random 是一个工具类，用于生成各种随机数据
const res = {
    code:0,
    message:'请求成功',
    messageCode:'00000',
    authCode:null,
    data:[{
        cate_name:'手机',
        id:1,
        path:'',
        pid:0,
        img:Random.image("78x78"),
        children:[
            {
                cate_name:'HUAWEI Mate系列',
                id:2,
                path:'',
                is_top:1,
                pid:0,
                img:Random.image("78x78"),
            },
            {
                cate_name:'HUAWEI P系列',
                id:3,
                path:'',
                is_top:0,
                pid:0,
                img:Random.image("78x78"),
            },
            {
                cate_name:'HUAWEI nova系列',
                id:4,
                path:'',
                is_top:0,
                pid:0,
                img:Random.image("78x78"),
            },
            {
                cate_name:'华为畅享系列',
                id:5,
                path:'',
                is_top:0,
                pid:0,
                img:Random.image("78x78"),
            },
            {
                cate_name:'荣耀 V系列',
                id:6,
                path:'',
                is_top:0,
                pid:0,
                img:Random.image("78x78"),
            },
            {
                cate_name:'荣耀 HONOR系列',
                id:7,
                path:'',
                is_top:0,
                pid:0,
                img:Random.image("78x78"),
            },
            {
                cate_name:'荣耀 X系列',
                id:8,
                path:'',
                is_top:0,
                pid:0,
                img:Random.image("78x78"),
            },
            {
                cate_name:'荣耀 Play系列',
                id:9,
                path:'',
                is_top:0,
                pid:0,
                img:Random.image("78x78"),
            },
            {
                cate_name:'HUAWEI 麦芒系列',
                id:10,
                path:'',
                is_top:0,
                pid:0,
                img:Random.image("78x78"),
            },
        ]
    },
        {
            cate_name:'笔记本 & 平板',
            id:11,
            path:'',
            pid:0,
            img:Random.image("78x78"),
            children:[
                {
                    cate_name:'平板电脑',
                    id:57,
                    path:'',
                    is_top:1,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'笔记本电脑',
                    id:58,
                    path:'',
                    is_top:1,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'笔记本配件',
                    id:59,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
            ]
        },
        {
            cate_name:'智能穿戴 & VR',
            id:12,
            path:'',
            pid:0,
            img:Random.image("78x78"),
            children:[
                {
                    cate_name:'手环',
                    id:13,
                    path:'',
                    is_top:1,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'手表',
                    id:14,
                    path:'',
                    is_top:1,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'VR',
                    id:15,
                    path:'',
                    is_top:1,
                    pid:0,
                    img:Random.image("78x78"),
                },
            ]
        },
        {
            cate_name:'智能家居 & 智慧屏',
            id:16,
            path:'',
            pid:0,
            img:Random.image("78x78"),
            children:[
                {
                    cate_name:'智慧屏',
                    id:17,
                    path:'',
                    is_top:1,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'路由器',
                    id:18,
                    path:'',
                    is_top:1,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'智能灯光',
                    id:19,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'电视盒子',
                    id:20,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'生活电器',
                    id:21,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'子母/分布式路由',
                    id:22,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'电力猫/wifi放大器',
                    id:23,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'移动路由',
                    id:24,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'数码周边',
                    id:25,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'环境卫士',
                    id:26,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'安防门锁',
                    id:27,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'健康保健',
                    id:28,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'运动户外',
                    id:29,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'厨电卫浴',
                    id:30,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'影音娱乐',
                    id:31,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'汽车出行',
                    id:32,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'个护美妆',
                    id:33,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
            ]
        },
        {
            cate_name:'热销配件',
            id:34,
            path:'',
            pid:0,
            img:Random.image("78x78"),
            children:[
                {
                    cate_name:'保护壳',
                    id:35,
                    path:'',
                    is_top:1,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'移动电源',
                    id:36,
                    path:'',
                    is_top:1,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'耳机',
                    id:37,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'保护套',
                    id:38,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'贴膜',
                    id:39,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'音箱',
                    id:40,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'自拍杆/支架',
                    id:41,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'充电器/线材',
                    id:42,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'U盘/存储卡',
                    id:43,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'摄像机/镜头',
                    id:44,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'智能眼镜',
                    id:45,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'智能硬件',
                    id:46,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'表带',
                    id:47,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'智慧屏配件',
                    id:48,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'生活周边',
                    id:49,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'盒子专属配件',
                    id:50,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'触控笔/取卡针',
                    id:51,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
            ]
        },
        {
            cate_name:'增值服务 & 其他',
            id:52,
            path:'',
            pid:0,
            img:Random.image("78x78"),
            children:[
                {
                    cate_name:'服务器',
                    id:53,
                    path:'',
                    is_top:1,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'增值卡',
                    id:54,
                    path:'',
                    is_top:1,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'AI 计算平台',
                    id:55,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
                {
                    cate_name:'电池服务',
                    id:56,
                    path:'',
                    is_top:0,
                    pid:0,
                    img:Random.image("78x78"),
                },
            ]
        },],
};
export default res