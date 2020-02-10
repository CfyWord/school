<template>
    <div class="ticket-teceive" v-if="visible">
        <div class="marks"></div>
        <div class="content">
            <Icon class="close" type="ios-close" @click="checkClose" />
            <div class="title">- 领取优惠卷 -</div>
            <div class="mini">
                <div class="list-box">
                    <ul>
                        <li>
                            <em>￥</em>
                            <div class="roll-info">
                                <div class="roll-price">
                                    <span>600</span>
                                    <p><strong>优惠券</strong></p>
                                </div> 
                                <p class="roll-word">【华为】Mate 20 Pro 600元优惠券</p>
                                <p class="roll-time">2020.02.01 - 2020.02.07</p>
                            </div>
                            <div  class="roll-btn">
                                立<br>即<br>领<br>取
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <p  class="product-layer-tips" >
                <Icon class="information" type="md-information-circle" />
                <span>亲，您还未登录哦，登录后才能领取哦~~</span>
                <a href="javascript:;" >马上登录</a>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TicketReceive',
    props:{
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            
        }
    },
    methods:{
        checkClose(){
            this.$emit('update:visible',false)
        }
    },
    created () {
        
    },
    mounted(){
       
    },
}
</script>
<style scoped lang='less'>
.ticket-teceive{
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    .marks{
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000000;
        opacity: 0.3;
        z-index: 1;
    }
    .content{
        position: absolute;
        z-index: 2;
        top: 30px;
        background: #ffffff;
        border: 1px solid #cecece;
        width: 700px;
        left: 50%;
        margin-left: -350px;
        box-sizing: border-box;
        .close{
            position: absolute;
            right: 0;
            top: 0;
            cursor:pointer;
            font-size: 35px;
        }
        .title{
            text-align: center;
            padding-bottom: 15px;
            padding-top: 18px;
            font-size: 18px;
        }
        .mini{
            padding:0 10px 0 10px;
            max-height: 400px;
            overflow-y: auto;
            .list-box{
                padding: 20px 0;
                box-sizing: border-box;
                box-shadow: inset 0 0 10px #f2f2f2;
                background: #fafafa;
                ul{
                    li{
                        display: flex;
                        width: 282px;
                        height: 130px;
                        margin: 0 auto;
                        background: #fff;
                        border-radius: 5px;
                        box-shadow: 0 2px 7px #e0e0e0;
                        overflow: hidden;
                        cursor: pointer;
                        em{
                            color: #e85a53;
                            font-size: 22px;
                            font-weight: bold;
                            text-align: right;
                            padding-right: 10px;
                            width: 24px;
                            margin-top: 15px;
                        }
                        .roll-info{
                            padding:10px 0;
                            .roll-price {
                                color: #e85a53;
                                margin-bottom: 9px;
                                &::after{
                                    content: '';
                                    display: block;
                                    float: none;
                                    clear: both;
                                }
                                span{
                                    color: #e85a53;
                                    font-size: 40px;
                                    float: left;
                                    font-family: Impact;
                                    line-height: 1;
                                }
                                p{
                                    float: left;
                                    strong{
                                        color: #e85a53;
                                        line-height: 21px;
                                        height: 21px;
                                        display: block;
                                        margin-left: 10px;
                                    }
                                }
                            }
                            .roll-word{
                                font-size: 14px;
                                padding-right: 26px;
                                line-height: 16px;
                                height: 32px;
                                overflow: hidden;
                            }
                            .roll-time{
                                margin-top: 4px;
                                color: #888;
                            }
                        }
                        .roll-btn{
                            float: right;
                            width: 44px;
                            height: 100%;
                            font-size: 14px;
                            color: #fff;
                            text-align: center;
                            padding-top: 25px;
                            background: url(https://res8.vmallres.com/20191126/images/echannel/btn/btn-roll-receive.png?20170620) no-repeat 0 0;
                        }
                    }
                }
            }
        }
        .product-layer-tips{
            text-align: center;
            height: 40px;
            padding: 10px;
            font-size: 12px;
            color: #777;
            .information{
                font-size: 25px;
                margin-top: -5px;
                position: relative;
                top: 2px;
                margin-right: 5px;
                color: #e85a53;
                transform: rotateZ(180deg);
            }
            span{
                color: #777;
            }
            a{
                color:#333333;
                margin-left: 5px;
            }
        }
    }
}
</style>


