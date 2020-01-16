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
    }
</style>