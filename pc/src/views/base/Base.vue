<template>
    <div class="base-wrap">
        <div class="top-banner-min" v-show="topBannerMinShow">
            <div class="top-banner-img">
                <router-link class="img-a" :to="topBannerImg.url">
                    <img style="margin: 0 auto;" :src="topBannerImg.img" :title="topBannerImg.title">
                </router-link>
                <Icon class="close-banner" @click="topBannerMinShow=false"  type="ios-close-circle-outline" />
            </div>
        </div>
        <div class="header-nav-wrap">
            <Row class="header-nav">
                <i-col class="nav-left" span="12">
                    <div class="item">
                        <router-link to="#">首页</router-link>
                    </div>
                    <div class="item">
                        <router-link to="#">华为官网</router-link>
                    </div>
                    <div class="item">
                        <router-link to="#">荣耀官网</router-link>
                    </div>
                    <div class="item">
                        <router-link to="#">花粉俱乐部</router-link>
                    </div>
                    <div class="item">
                        <router-link to="#">V码(优购码)</router-link>
                    </div>
                    <div class="item">
                        <router-link to="#">企业购</router-link>
                    </div>
                    <div class="item">
                        <router-link to="#">Select Region</router-link>
                    </div>
                    <div class="item has-dropdown">
                        <Dropdown class="dropdown-nav">
                            <router-link to="#">
                                更多精彩
                                <Icon type="ios-arrow-down"></Icon>
                            </router-link>
                            <DropdownMenu slot="list">
                                <DropdownItem>EMUI</DropdownItem>
                                <DropdownItem>应用市场</DropdownItem>
                                <DropdownItem>华为终端云空间</DropdownItem>
                                <DropdownItem>开发者联盟</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </i-col>
                <i-col  class="nav-right" span="12">
                    <div class="item has-dropdown">
                        <router-link to="#">购物车(0)</router-link>
                    </div>
                    <div class="item has-dropdown">
                        <router-link to="#">
                            V码(手机版)
                            <Icon type="ios-arrow-down"></Icon>
                        </router-link>
                    </div>
                    <div class="item has-dropdown">
                        <router-link to="#">
                            网站导航
                            <Icon type="ios-arrow-down"></Icon>
                        </router-link>
                    </div>
                    <div class="item has-dropdown">
                        <router-link to="#">
                            客户服务
                            <Icon type="ios-arrow-down"></Icon>
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link to="#">我的订单</router-link>
                    </div>
                    <div class="item">
                        <router-link to="#">请登录 注册</router-link>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="header-wrap">
            <Row class="header-mini">
                <i-col span="15" class="left">
                    <Row class="left-mini">
                        <i-col span="8" class="logo">
                            <img :src="logo" alt="Vmall.com - 华为商城">
                        </i-col>
                        <i-col span="16">
                            <ul class="nav-ul">
                                <li class="nav-li">
                                    <router-link to="#">华为专区</router-link>
                                </li>
                                <li class="nav-li">
                                    <router-link to="#">荣耀专区</router-link>
                                </li>
                                <li class="nav-li">
                                    <router-link to="#">Mate30系列</router-link>
                                </li>
                                <li class="nav-li">
                                    <router-link to="#">荣耀V30 5G</router-link>
                                </li>
                            </ul>
                        </i-col>
                    </Row>
                </i-col>
                <i-col class="right" span="9">
                    <div class="search-wrap">
                        <div class="search-box">
                            <input type="search" class="search-input" name="search" @focus="searchInputFocus" @blur="searchInputBlur" @input="searchInputInsert" @keydown="searchInputKeydown" v-model="searchValue"/>
                            <Icon type="ios-search" class="search-icon" />
                            <div class="hot-search" v-show="showHotSearch">
                                <router-link to="#" v-for="(item,index) in hotSearch" :key="index">{{item.title}}</router-link>
                            </div>
                        </div>
                        <transition name="fade">
                            <div v-show="showSearchItem&&hotSearchItemList.length>0" class="hot-search-item">
                                <div class="sub" v-show="!searchValue">
                                    热门搜索
                                </div>
                                <ul class="item-ul">
                                    <li class="item-li" v-for="(item,index) in hotSearchItemList" :key="index">
                                        <router-link to="#">{{item.title}}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                </i-col>
            </Row>
        </div>
        <router-view></router-view>
        <div class="common-footer">
            <div class="slogan-container">
                <ul>
                    <li >
                        <router-link to="#">
                            <img src="../../assets/slogan1.png"/>
                            <span>百强企业 品质保证</span>
                        </router-link>
                    </li>
                    <li >
                        <router-link to="#">
                            <img src="../../assets/slogan2.png"/>
                            <span>7天退货 15天换货</span>
                        </router-link>
                    </li>
                    <li >
                        <router-link to="#">
                            <img src="../../assets/slogan3.png"/>
                            <span>48元起免运费</span>
                        </router-link>
                    </li>
                    <li >
                        <router-link to="#">
                            <img src="../../assets/slogan4.png"/>
                            <span>1000家维修网点 全国联保</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="service-container">
                <div class="service">
                    <div class="service-l">
                        <dl>
                            <dt>
                                <p>购物相关</p>
                            </dt>
                            <dd>
                                <ol>
                                    <li>购物指南</li>
                                    <li>配送方式</li>
                                    <li>支付方式</li>
                                    <li>常见问题</li>
                                </ol>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <p>保修与退换货</p>
                            </dt>
                            <dd>
                                <ol>
                                    <li>保修政策</li>
                                    <li>退换货政策</li>
                                    <li>退换货流程</li>
                                    <li>保修状态查询</li>
                                    <li>配件防伪查询</li>
                                </ol>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <p>维修与技术支持</p>
                            </dt>
                            <dd>
                                <ol>
                                    <li>售后网点</li>
                                    <li>预约维修</li>
                                    <li>手机寄修</li>
                                    <li>备件价格查询</li>
                                    <li>上门服务</li>
                                </ol>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <p>特色服务</p>
                            </dt>
                            <dd>
                                <ol>
                                    <li>防伪查询</li>
                                    <li>补购保障</li>
                                    <li>以旧换新</li>
                                    <li>礼品包装</li>
                                </ol>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <p>关于我们</p>
                            </dt>
                            <dd>
                                <ol>
                                    <li>公司介绍</li>
                                    <li>华为商城简介</li>
                                    <li>华为线下门店</li>
                                    <li>荣耀线下门店</li>
                                    <li>意见反馈</li>
                                </ol>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <p>友情链接</p>
                            </dt>
                            <dd>
                                <ol>
                                    <li>华为集团</li>
                                    <li>华为CBG官网</li>
                                    <li>荣耀官网</li>
                                    <li>花粉俱乐部</li>
                                    <li>华为云</li>
                                </ol>
                            </dd>
                        </dl>
                    </div>
                    <div class="service-r">
                        <div class="phone-number">
                            950805
                        </div>
                        <div class="phont-sub">
                            7x24小时客服热线（仅收市话费）
                        </div>
                        <div class="button">
                            <Button type="primary" shape="circle" style="background: #333;border: 1px solid #333;color: #fff;" >
                                <Icon type="md-call" color="#fff" style="margin-right: 20px" />
                               <span style="color: #fff;">在线客服</span>
                            </Button>
                        </div>
                        <div class="service-code">
                            <h2>关注Vmall：</h2>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-container">
                <div class="footer">
                    <div class="footer-warrant-logo">
                        <router-link to="#">
                            <img src="https://res.vmallres.com/pimages//sale/2019-01/wLelYbpMVWbj9Xpaa5Fk.png" title="华为商城">
                        </router-link>
                    </div>
                    <div class="footer-warrant-content">
                        <ul>
                            <li>
                                <router-link to="#">
                                    华为集团
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    华为CBG官网
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    荣耀官网
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    花粉俱乐部
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    华为应用市场
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    EMUI
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    华为终端云空间
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    开发者联盟
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    华为商城手机版
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    网站地图
                                </router-link>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <router-link to="#">
                                    隐私声明
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    服务协议
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    COOKIES
                                </router-link>
                            </li>
                            <li>
                                Copyright © 2012-2019 华为软件技术有限公司 版权所有 保留一切权利 公安备案
                            </li>
                            <li>
                                <router-link to="#">
                                    苏公网安备32011402010009号
                                </router-link>
                            </li>
                        
                        </ul>
                        <ul>
                            <li>
                                <router-link to="#">
                                    苏ICP备17040376号-6
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    增值电信业务经营许可证：苏B2-20130048号
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    网络文化经营许可证：苏网文[2015] 1599-026号
                                </router-link>
                            </li>
                            <li>
                                备案主体编号：44201919072182
                            </li>
                        </ul>
                    </div>
                    <div class="footer-warrant-img">
                        <router-link to="#">
                            <img alt="电子营业执照" src="https://res.vmallres.com/pimages//template/content/2016/20160226162415360.png" title="电子营业执照">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Base",
        data(){
           return{
               topBannerImg:{title:"",url:'#',img:'https://res.vmallres.com/pimages//pages/picImages/VwKnAdhGCTd8vj02Lt4x.jpg'},
               logo:'https://res.vmallres.com/pimages//common/config/logo/SXppnESYv4K11DBxDFc2.png',
               showSearchItem:false,
               searchValue:'',
               topBannerMinShow:true,
               showHotSearch:true,
               hotSearch:[{title:'nova 6 '},{title:'荣耀V30 5G'}],
               hotSearchItemList:[
                   {title:'荣耀pay 3'},
                   {title:'nova 6 SE'},
                   {title:'荣耀20'},
                   {title:'Mate 30'},
                   {title:'nova 5z'},
                   {title:'荣耀9X'},
                   {title:'Freebuds '},
                   {title:'荣耀20 青春版'},
                   {title:'华为手表GT 2'}
                   ],
               searchTime:null,
           }
        },
        created() {
        },
        methods:{
            searchInputInsert(){
                if (this.searchTime){
                    clearTimeout(this.searchTime)
                }
                this.searchTime =  setTimeout(()=>{
                    clearTimeout(this.searchTime)
                    this.searchGetItem();
                },500);


            },
            searchInputKeydown(e){
                if (e.keyCode==13){
                    this.$Message.success('按回车键');
                }
            },
            searchInputFocus(){
                this.showSearchItem = true;
                this.showHotSearch = false;
            },
            searchInputBlur(){
                this.showSearchItem = false;
                if (!this.searchValue) {
                    this.showHotSearch = true;
                }
            },

            searchGetItem(){
                let randSearch = [
                    {title:'荣耀pay 3'},
                    {title:'nova 6 SE'},
                    {title:'荣耀20'},
                    {title:'Mate 30'},
                    {title:'nova 5z'},
                    {title:'荣耀9X'},
                    {title:'Freebuds '},
                    {title:'荣耀20 青春版'},
                    {title:'华为手表GT 2'}
                ];
                let res = [];
                randSearch.forEach((item)=>{
                    if (item.title.indexOf(this.searchValue)!=-1) {
                        res.push(item);
                    }
                })
                this.hotSearchItemList = res;
            }


        }
    }
</script>

<style scoped lang="less">
    .hr-60{
        width: 100%;
        height: 60px;
    }
    .base-wrap{
        min-width: 1200px;
        @media screen and (min-width:1200px){//当屏幕最大669时，执行下面css
            overflow-x: hidden;
        }

        @media screen and (max-width:1200px){//当屏幕最小669时，执行下面
            overflow-x: hidden;
        }
        .top-banner-min{
            .top-banner-img{
                position: relative;
                width: 1200px;
                margin: 0 auto;
                .img-a{
                    display: block;
                    position: relative;
                   max-width: 1200px;
                    text-align: center;
                    left: 50%;
                    margin-left: -960px;
                }
            }
            .close-banner{
                font-size: 24px;
                position: absolute;
                right: 0;
                cursor: pointer;
                top: 10px;
            }
        }
        .header-nav-wrap{
            min-width: 1200px;
            height: 36px;
            line-height: 36px;
            background-color: #f9f9f9;
            .header-nav{
                width: 1200px;
                margin: 0 auto;
                .nav-left{
                    .item{
                        position: relative;
                        padding: 0 8px;
                        float: left;
                        &:first-child{
                            &:before{
                                display: none;
                            }
                        }
                        &:before{
                            content: "";
                            width: 1px;
                            height: 10px;
                            display: block;
                            position: absolute;
                            top: 13px;
                            left: 0;
                            background: #d3d3d3;
                        }
                        a{
                            color: #a4a4a4;
                            font-size: 12px;
                            &:hover{
                                color: #cf0a2c;
                            }
                        }
                        .dropdown-nav{
                            &:hover{
                                .ivu-dropdown-rel{
                                    a{
                                        color: #cf0a2c;
                                    }
                                }
                            }
                            .ivu-select-dropdown{
                                .ivu-dropdown-menu{
                                    .ivu-dropdown-item{
                                        &:hover{
                                            color: #cf0a2c;
                                        }
                                    }
                                }
                            }

                        }
                    }
                    .has-dropdown{
                        &:hover{
                            background: #fff;
                            &:before{
                                display: none;
                            }
                        }
                    }
                }

                .nav-right{
                    .item{
                        position: relative;
                        padding: 0 8px;
                        float: right;
                        &:last-child{
                            &:after{
                                display: none;
                            }
                        }
                        &:after{
                            content: "";
                            width: 1px;
                            height: 10px;
                            display: block;
                            position: absolute;
                            top: 13px;
                            left: 0;
                            background: #d3d3d3;
                        }
                        a{
                            color: #a4a4a4;
                            font-size: 12px;
                            &:hover{
                                color: #cf0a2c;
                            }
                        }
                        .dropdown-nav{
                            &:hover{
                                .ivu-dropdown-rel{
                                    a{
                                        color: #cf0a2c;
                                    }
                                }
                            }
                            .ivu-select-dropdown{
                                .ivu-dropdown-menu{
                                    .ivu-dropdown-item{
                                        &:hover{
                                            color: #cf0a2c;
                                        }
                                    }
                                }
                            }

                        }
                    }
                    .has-dropdown{
                        &:hover{
                            background: #fff;
                            &:after{
                                display: none;
                            }
                        }
                    }
                }
            }
        }
        .header-wrap{
            min-width: 1200px;
            height: 41px;
            padding: 18px 0 15px 0;
            background: #fff;
            position: relative;
            box-sizing: content-box;
            box-shadow: 0 0 46px rgba(0,0,0,0.03);
            .header-mini{
                height: 100%;
                width: 1200px;
                margin: 0 auto;
                .left{
                    height: 100%;
                    .left-mini{
                        height: 100%;
                        .logo{
                            height: 100%;
                            img{
                                height: 36px;
                            }
                        }
                        .nav-ul{
                            list-style: none;
                            line-height: 41px;
                            .nav-li{
                                float: left;
                                margin-right: 15px;
                                &:nth-child(1){
                                    a{
                                        background: #ff8486;
                                        color: #fff;
                                    }
                                }
                                &:nth-child(2){

                                    a{
                                        background: #74c7ff;
                                        color: #fff;
                                    }
                                }
                                a{
                                    font-size: 16px;
                                    padding: 5px 10px;
                                    border-radius: 20px;
                                    color: #000;
                                }
                            }
                        }

                    }
                }

                .right{
                    .search-wrap{
                        position: relative;
                        width: 320px;
                        float: right;
                        .search-box{
                            position: relative;
                            background: #f0f0f0;
                            width: 320px;
                            border-radius: 20px;
                            overflow: hidden;
                            padding: 2px 7px 2px 15px;
                            display: flex;
                            float: right;
                            border: 1px solid #f0f0f0;
                            &:hover{
                                border: 1px solid #c9c9c9;
                            }
                            &:focus{
                                border: 1px solid #c9c9c9;
                            }
                            .search-input{
                                outline: none;
                                border: none;
                                flex: 1;
                                background: none;
                                color: #353535;
                            }
                            .search-icon{
                                position: relative;
                                font-size: 24px;
                                color: #353535;
                                cursor: pointer;
                                top: 2px;
                            }
                            .hot-search{
                                position: absolute;
                                right: 43px;
                                a{
                                    font-size: 12px;
                                    line-height: 27px;
                                    margin-left: 10px;
                                    color: #999;
                                    &:nth-child(1){
                                        color: #CF0A2C;
                                    }
                                }

                            }
                            
                        }
                        .hot-search-item{
                            position: absolute;
                            top: 40px;
                            width: 100%;
                            left: 0;
                            border-top: 1px solid #f2f2f5;
                            border-radius: 5px;
                            background: #fff;
                            overflow: hidden;
                            box-shadow: 0 0 5px rgba(204, 204, 204, 0.28);
                            z-index: 2;
                            .sub{
                                padding: 10px;
                                color: #999;
                            }
                            .item-ul{
                                list-style: none;
                                .item-li{
                                    padding: 5px 10px;
                                    cursor: pointer;
                                    &:hover{
                                        background: #f0f0f0;
                                    }
                                    a{
                                        color: #333;
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }

        .common-footer{
            background: #f9f9f9;
            .slogan-container{
                width: 1200px;
                margin: 0 auto;
                padding: 20px 0;
                ul{
                    display: flex;
                    list-style: none;
                    li{
                        background-position: 0 250px;
                        font-size: 18px;
                        line-height: 40px;
                        flex: 1;
                        img{
                            float: left;
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            overflow: hidden;
                            border: 1px solid #ccc;
                            margin-right: 20px;
                        }
                    }
                }
            }
            .service-container {
                .service{
                    display: flex;
                    border-top: 1px solid #e5e5e5;
                    border-bottom: 1px solid #e5e5e5;
                    padding: 23px 0 24px;
                    width: 1200px;
                    margin: 0 auto;
                    .service-l{
                        display: flex;
                        flex: 1;
                        border-right: 1px solid #e5e5e5;
                        dl{
                            flex: 1;
                            dt{
                                p{
                                    font-size: 14px;
                                    margin-bottom: 20px;
                                }
                            }
                            dd{
                                ol{
                                    list-style: none;
                                    li{
                                        font-size: 12px;
                                        color: #777;
                                        line-height: 22px;
                                        cursor: pointer;
                                        &:hover{
                                            color: #ca151d;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .service-r{
                        width: 280px;
                        text-align: center;
                        .phone-number{
                            font-size: 24px;
                        }
                        .button{
                            margin: 15px 0;
                            button{
                                width: 160px;
                            }
                        }
                        .service-code{
                            display: flex;
                            width: max-content;
                            text-align: center;
                            margin: 0 auto;
                            h2{
                                font-size: 14px;
                            }
                            ul{
                                list-style: none;
                                li{
                                    width: 24px;
                                    height: 24px;
                                    float: left;
                                    border: 1px solid #ccc;
                                    margin-right: 10px;
                                    cursor: pointer;

                                }
                            }
                        }
                    }

                }

            }
            .footer-container{
                .footer{
                    width: 1200px;
                    margin:  0 auto;
                    padding: 20px 0;
                    &:after{
                        content: '';
                        display: block;
                        float: none;
                        clear: both;
                    }
                    .footer-warrant-logo{
                        float: left;
                        margin-right: 20px;
                        a{
                            img{
                                width: 80px;
                            }
                        }
                    }
                    .footer-warrant-img{
                        float: right;
                        a{
                            img{
                                width: 70px;
                            }
                        }
                    }
                    .footer-warrant-content{
                        float: left;
                        ul{
                            list-style: none;
                            display: flex;
                            li{
                                margin-right: 5px;
                                color: #777777;
                                &:last-child{
                                    margin-right: 0;
                                   
                                }
                                a{
                                    &:hover{
                                        color: #ca151d!important;
                                    }
                                }
                        
                            }
                            &:nth-child(1){
                                li{
                                    &:last-child{
                                        &:after{
                                            display: none;
                                        }
                                    }
                                    &:after{
                                        content: '|';
                                        margin-right: 0;
                                    }  
                                    a{
                                       color: #777777; 
                                    }  
                                }
                                
                            }
                            &:nth-child(2){
                                li{
                                    font-size: 12px;
                                   color: #a4a4a4;
                                    a{
                                       color: #a4a4a4; 
                                    }  
                                }
                                
                            }
                            &:nth-child(3){
                                li{
                                    font-size: 12px;
                                   color: #a4a4a4; 
                                    a{
                                       color: #a4a4a4; 
                                    }  
                                    &:nth-child(3){
                                        &::before{
                                            color: #a4a4a4; 
                                            content: '|';
                                        }
                                        &:after{
                                            color: #a4a4a4; 
                                            content: '|';
                                        }
                                    }
                                }
                                
                            }
                        }
                    }
                }
            }
        }

    }
</style>