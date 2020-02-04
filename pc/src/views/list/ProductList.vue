<template>
  <div class="product-list-wrap">
        <div class="breadcrumb-wrap">
            <Breadcrumb separator=">" class="breadcrumb-mini">
                <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                <BreadcrumbItem > 笔记本 & 平板</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="cate-search-wrap">
            <div class="cate-search-item cate-list">
                <div class="title">
                    分类：
                </div>
                <div class="list-mini">
                    <div class="item">
                        <router-link to="#">
                            平板电脑
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link to="#">
                            笔记本电脑
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link to="#">
                            笔记本配件
                        </router-link>
                    </div>
                    <div class="item" >
                        <router-link to="#">
                            充电器/线材
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="cate-search-item price-list">
                <div class="title">
                    价格区间：
                </div>
                <div class="list-mini">
                    <CheckboxGroup v-model="priceCheckbox">
                        <Checkbox class="item" label="0-1500"></Checkbox>
                        <Checkbox class="item" label="1500-2700"></Checkbox>
                        <Checkbox class="item" label="2700-6000"></Checkbox>
                    </CheckboxGroup>
                
                </div>
            </div>
            <div class="cate-search-item cate-list">
                <div class="title">
                    排序：
                </div>
                <div class="list-mini">
                    <div class="item">
                        <router-link to="#">
                            综合
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link to="#">
                            最新
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link to="#">
                            热度
                        </router-link>
                    </div>
                    <div class="item" >
                        <router-link to="#">
                            <span>价格</span>
                            <div class="price-sort">
                                <Icon class="icon-1 active-price" type="md-arrow-dropup" />
                                <Icon class="icon-2 " type="md-arrow-dropdown" />
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="hr-20"></div>
        <div class="pro-list-box">
            <ProList></ProList>
            <div class="page-box">
                <Page :total="10000" />
            </div>
        </div>
  </div>
</template>
<script>
import ProList from "../../components/product/ProList.vue";
export default {
    name:"ProductList",
    components:{ProList},
    data(){
        return{
            priceCheckbox:[],
        }
    }
}
</script>
<style scoped lang="less">
    .hr-20{
        height: 20px;
        width: 100%;
    }
    .product-list-wrap{
        background: #F5F5F5;
        .breadcrumb-wrap{
            width: 1200px;
            margin: 0 auto;
            padding: 20px 0;
            .breadcrumb-mini{
                font-size: 12px;
                span{
                    font-weight: unset;
                    color: #666;
                    a{
                        color: #666;
                        &:hover{
                            color: #333!important;
                        }
                    }
                }
                
            }
        }
        .cate-search-wrap{
            width: 1200px;
            margin: 0 auto;
            padding: 0 25px;
            box-sizing: border-box;
            background: #ffffff;
            .cate-search-item{
                display: flex;
                font-size: 12px;
                line-height: 35px;
                color: #666;
                position: relative;
                border-bottom: 1px solid #eaeaea;
                &:last-child{
                    border-bottom: none;
                }
                .title{
                    min-width: 100px;
                     color: #666;
                }
                .list-mini{
                    flex: 1;
                        height: 35px;
                        overflow: hidden;
                    .item{
                        margin-right: 40px;
                        float: left;
                        font-size: 12px;
                        a{
                            color: #333;
                        }
                        &:hover{
                            color:#ca141d;
                            a{
                                color:#ca141d;
                            }
                        }
                        .price-sort{
                            width: 10px;
                            display: inline-block;
                            vertical-align: top;
                            position: relative;
                            height: 35px;
                            .icon-1{
                                position: absolute;
                                top: 5px;
                                font-size: 16px;
                                color: #333;
                            }
                            .icon-2{
                                position: absolute;
                                top: 11px;
                                font-size: 16px;
                                color: #333;
                            }
                            .active-price{
                                color:#ca141d;
                            }
                        }
                    }
                    &:after{
                        content:'';
                        display: block;
                        float: none;
                        clear: both;
                    }
                }
            }
        }

        .pro-list-box{
            width: 1200px;
            margin: 0 auto;
            
        }
        .page-box{
            text-align: right;
        }
    }
</style>