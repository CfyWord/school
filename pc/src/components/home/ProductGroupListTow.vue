<template>
    <div class="product-group-list-tow-wrap">
        <div class="product-group-list-header">
            <h2 class="title">手机</h2>
            <div class="product-cate-mini">
                <ul class="cate-ul">
                    <li class="cate-li" v-for="index in 15" :key="index">
                        <router-link to="#">荣耀 V{{index}}系列</router-link>
                    </li>
                </ul>
                <div class="more-btm">
                    <router-link to="#">查看更多</router-link>
                </div>
            </div>
        </div>
        <div class="list-mini">
            <div class="product-item cate-ad">
                <router-link :to="adData.path">
                    <img :src="adData.pic"/>
                </router-link>
            </div>
            <div class="product-item" v-for="item in dataList" :key="item.id">
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
</template>



<style scoped lang="less">
    .product-group-list-tow-wrap{
        .product-group-list-header{
            display: flex;
            line-height: 32px;
            height: 32px;
            overflow: hidden;
            margin-bottom: 12px;
            .title{
                font-size: 26px;
            }
            .product-cate-mini{
                flex: 1;
                margin-left: 28px;
                display: flex;
                .cate-ul{
                    list-style: none;
                    flex: 1;
                    .cate-li{
                        float: left;
                        margin-right: 24px;
                        &:last-child{
                            margin-right: 0;
                        }
                        &:hover{
                            a{
                                color: #cb242b;
                            }
                        }
                        a{
                            font-size: 14px;
                            color: #999;
                        }
                    }
                }
                .more-btm{

                    text-align: right;
                    &:hover{
                        a{
                            color: #cb242b;
                        }
                    }
                    a{
                        font-size: 14px;
                        color: #666;
                        &:after{
                            content: ' >';
                        }
                    }
                }
            }
        }
        .list-mini{
            width: 100%;
            &:after{
                display: block;
                content: '';
                float: none;
                clear: both;
            }
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
                &:first-child{
                    margin-left: 0;
                }
                &:nth-child(5n){
                    margin-left: 0;
                }
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

            .cate-ad{
                width: 471px;
                a{
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

</style>
<script>
    export default {
        name: "ProductGroupList",
        props:{
            dataList:{
                type:Array,
            },
            adData:{
                type: Object
            }
        },
        data(){
            return{

            }
        }
    }
</script>
