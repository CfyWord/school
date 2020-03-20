<template>
    <div class="home-page">

        <BannerSwiper class="home-banner-carousel"  style="height: 550px" :data-list="bannerList">
            <div slot="isBanner" class="banner">
                <div class="category-wrap">
                    <div class="category-mini">
                        <div class="group-category" v-for="(list,index) in categoryGroup" :key="index">
                            <div class="group-item parent-group">
                                <router-link target="_blank" :to="'/list?cate_id='+list.id">{{list.cate_name}}</router-link>
                            </div>
                            <div class="group-item" >
                                <template v-for="(list2,index2) in list.children" >
                                    <router-link target="_blank" :to="'/list?cate_id='+list2.id" :key="index2"  v-if="list2.is_top">{{list2.cate_name}}</router-link>
                                </template>
                            </div>
                            <div class="group-son">
                                <template v-for="(list3,index2) in groupCate(list.children)" >
                                    <ul class="son-list" :key="index2">
                                        <li v-for="(list4,index4) in list3" :key="index4">
                                            <router-link target="_blank" :to="'/list?cate_id='+list4.id">
                                                <img :src="list4.img">
                                                <span>{{list4.cate_name}}</span>
                                            </router-link>
                                        </li>
                                        <li class="show-all-li" v-if="list3.length>0">
                                            <router-link target="_blank" :to="'/list?cate_id='+list.id">
                                                <span>查看全部</span>
                                            </router-link>
                                        </li>
                                    </ul>
                                </template>
                                <ul class="son-list" v-if="list.children.length%4===0" >
                                    <li class="show-all-li" >
                                        <router-link target="_blank" :to="'/list?cate_id='+list.id">
                                            <span>查看全部</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BannerSwiper>

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
                        <router-link class="item" :to="item.url?item.url:'notice'"  v-for="(item,index) in newNotice"  :key="index">{{item.title}}</router-link>
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
                    <img v-lazy="item.img"  alt="图片" />
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
                <cate-swiper-ad :data-list="recommendProduct"></cate-swiper-ad>
            </div>
        </div>

        <BannerWithAd :data-list="bannerAdSwiperList" class="banner-ad-01"></BannerWithAd>

        <div class="home-channel-container">
            <ProductGroupList class="layout" :data-list="cateGroupDataList" :ad-data="cateGroupAdData" ></ProductGroupList>
        </div>

        <div class="home-channel-container">
                <ProductGroupListTow  class="layout" :data-list="cateGroupDataList" :ad-data="cateGroupAdData" ></ProductGroupListTow>
                <cate-swiper-ad class="is-tui-swiper"  :data-list="recommendProduct" :slides-per-view="6" :slides-per-group="6"></cate-swiper-ad>
        </div>
        <BannerWithAd :data-list="bannerAdSwiperList" class="banner-ad-01"></BannerWithAd>
        <div class="home-channel-container">
                <ProductGroupListTow  class="layout" :data-list="cateGroupDataList" :ad-data="cateGroupAdData" ></ProductGroupListTow>
                <cate-swiper-ad class="is-tui-swiper"  :data-list="recommendProduct" :slides-per-view="6" :slides-per-group="6"></cate-swiper-ad>
        </div>
        <BannerWithAd :data-list="[{title:'',path:'',img:'https://res.vmallres.com/pimages//sale/2019-01/awBg2nLycya1sSIX1juQ.jpg'}]" style="height:200px" class="banner-ad-01"></BannerWithAd>
        <div class="hr-60" style="height:60px;"></div>
    </div>
</template>
<style scoped lang="less">
    .home-channel-container{
        .layout{
            width: 1200px;
            margin: 0 auto;

        }
        .is-tui-swiper{
            margin: 15px auto;
        }
    }

</style>
<script>
    import BannerWithAd from "../../components/bannerAd/BannerWithAd";
    import ProductGroupList from "../../components/home/ProductGroupList";
    import CateSwiperAd from "../../components/home/CateSwiperAd";
    import ProductGroupListTow from "../../components/home/ProductGroupListTow";
    import BannerSwiper from "../../components/home/BannerSwiper";
    export default {
        name: "Home",
        components: {BannerSwiper, ProductGroupListTow, CateSwiperAd, ProductGroupList, BannerWithAd},
        data(){
            return{
                bannerAdSwiperList:[
                    {
                        title:'',
                        path:"#",
                        img:"https://res.vmallres.com/pimages//pages/picImages/0Mhyzrl7EMqHl0W7AXou.jpg",
                    },
                    {
                        title:'',
                        path:"#",
                        img:"https://res.vmallres.com/pimages//pages/picImages/iAmu93kmBd5FozOHhZZ2.jpg",
                    },
                    {
                        title:'',
                        path:"#",
                        img:"https://res.vmallres.com/pimages//pages/picImages/pAweYuSXBydkqXhfblVo.jpg",
                    },
                    {
                        title:'',
                        path:"#",
                        img:"https://res.vmallres.com/pimages//pages/picImages/DcDfj4QFG48Ml25EsZlU.jpg",
                    }
                ],
                bannerActive:0,
                bannerList:[
                    {path:'',title:'',url:'https://res.vmallres.com/pimages//pages/picImages/zLCUVyL22r5anaaTwThm.jpg'},
                    {path:'',title:'',url:'https://res.vmallres.com/pimages//pages/picImages/KtGREsXwor9Obq2pwbvm.jpg'},
                    {path:'',title:'',url:'https://res.vmallres.com/pimages//pages/picImages/ZhLMfiz62cYBjhDEhK8H.jpg'},
                    {path:'',title:'',url:'https://res.vmallres.com/pimages//pages/picImages/V31GeyzpDIvVg9Xh8oKI.jpg'},
                    {path:'',title:'',url:'https://res.vmallres.com/pimages//pages/picImages/SmnU0htJkcRrKFHn4Jhv.jpg'},
                    {path:'',title:'',url:'https://res.vmallres.com/pimages//pages/picImages/PXofwbY25q8DHxbCb6fE.jpg'},
                ],
                categoryGroup:[],
                newNotice:[],
                adList:[],
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
                    slidesPerView: 6,
                    spaceBetween: 0,
                    slidesPerGroup: 6,
                    loop: false,
                    loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: '.swiper-button-next-cs',
                        prevEl: '.swiper-button-prev-cs'
                    }
                },

                recommendProduct:[
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
                    },
                    {
                        id:'9',
                        tag:'',
                        pic:' https://res0.vmallres.com/pimages//product/6901443269723/428_428_1540895297253mp.png',
                        title:'HUAWEI nova 5z ',
                        desc:'限时直降200元',
                        price:'¥1599'
                    }
                ],

                cateGroupDataList2:[
                    {
                        cate_list:{
                                cate_name:'手机',
                                id:'',
                                path:'',
                                pid:0,
                                img:'',
                                children:[
                                    {
                                        cate_name:'HUAWEI Mate系列',
                                        id:'',
                                        path:'',
                                        is_top:1,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'HUAWEI P系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'HUAWEI nova系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'华为畅享系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'荣耀 V系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'荣耀 HONOR系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'荣耀 X系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'荣耀 Play系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'HUAWEI 麦芒系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                ]
                            },
                        product_list:[
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
                            },
                            {
                                id:'9',
                                tag:'',
                                pic:' https://res0.vmallres.com/pimages//product/6901443269723/428_428_1540895297253mp.png',
                                title:'HUAWEI nova 5z ',
                                desc:'限时直降200元',
                                price:'¥1599'
                            }
                        ],
                    },
                    {
                        cate_list: {
                                cate_name:'手机',
                                id:'',
                                path:'',
                                pid:0,
                                img:'',
                                children:[
                                    {
                                        cate_name:'HUAWEI Mate系列',
                                        id:'',
                                        path:'',
                                        is_top:1,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'HUAWEI P系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'HUAWEI nova系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'华为畅享系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'荣耀 V系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'荣耀 HONOR系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'荣耀 X系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'荣耀 Play系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                    {
                                        cate_name:'HUAWEI 麦芒系列',
                                        id:'',
                                        path:'',
                                        is_top:0,
                                        pid:0,
                                        img:'',
                                    },
                                ]
                            },
                        product_list:[
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
                            },
                            {
                                id:'9',
                                tag:'',
                                pic:' https://res0.vmallres.com/pimages//product/6901443269723/428_428_1540895297253mp.png',
                                title:'HUAWEI nova 5z ',
                                desc:'限时直降200元',
                                price:'¥1599'
                            }
                        ],
                    }
                ],
                cateGroupDataList:[
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
                    },
                    {
                        id:'9',
                        tag:'',
                        pic:' https://res0.vmallres.com/pimages//product/6901443269723/428_428_1540895297253mp.png',
                        title:'HUAWEI nova 5z ',
                        desc:'限时直降200元',
                        price:'¥1599'
                    }
                ],
                cateGroupAdData:{
                    id:'1',
                    path:'#',
                    pic:'https://res0.vmallres.com/pimages//frontLocation/content/bhVGJ9RFw4XRJqd1rJ5m.png',
                },
                noticeScrollTimer:null,
            }
        },
        created(){
            this.getCategoryList();
            this.getNewNotice();
            this.getAdList();
        },
        mounted(){
            this.noticeScrollTimer = setInterval(this.noticeScroll,1500);
        },
        destroyed() {
            clearInterval(this.noticeScrollTimer);
        },
        methods:{
            getAdList(){
                this.axios.get(this.ApiPath.home.adList).then(res=>{
                    this.adList = res.data;
                });
            },
            getNewNotice(){
                this.axios.get(this.ApiPath.home.notice).then(res=>{
                    this.newNotice = res.data;
                });
            },
            getCategoryList(){
                this.axios.get(this.ApiPath.category.getList).then(res=>{
                    this.categoryGroup = res.data;
                });
            },
            noticeScroll(){
                this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
                setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
                    this.newNotice.push(this.newNotice[0]);  // 将数组的第一个元素添加到数组的
                    this.newNotice.shift();               //删除数组的第一个元素
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
        position: relative;
        z-index: 1;
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
    @import "../../assets/less/home.less";
</style>