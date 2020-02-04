<template>
    <ul class="pro-list">
        <li v-for="index in 15" :key="index">
            <router-link to="product">
                <div class="pro-panels" >
                    <div class="tag">
                        <span>新品上市</span>
                    </div>
                    <div class="pic">
                        <img src="https://res.vmallres.com/pimages//product/6901443181209/428_428_1545126619402mp.png"/>
                        <div class="shortage">暂时缺货</div>
                    </div>
                    <div class="title">
                        HUAWEI MateBook D 14
                    </div>
                    <div class="price">
                        <span class="prc">¥4299</span>
                        <span class="more-prc">多款可选</span>
                    </div>
                    <div class="pj">
                        <span class="number">10054人评价</span>
                        <span>98%好评</span>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</template>
<script>
export default {
    name:'ProList',
    data(){
        return{

        }
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
                    position:absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
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
</style>