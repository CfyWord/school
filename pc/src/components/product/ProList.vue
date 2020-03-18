<template>

    <ul class="pro-list" v-if="proList.length>0">
        <li v-for="(item,index) in proList" :key="index">
            <router-link :to="'product?id='+item.id">
                <div class="pro-panels" >
                    <div class="tag"  >
                        <span v-show="item.tag" :style="{color:item.tag.color,background:item.tag.background}">{{item.tag.name}}</span>
                    </div>
                    <div class="pic">
                        <img :src="item.pic"/>
                        <div class="shortage" v-show="item.inventory<1">暂时缺货</div>
                    </div>
                    <div class="title">
                       {{item.title}}
                    </div>
                    <div class="price">
                        <span class="prc">¥{{item.price}}</span>
                        <span class="more-prc" v-show="item.sukCount">多款可选</span>
                    </div>
                    <div class="pj">
                        <span class="number">{{item.comment.count}}人评价</span>
                        <span>{{item.comment.percentage}}%好评</span>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
    <div class="not-data" v-else>
        <span>没有数据</span>
    </div>
</template>
<script>
export default {
    name:'ProList',
    props:{
        proList:{
            type:Array,
            required: false,
            default:function () {
                return [];
            }
        },
    },
    data(){
        return{

        }
    },
    created() {
    },
    methods:{

    },
    watch:{

    }
}
</script>
<style scoped lang="less">
    .pro-list{
        list-style: none;
        padding-bottom: 20px;
        &:after{
            content: '';
            display: block;
            float: none;
            clear: both;
        }
        li{
            float: left;
            &:nth-child(5n){
                .pro-panels{
                    margin-right: 0;
                }
            }
            .pro-panels{
                width: 232px;
                height: 325px;
                position: relative;
                background: #fff;
                margin-right: 10px;
                padding: 0 16px;
                margin-bottom: 10px;
                transition: all .2s linear 0s;
                &:hover{
                    box-shadow: 0 6px 15px #e4e4e4;
                    transform: translate3d(0px,-2px,0px);
                    z-index: 2;
                }
                .tag{
                    text-align: center;
                    position:relative;
                    left: 0;
                    top: -2px;
                    width: 100%;
                    height: 18px;
                    span{
                        color: #fff;
                        font-size: 12px;
                        padding: 2px 10px;
                        background-color: #FF6A6E;
                        background: #ff8486;
                        border-radius: 0 0 5px 5px;
                    }
                }
                .pic{
                    position: relative;
                    text-align: center;
                    img{
                        width: 180px;
                        height: 180px;
                    }
                    .shortage{
                        position:absolute;
                        bottom: 0px;
                        left: 0;
                        width: 200px;
                        height: 32px;
                        line-height: 32px;
                        text-align: center;
                        color: #fff;
                        font-size: 14px;
                        background: rgba(0,0,0,0.3);
                        z-index: 2;
                    }
                }
                .title{
                    line-height: 20px;
                    overflow: hidden;
                    color: #333;
                    font-size: 14px;
                    max-height: 40px;
                    margin-top: 8px;
                    margin-bottom: 8px;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .price{
                    margin-bottom: 8px;
                    .prc{
                        font-weight: normal;
                        line-height: 24px;
                        color: #ca141d;
                        font-size: 18px;
                    }
                    .more-prc{
                        display: inline-block;
                        width: 58px;
                        height: 14px;
                        line-height: 14px;
                        font-size: 12px;
                        text-align: center;
                        color: #68beff;
                        border: 1px solid #84c9fd;
                        border-radius: 10px;
                        margin-left: 4px;
                        position: relative;
                        top: -1px;
                    }
                }
                .pj{
                    font-size: 12px;
                    .number{
                        margin-right: 10px;
                    }
                }
            }
        }
    }
    .not-data{
        text-align: center;
        span{
            color: #999999;
        }
    }
</style>