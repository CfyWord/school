<template>
    <div class="home-page">
        <div class="banner">
            <div class="category-wrap">
                <div class="category-mini">
                    <div class="group-category" v-for="(list,index) in categoryGroup" :key="index">
                        <div class="group-item parent-group">
                            <router-link to="#">{{list.category_name}}</router-link>
                        </div>
                        <div class="group-item" >
                            <template v-for="(list2,index2) in list.children" >
                            <router-link to="#" :key="index2"  v-if="list2.is_top">{{list2.category_name}}</router-link>
                            </template>
                        </div>
                        <div class="group-son">
                            <template v-for="(list3,index2) in groupCate(list.children)" >
                            <ul class="son-list" :key="index2">
                               <li v-for="(list4,index4) in list3" :key="index4">
                                   <router-link to="#">
                                       <img src="https://res.vmallres.com/pimages//pages/frontCategory/emEoURCoAws3bwrIgjI8.png">
                                       <span>{{list4.category_name}}</span>
                                   </router-link>
                               </li>
                                <li class="show-all-li" v-if="list3.length>0">
                                    <router-link to="#">
                                        <span>查看全部</span>
                                    </router-link>
                                </li>
                            </ul>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Carousel v-model="bannerActive" class="home-banner-carousel" :height="550" :autoplay-speed="5000" loop radius-dot :autoplay="false" trigger="hover">
            <CarouselItem v-for="(item,index) in bannerList" :key="index">
                <router-link to="#" class="banner-a">
                    <img class="banner-img" :src="item.url"/>
                </router-link>
            </CarouselItem>
        </Carousel>
        <div class="banner-next-wrap">
            <div class="user-avatar-login">
                <Avatar icon="ios-person" class="avatar" src="https://res.vmallres.com/20191126/images/echannel/misc/img_not_logged_in.png" size="52" />
                <div class="user-avatar-login-r">
                    <div class="login-reg" v-if="1<0">
                        <span>您好！请</span>
                        <router-link to="#">登录</router-link>  /  <router-link to="#">注册</router-link>
                    </div>
                    <div class="login-reg" v-else>
                        <span>您好,C********</span>
                    </div>
                    <div class="login-reg-btm">
                        <router-link to="#">新人福利</router-link>
                        <router-link to="#">会员频道</router-link>
                    </div>
                </div>
            </div>
            <div class="center">
                <a class="center-mini">
                    <div class="img">
                        <img src="https://res.vmallres.com/pimages//squaredInfo/icon/5/5972eeb36b219f07d41ebd7564537a5c.png"/>
                    </div>
                    <span>企业购特惠</span>
                </a>
                <a class="center-mini">
                    <div class="img">
                        <img src="https://res.vmallres.com/pimages//squaredInfo/icon/5/5972eeb36b219f07d41ebd7564537a5c.png"/>
                    </div>
                    <span>会员领券</span>
                </a>
                <a class="center-mini">
                    <div class="img">
                        <img src="https://res.vmallres.com/pimages//squaredInfo/icon/5/5972eeb36b219f07d41ebd7564537a5c.png"/>
                    </div>
                    <span>以旧换新</span>
                </a>
                <a class="center-mini">
                    <div class="img">
                        <img src="https://res.vmallres.com/pimages//squaredInfo/icon/5/5972eeb36b219f07d41ebd7564537a5c.png"/>
                    </div>
                    <span>Mate30系列</span>
                </a>
                <a class="center-mini">
                    <div class="img">
                        <img src="https://res.vmallres.com/pimages//squaredInfo/icon/5/5972eeb36b219f07d41ebd7564537a5c.png"/>
                    </div>
                    <span>荣耀数码</span>
                </a>
                <a class="center-mini">
                    <div class="img">
                        <img src="https://res.vmallres.com/pimages//squaredInfo/icon/5/5972eeb36b219f07d41ebd7564537a5c.png"/>
                    </div>
                    <span>华为数码</span>
                </a>
            </div>
            <div class="notice-rap">
                <div class="notice-list">
                    <div class="b-text">公告</div>
                    <div class="list-item">
                        <a class="item" v-for="(item,index) in new_notice" :to="item.url" :key="index">{{item.title}}</a>
                    </div>
                </div>
                <div class="evm-rap">
                    <a class="item">
                        <span class="img">
                            <img src="https://res.vmallres.com/pimages//squaredInfo/icon/5/5972eeb36b219f07d41ebd7564537a5c.png"/>
                        </span>
                        <span>优购码</span>
                    </a>
                    <a class="item">
                        <span class="img">
                            <img src="https://res.vmallres.com/pimages//squaredInfo/icon/5/5972eeb36b219f07d41ebd7564537a5c.png"/>
                        </span>
                        <span>更换电池</span>
                    </a>
                    <a class="item">
                        <span class="img">
                            <img src="https://res.vmallres.com/pimages//squaredInfo/icon/5/5972eeb36b219f07d41ebd7564537a5c.png"/>
                        </span>
                        <span>补购保障</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="home-ad-1">
            <div class="ad-list" v-for="(item,index) in adList[0]" :key="index">
                <router-link :to="item.url">
                    <img :src="item.img"/>
                </router-link>
            </div>
        </div>
        <div class="home-hot-product">
            <h2 class="group-title">热销产品</h2>
            <div class="product-box">
                <div class="hot-ad">
                    <router-link to="#">
                        <img src="https://res0.vmallres.com/pimages//frontLocation/content/d5sNGN4hKyOcV7jg91LA.png"/>
                    </router-link>
                </div>
                <div class="product-right">
                    <div class="product-item" v-for="item in hotProduct" :key="item.id">
                        <div class="tag">
                            <span v-if="item.tag" :style="{background:item.tag.background}">{{item.tag.name}}</span>
                        </div>
                        <div class="pic">
                            <router-link to="#">
                                <img :src="item.pic"/>
                            </router-link>
                        </div>
                        <div class="title">
                            {{item.title}}
                        </div>
                        <div class="desc">{{item.desc}}</div>
                        <div class="price">{{item.price}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-recommend">
            <h2 class="recommend-title">精品推荐</h2>
            <div class="recommend-swiper">
                <swiper :options="recommendSwiperOption">
                    <swiper-slide v-for="item in 25" :key="item" class="swiper-slide" >
                        <div class="swiper-product">
                            <div class="mini">
                                <div class="tag">
                                    <span>分期免息</span>
                                </div>
                                <div class="pic">
                                    <img  style="width: 100%;" src="https://res0.vmallres.com/pimages//product/6901443367184/428_428_602BF194C889E3294A39E798EF0D70DDBCEDB2E5A115A594mp.png"/>
                                </div>
                                <div class="desc">
                                    最高优惠200元
                                </div>
                            </div>
                            <div class="title">
                                HUAWEI MateBook 13
                            </div>
                            <div class="price">
                                ¥4499
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-prev-cs" slot="button-prev">
                        <Icon type="ios-arrow-back" />
                    </div>
                    <div class="swiper-button-next-cs" slot="button-next">
                        <Icon type="ios-arrow-forward" />
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                bannerActive:0,
                bannerList:[
                    {url:'https://res.vmallres.com/pimages//pages/picImages/zLCUVyL22r5anaaTwThm.jpg'},
                    {url:'https://res.vmallres.com/pimages//pages/picImages/KtGREsXwor9Obq2pwbvm.jpg'},
                    {url:'https://res.vmallres.com/pimages//pages/picImages/ZhLMfiz62cYBjhDEhK8H.jpg'},
                    {url:'https://res.vmallres.com/pimages//pages/picImages/V31GeyzpDIvVg9Xh8oKI.jpg'},
                    {url:'https://res.vmallres.com/pimages//pages/picImages/SmnU0htJkcRrKFHn4Jhv.jpg'},
                    {url:'https://res.vmallres.com/pimages//pages/picImages/PXofwbY25q8DHxbCb6fE.jpg'},
                ],
                categoryGroup:[
                    {
                        category_name:'手机',
                        id:'',
                        path:'',
                        pid:0,
                        img:'',
                        children:[
                            {
                                category_name:'HUAWEI Mate系列',
                                id:'',
                                path:'',
                                is_top:1,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'HUAWEI P系列',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'HUAWEI nova系列',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'华为畅享系列',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'荣耀 V系列',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'荣耀 HONOR系列',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'荣耀 X系列',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'荣耀 Play系列',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'HUAWEI 麦芒系列',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                        ]
                    },
                    {
                        category_name:'笔记本 & 平板',
                        id:'',
                        path:'',
                        pid:0,
                        img:'',
                        children:[
                            {
                                category_name:'平板电脑',
                                id:'',
                                path:'',
                                is_top:1,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'笔记本电脑',
                                id:'',
                                path:'',
                                is_top:1,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'笔记本配件',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                        ]
                    },
                    {
                        category_name:'智能穿戴 & VR',
                        id:'',
                        path:'',
                        pid:0,
                        img:'',
                        children:[
                            {
                                category_name:'手环',
                                id:'',
                                path:'',
                                is_top:1,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'手表',
                                id:'',
                                path:'',
                                is_top:1,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'VR',
                                id:'',
                                path:'',
                                is_top:1,
                                pid:0,
                                img:'',
                            },
                        ]
                    },
                    {
                        category_name:'智能家居 & 智慧屏',
                        id:'',
                        path:'',
                        pid:0,
                        img:'',
                        children:[
                            {
                                category_name:'智慧屏',
                                id:'',
                                path:'',
                                is_top:1,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'路由器',
                                id:'',
                                path:'',
                                is_top:1,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'智能灯光',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'电视盒子',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'生活电器',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'子母/分布式路由',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'电力猫/wifi放大器',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'移动路由',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'数码周边',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'环境卫士',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'安防门锁',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'健康保健',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'运动户外',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'厨电卫浴',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'影音娱乐',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'汽车出行',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'个护美妆',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                        ]
                    },
                    {
                        category_name:'热销配件',
                        id:'',
                        path:'',
                        pid:0,
                        img:'',
                        children:[
                            {
                                category_name:'保护壳',
                                id:'',
                                path:'',
                                is_top:1,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'移动电源',
                                id:'',
                                path:'',
                                is_top:1,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'耳机',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'保护套',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'贴膜',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'音箱',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'自拍杆/支架',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'充电器/线材',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'U盘/存储卡',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'摄像机/镜头',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'智能眼镜',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'智能硬件',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'表带',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'智慧屏配件',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'生活周边',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'盒子专属配件',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'触控笔/取卡针',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                        ]
                    },
                    {
                        category_name:'增值服务 & 其他',
                        id:'',
                        path:'',
                        pid:0,
                        img:'',
                        children:[
                            {
                                category_name:'服务器',
                                id:'',
                                path:'',
                                is_top:1,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'增值卡',
                                id:'',
                                path:'',
                                is_top:1,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'AI 计算平台',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                            {
                                category_name:'电池服务',
                                id:'',
                                path:'',
                                is_top:0,
                                pid:0,
                                img:'',
                            },
                        ]
                    },
                ],
                new_notice:[
                    {title:'荣耀年货节-AI耀带回家活动',url:'#'},
                    {title:'关于部分区域受恶劣天气所影响的通告',url:'#'},
                    {title:'关于部分区域受恶劣天气所影响的通告3',url:'#'},
                    {title:'关于部分区域受恶劣天气所影响的通告4',url:'#'},
                ],
                adList:[
                    [{
                        title:'1',
                        url:'#',
                        img:"https://res.vmallres.com/pimages//pages/picImages/4Uy4iyo0ScflnyybtKkS.png"
                    },{
                        title:'2',
                        url:'#',
                        img:"https://res.vmallres.com/pimages//pages/picImages/uYUtR5G62XVMgcOFD3z3.jpg"
                    },{
                        title:'3',
                        url:'#',
                        img:"https://res.vmallres.com/pimages//pages/picImages/ls42UcCyR1Lk55kz0XWQ.jpg"
                    },{
                        title:'4',
                        url:'#',
                        img:"https://res.vmallres.com/pimages//pages/picImages/WpPJQL0nIXGkaO3asuZo.jpg"
                    }]
                ],
                animate:false,

                hotProduct:[
                    {
                        id:'1',
                        tag:{
                            name:'爆款',
                            background:'',
                        },
                        pic:'https://res0.vmallres.com/pimages//product/6901443356126/428_428_21A7667FA769CBD35B1B4977DF61F62E011DB64E3FDCA71Bmp.png',
                        title:'HUAWEI nova 5z ',
                        desc:'限时直降200元',
                        price:'¥1599'
                    },
                    {
                        id:'2',
                        tag:{
                            name:'5G 新品',
                            background:'',
                        },
                        pic:'https://res0.vmallres.com/pimages//product/6901443360772/428_428_E02F7603A34D401AE8E45310BE565DE90BF8B8598C1E3875mp.png',
                        title:'HUAWEI nova 5z ',
                        desc:'限时直降200元',
                        price:'¥1599'
                    },
                    {
                        id:'3',
                        tag:'',
                        pic:'https://res0.vmallres.com/pimages//product/6901443353347/428_428_484D42DB83550E7CF59813E6BE3E2A9A4CF07CF0E75E32A3mp.png',
                        title:'HUAWEI nova 5z ',
                        desc:'限时直降200元',
                        price:'¥1599'
                    },
                    {
                        id:'4',
                        tag:{
                            name:'分期免息',
                            background:'#68BEFF',
                        },
                        pic:'https://res0.vmallres.com/pimages//product/6901443304349/428_428_1558245073712mp.png',
                        title:'HUAWEI nova 5z ',
                        desc:'限时直降200元',
                        price:'¥1599'
                    },
                    {
                        id:'5',
                        tag:'',
                        pic:'https://res0.vmallres.com/pimages//product/6901443316496/428_428_1563762865294mp.png',
                        title:'HUAWEI nova 5z ',
                        desc:'限时直降200元',
                        price:'¥1599'
                    },
                    {
                        id:'6',
                        tag:'',
                        pic:'https://res0.vmallres.com/pimages//product/6901443315376/428_428_1563876645993mp.png',
                        title:'HUAWEI nova 5z ',
                        desc:'限时直降200元',
                        price:'¥1599'
                    },
                    {
                        id:'7',
                        tag:'',
                        pic:'https://res0.vmallres.com/pimages//product/6901443352531/428_428_37C267F23F1D9D8B7DBF9202529F8CFBB5AEACA87BCFF900mp.png',
                        title:'HUAWEI nova 5z ',
                        desc:'限时直降200元',
                        price:'¥1599'
                    },
                    {
                        id:'8',
                        tag:'',
                        pic:'https://res0.vmallres.com/pimages//product/6901443319756/428_428_C1BD04C38EB887D9B1C911881CD34BAB44FF95CD90558E39mp.png',
                        title:'HUAWEI nova 5z ',
                        desc:'限时直降200元',
                        price:'¥1599'
                    }
                ],

                recommendSwiperOption: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                    slidesPerGroup: 5,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: '.swiper-button-next-cs',
                        prevEl: '.swiper-button-prev-cs'
                    }
                }
            }
        },
        created(){
            setInterval(this.noticeScroll,3000)
        },
        methods:{
            noticeScroll(){
                this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
                setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
                    this.new_notice.push(this.new_notice[0]);  // 将数组的第一个元素添加到数组的
                    this.new_notice.shift();               //删除数组的第一个元素
                    this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
                },500)
            },
            groupCate(list){
                let result = [];
                for(let i=0;i<list.length;i+=4){
                    result.push(list.slice(i,i+4));
                }
                return result;
            }
        }
    }
</script>
<style  lang="less">
    .home-banner-carousel{
        margin: 0 auto;
        .ivu-carousel-dots-inside{
            height: 28px;
            bottom: 60px;
            width: 1200px;
            left: 50%;
            transform: translate(-50%,0);
            text-align: right;
            li{
                button{
                    background: none;
                    border: 1px solid #fff;
                    width: 13px!important;
                    height: 13px!important;
                }
            }
            .ivu-carousel-active{
                button{
                    background: #fff;
                }
            }
        }
    }
</style>
<style scoped lang="less">
    .home-page{
        position: relative;
        .banner{
            position: absolute;
            z-index: 1;
            width: 1200px;
            margin: 0 auto;
            left: 50%;
            top: 0;
            height: 550px;
            transform: translate(-50%,0);
            margin-top: -30px;
            .category-wrap{
                position: absolute;
                z-index: 2;
                left: 0;
                top: 50%;
                border-radius: 10px;
                transform: translate(0,-50%);
                .category-mini{
                    position: relative;
                    height: auto;
                    width: 210px;
                    .group-category{
                        padding: 15px 30px;
                        height: 74px;
                        box-sizing: border-box;
                        background: rgba(255,255,255,0.95);
                        &:first-child{
                            border-radius: 10px 10px 0 0;
                        }
                        &:last-child{
                            border-radius: 0 0 10px 10px;
                        }
                        &:hover{
                            background: #fff;
                            .group-item{
                                a{
                                    color: #333;
                                }
                            }
                            .group-son{
                                display: flex;
                            }

                        }
                        .group-son{
                            display: none;
                            position: absolute;
                            left: 201px;
                            height: 444px;
                            max-width: 1020px;
                            background: #FFF;
                            padding: 24px 22px 24px 28px;
                            border-radius: 0 10px 10px 0;
                            box-shadow: 0 0 46px rgba(0, 0, 0, 0.1);
                            top: 0;
                            z-index: 1;
                            overflow: hidden;
                            box-sizing: border-box;
                            .son-list{
                                list-style: none;
                                .show-all-li{
                                    &:hover{
                                        background: none;
                                    }
                                    a{
                                        width: 112px;
                                        height: 42px;
                                        line-height: 42px;
                                        margin-top: 18px;
                                        margin-left: 22px;
                                        border: 1px solid #f2f2f2;
                                        border-radius: 0 22px 22px 0;
                                        font-size: 13px;
                                        color: #a7a7a7;
                                        display: block;
                                        position: relative;
                                        text-indent: 34px;
                                        &:before{
                                            content: "";
                                            width: 42px;
                                            height: 42px;
                                            background: #fff;
                                            border: 1px solid #f2f2f2;
                                            display: block;
                                            border-radius: 22px;
                                            position: absolute;
                                            top: -1px;
                                            left: -22px;
                                        }
                                        &:after{
                                            content: "";
                                            width: 0;
                                            height: 0;
                                            display: block;
                                            border-bottom: 5px solid transparent;
                                            border-top: 5px solid transparent;
                                            border-left: 5px solid #c0c0c0;
                                            position: absolute;
                                            top: 16px;
                                            left: -1px;
                                        }

                                        span{
                                            margin-top: 0px;
                                            margin-left: 0px;
                                        }

                                    }
                                }
                                li{
                                    white-space: nowrap;
                                    padding: 12px 15px;
                                    border-radius: 10px;
                                    overflow: hidden;
                                    box-sizing: border-box;
                                    height: 80px;
                                    margin: 15px 0;
                                    &:hover{
                                        background: #f6f6f6;
                                        a{
                                            span{
                                                color: #777;
                                            }
                                        }
                                    }
                                    a{
                                        display: flex;
                                        img{
                                            width: 56px;
                                            height: 56px;
                                        }
                                        span{
                                            display: block;
                                            margin-top: 20px;
                                            margin-left: 10px;
                                            color: #777;
                                        }
                                    }
                                }
                            }


                        }
                        .parent-group{
                            a{
                                font-size: 16px;

                            }
                        }
                        .group-item{
                            a{
                                color: #848484;
                                &:hover{
                                    color:#cf0a2c;
                                }
                                margin-right: 10px;
                                &:last-child{
                                    margin-right: 0;
                                }
                            }

                        }
                    }
                }


            }
        }
        .home-banner-carousel{
            .banner-a{
                display: block;
                width: 100%;
                height: auto;
                text-align: center;
                .banner-img{
                    margin: 0 auto;
                }
            }
        }

        .banner-next-wrap{
            position: relative;
            overflow: hidden;
            margin: 0 auto;
            top: -60px;
            background: #FFF;
            text-align: center;
            border-top: 0 none;
            width: 1200px;
            height: 88px;
            border-radius: 10px;
            box-shadow: 0 2px 26px rgba(0,0,0,0.07);
            display: flex;
            z-index: 2;
            .user-avatar-login{
                float: left;
                margin: 18px 0;
                padding: 0 27px;
                display: flex;
                border-right: 1px solid#dcdcdc;
                .avatar{
                    margin-right: 15px;
                }
                 .login-reg{
                     text-align: left;
                     font-size: 14px;
                     span{
                         color: #848484;
                     }
                     a{
                         margin: 0 5px;
                         color: #333;
                     }
                 }
                 .login-reg-btm{
                     text-align: left;
                     margin-top: 6px;
                    a{
                        font-size: 13px;
                        padding: 3px 10px;
                        border-radius: 7px;
                        &:first-child{
                            color: #de5b60;
                            border: 1px solid #de5b60;
                            margin-right: 10px;
                            &:hover{
                                background: #de5b60;
                                color: #fff;
                            }
                        }
                        &:last-child{
                            background: #595454;
                            border:1px solid #595454;
                            color: #fde4b3;
                            &:hover{
                                background: #333;
                            }
                        }
                    }
                 }
            }

            .center{
                flex: 1;
                display: flex;
                .center-mini{
                    text-align: center;
                    position: relative;
                    width: 80px;
                    margin: 0 10px;
                    overflow: hidden;
                    box-sizing: border-box;
                    padding: 15px 0;
                    color: #777;
                    .img{
                        width: 40px;
                        height: 40px;
                        overflow: hidden;
                        text-align: center;
                        margin: 0 auto;
                        img{
                            position: relative;
                            height: 100%;
                            left: 0;
                        }

                    }
                    &:nth-child(2){
                        img{
                            left: -40px;
                        }
                    }
                    &:nth-child(3){
                        img{
                            left: -40px;
                        }
                    }
                    &:nth-child(4){
                        img{
                            left: -80px;
                        }
                    }
                    &:nth-child(5){
                        img{
                            left: -120px;
                        }
                    }
                    &:nth-child(6){
                        img{
                            left: -160px;
                        }
                    }
                    span{
                        font-size: 12px;
                    }
                }
            }

            .notice-rap{
                width: 260px;
                border-left: 1px solid #eee;
                .notice-list{
                    margin: 10px;
                    text-align: left;
                    display: flex;
                    height: 25px;
                    overflow: hidden;
                    line-height: 25px;
                    .b-text{
                        width: 40px;
                        font-size: 14px;
                        font-weight: 700;
                    }
                    .list-item{
                        position: relative;
                        flex: 1;
                        text-align: left;
                        overflow: hidden;
                        .item{
                            font-size: 12px;
                            float: left;
                            width: 100%;
                            color: #777;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            cursor: pointer;
                        }
                    }
                }
                .evm-rap{
                    display: flex;
                    padding: 10px;
                    border-top: 1px solid #eee;
                    .item{
                        display: flex;
                        flex: 1;
                        color: #777;
                        font-size: 12px;
                        text-align: left;
                        line-height: 23px;
                        &:nth-child(2){
                            .img{
                                img{
                                    right: 260px;
                                }
                            }
                        }
                        &:nth-child(3){
                            .img{
                                img{
                                    right: 280px;
                                }
                            }
                        }
                        .img{
                            position: relative;
                            width: 20px;
                            height: 20px;
                            overflow: hidden;
                            display: block;
                            img{
                                position: relative;
                                right: 240px;
                                height: 40px;
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }



        }

        .home-ad-1{
            position: relative;
            top: -35px;
            width: 1200px;
            margin: 0 auto;
            display: flex;
            .ad-list{
                flex: 1;
                box-sizing: border-box;
                overflow: hidden;
                margin-right: 13px;
                transition: all .2s linear 0s;
                border-radius: 10px;
                height: 200px;
                &:hover{
                    box-shadow: 0 12px 36px rgba(0,0,0,0.1);
                }
                &:last-child{
                    margin-right: 0;
                }
                a{
                    width: 100%;
                    display: block;
                    img{
                        width: 100%;
                        height: auto;
                    }
                }
            }
        }

        .home-hot-product{
            width: 1200px;
            margin: 0 auto;
            .group-title{
                position: relative;
                top: -15px;
            }
            .product-box{
                display: flex;
                .hot-ad{
                    width: 230px;
                    border-radius: 10px;
                    overflow: hidden;
                    height: 592px;
                    &:hover{
                        transition: all 0.2s linear 0s;
                        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
                    }
                    a{
                        img{
                            width: 100%;
                            height: auto;
                        }
                    }
                }
                .product-right{
                    flex: 1;
                    .product-item{
                        width: 230px;
                        float: left;
                        overflow: hidden;
                        margin: 0 0 12px 12px;
                        background: #f9f9f9;
                        border-radius: 10px;
                        transition: all 0.2s linear 0s;
                        text-align: center;
                        height: 290px;
                        &:hover{
                            box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
                        }
                        .tag{
                            height: 23px;
                            span{
                                padding: 5px 10px 5px;
                                color: #fff;
                                background: #ff8486;
                                border-radius: 0 0 7px 7px;
                                box-sizing: border-box;
                                font-size: 12px;
                            }
                        }
                        .pic{
                            box-sizing: border-box;
                            padding: 12px 40px 0 40px;
                            padding-bottom: 0px;
                            img{
                                width: 100%;
                            }
                        }
                        .title{
                            height: 21px;
                            line-height: 21px;
                            margin: 7px 5px 0 5px;
                        }
                        .desc{
                            color: #777;
                            line-height: 18px;
                            padding: 0 10px;
                            margin: 5px 20px 7px;
                            font-size: 12px;
                        }
                        .price{
                            color: #d0021b;
                            line-height: 21px;
                            margin-bottom: 0;
                        }
                    }

                }
            }

        }

        .home-recommend{
            width: 1200px;
            margin: 0 auto;
            .recommend-title{
                margin-bottom: 15px;
            }
            .recommend-swiper {
                width: 1210px;
                margin-left: -5px;
                .swiper-button-prev-cs{
                    position: absolute;
                    top: 80px;
                    left: 4px;
                    z-index: 2;
                    width: 36px;
                    height: 72px;
                    background: rgba(0,0,0,0.06);
                    text-align: center;
                    line-height: 72px;
                    font-size: 18px;
                    border-radius: 0 8px 8px 0;
                    &:hover{
                        background: rgba(0,0,0,0.18);
                        cursor: pointer;
                    }
                }
                .swiper-button-next-cs{
                    position: absolute;
                    top: 80px;
                    right: 8px;
                    z-index: 2;
                    width: 36px;
                    height: 72px;
                    background: rgba(0,0,0,0.06);
                    text-align: center;
                    line-height: 72px;
                    font-size: 18px;
                    border-radius: 8px 0  0 8px;
                    &:hover{
                        background: rgba(0,0,0,0.18);
                        cursor: pointer;
                    }
                }
                .swiper-slide{
                    .swiper-product{
                        text-align: center;
                        .mini{
                            box-sizing: border-box;
                            margin: 5px;
                            overflow: hidden;
                            margin-right: 10px;
                            background: #fff;
                            border-radius: 10px;
                            box-shadow: 0 1px 8px rgba(0,0,0,0.06);
                            &:hover{
                                box-shadow: 0 2px 10px rgba(0,0,0,0.15);
                            }
                            .tag{
                                height: 23px;
                                span{
                                    padding: 5px 10px 5px;
                                    color: #fff;
                                    background: #ff8486;
                                    border-radius: 0 0 7px 7px;
                                    box-sizing: border-box;
                                    font-size: 12px;
                                }
                            }
                            .pic{
                                box-sizing: border-box;
                                padding: 12px 40px 0 40px;
                                padding-bottom: 0px;
                                img{
                                    width: 100%;
                                }
                            }
                            .desc{
                                font-size: 14px;
                                background: #f3f3f3;
                                color: #777;
                                margin: 0;
                                padding: 10px;
                            }
                        }
                        .title{
                            height: 21px;
                            line-height: 21px;
                            margin: 7px 5px 0 5px;
                        }
                        .price{
                            color: #d0021b;
                            line-height: 21px;
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }

    }


</style>