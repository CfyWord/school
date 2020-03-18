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
                        <router-link to="/">首页</router-link>
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
                                <li class="nav-li" v-for="(item,index) in navList" :key="index">
                                    <router-link target="_blank" :to="item.url">
                                        <img v-if="item.img"  :src="item.img"/>
                                        <span v-else>{{item.title}}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </i-col>
                    </Row>
                </i-col>
                <i-col class="right" span="9">
                    <div class="search-wrap">
                        <div class="search-box">
                            <input type="search" class="search-input" id="base-hot-search-input" name="search" @focus="searchInputFocus" @blur="searchInputBlur" @input="searchInputInsert" @keydown="searchInputKeydown" v-model="searchValue"/>
                            <Icon type="ios-search" class="search-icon" @click="goSearch(searchValue)" />
                            <div class="hot-search" v-show="showHotSearch&&searchValue===''">
                                <a target="_blank" :href="item.url?item.url:'/search?keyword='+item.title" v-for="(item,index) in hotSearch" :key="index">{{item.title}}</a>
                            </div>
                        </div>
                        <transition name="fade">
                            <div v-show="showSearchItem&&hotSearchItemList.length>0&&searchValue===''" class="hot-search-item" id="base-hot-search-item">
                                <template v-if="searchHistoryRecordList.length>0">
                                    <div class="sub history-record">
                                        历史记录
                                        <span class="clear" @click="SearchHistoryRecordClear">清除</span>
                                    </div>
                                    <ul class="item-ul">
                                        <li class="item-li" @click="goSearch(item)" v-for="(item,index) in searchHistoryRecordList" :key="index">
                                            <a  >{{item}}</a>
                                        </li>
                                    </ul>
                                </template>


                                <div class="sub" >
                                    热门搜索
                                </div>
                                <ul class="item-ul">
                                    <li class="item-li" @click="goSearch(item.title)" v-for="(item,index) in hotSearchItemList" :key="index">
                                        <a  >{{item.title}}</a>
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
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "Base",
        data(){
           return{
               navList:[],
               topBannerImg:{title:"",url:'#',img:'https://res.vmallres.com/pimages//pages/picImages/VwKnAdhGCTd8vj02Lt4x.jpg'},
               logo:'',
               showSearchItem:false,
               searchValue:'',
               topBannerMinShow:true,
               showHotSearch:true,
               hotSearch:[],
               hotSearchItemList:[],
               searchTime:null,
           }
        },
        computed: {
            ...mapState({
                searchHistoryRecordList: state => state.SearchHistoryRecord.items,
            }),
        },
        created() {
            this.getCommonConfig();
        },
        mounted(){
            window.addEventListener('click', this.documentClick)
        },
        methods:{
            ...mapActions({
                SearchHistoryRecordClear: 'SearchHistoryRecord/clear', // 将 `this.add()` 映射为 `this.$store.commit('increment')`
                SearchHistoryRecordReset:'SearchHistoryRecord/reset',
            }),
            documentClick(e){
                let path = e.path;
                let hide = true;
                path.forEach(item=>{
                    if (item.id==='base-hot-search-item'||item.id==='base-hot-search-input'){
                        return hide=false;
                    }
                });
                if (hide){
                    this.showSearchItem = false;
                }

            },
            goSearch(value){
                this.showSearchItem = true;
                this.searchValue = value;
                let routeData = this.$router.resolve({
                    path:'/search',
                    query: {
                        keyword:value
                    },
                });
                this.showSearchItem = false;
                window.open(routeData.href, '_blank');

            },
            getCommonConfig(){
                this.axios.get(this.ApiPath.common.config).then(res=>{
                    this.navList = res.data.navList;
                    this.logo = res.data.logo;
                    this.hotSearchItemList = res.data.hotSearchItemList;
                    this.hotSearch = res.data.hotSearch;
                })
            },
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
                if (e.keyCode===13&&this.searchValue!==''){
                    let routeData = this.$router.resolve({
                        name: "List",
                        path:'/search',
                        query: {
                            keyword:this.searchValue
                        },
                    });
                    this.showSearchItem = false;
                    window.open(routeData.href, '_blank');
                }
            },
            searchInputFocus(){
                this.SearchHistoryRecordReset();
                this.showSearchItem = true;
                this.showHotSearch = false;
            },
            searchInputBlur(){
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
                randSearch.forEach(item=>{
                    if (item.title.indexOf(this.searchValue)!==-1) {
                        res.push(item);
                    }
                });
                this.hotSearchItemList = res;
            }


        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/base.less";
</style>