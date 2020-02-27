<template>
    <div class="product-wrap">
        <div class="breadcrumb-wrap">
            <Breadcrumb separator=">" class="breadcrumb-mini">
                <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                <BreadcrumbItem to="/list">笔记本 & 平板</BreadcrumbItem>
                <BreadcrumbItem to="/list"> 笔记本电脑</BreadcrumbItem>
                <BreadcrumbItem > 
                    HUAWEI MateBook D 14 独显 i7-10510U 16GB 512GB（皓月银）Windows版华为笔记本 高清全面屏 对称双通道16G大内存 多屏协同 便携超级快充
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="product-mini">
            <div class="left-box">
                <div class="pic-box"  >
                    <PicZoom
                    :scroll="true"
                    :scale="3"
                    :url="zoomImg"
                    :big-url="zoomBing"
                    >
                    </PicZoom>
                </div>
                <div class="tum-swiper">
                    <swiper class="swiper-mini"  :options="swiperOption">
                        <swiper-slide  v-for="index in 23" :key="index" :class="['swiper-slide',index==tumSwiperActive?'active':'']" >
                            <img :title="index" @click="tumSwiperActive=index" src="https://res.vmallres.com/pimages//product/6901443358489/78_78_81ADC4941CB944156FE13922B7381108E7958F06A63A0A05mp.png" alt="荣耀笔记本 MagicBook 15 预装第三方Linux版操作系统 15.6英寸笔记本电脑 Ryzen 5 3500U 8GB 512GB(冰河银)">
                        </swiper-slide>
                    </swiper>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </div>
                
            </div>
            <div class="right-box">
                <h1 class="sku-prom-title">
                    荣耀笔记本 MagicBook 15 预装第三方Linux版操作系统 15.6英寸笔记本电脑 Ryzen 5 3500U 8GB 512GB(冰河银)
                </h1>
                <div class="sku-prom-word">
                    轻薄设计，大屏幕小机身，强劲性能快享体验，Magic-link多屏协同无缝互传，一键指纹解锁登录！
                </div>
                <div class="product-info">
                    <div class="product-info-list clearfix">
                        <label style="letter-spacing: 23px;">价格</label>
                        <span  class="pro-price"><em>¥</em>5099.00</span>
                    </div>
                    <div class="product-info-list clearfix">
                        <label style="letter-spacing: 5px;">优惠卷</label>
                        <div class="r-con">
                            <div  class="product-ticket ">
                                <span class="be-bc" ></span>
                                领券直减600
                                <span class="af-bc"></span>
                            </div>
                            <div  class="product-ticket">
                                <span class="be-bc" ></span>
                                领券直减300
                                <span class="af-bc"></span>
                            </div>
                            <span class="check-in" @click="checkCoupon(123456789)">立即领取 ></span>
                        </div>
                    </div>
                    <TicketReceive  :visible.sync='TicketReceive' ></TicketReceive>
                    <div class="product-info-list clearfix">
                        <label style="letter-spacing: 23px;">促销</label>
                        <div class="pro-cx-con r-con">
                            <div class="item">
                                <span  class="tag">
                                分期免息
                                </span>
                                <div class="product-prom-con" title="花呗、掌上生活、工行、银联分期支付可享免息（免息活动适用于单款免息商品订单，含多款商品订单仅在免息活动一致时可享用）"> 
                                    <span class="product-prom-word">
                                    花呗、掌上生活、工行、银联分期支付可享免息（免息活动适用于单款免息商品订单，含多款商品订单仅在免息活动一致时可享用） </span>
                                </div>
                            </div>
                            <div class="item">
                                <span  class="tag">
                                赠送积分
                                </span>
                                <div class="product-prom-con" title="购买即赠商城积分，积分可抵现~"> 
                                    <span class="product-prom-word">
                                    购买即赠商城积分，积分可抵现~</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-nst-list service-description clearfix">
                    <label >服务说明</label>
                    <div class="pro-sm-con r-con">
                        <p>
                            <span>
                                <Icon type="ios-checkmark-circle" />
                                    已满48元已免运费
                                </span>
                            <span>
                                <Icon type="ios-checkmark-circle" />
                                由华为商城负责发货，并提供售后服务
                            </span>
                        </p>
                    </div>
                </div>
                <div class="product-nst-list product-code clearfix">
                    <label >商品编码</label>
                    <div class="pro-sm-con r-con">
                        <p>2601010161223</p>
                    </div>
                </div>
                <hr class="pro-info-hr"/>
                <ProCheckSuk></ProCheckSuk>
                <!--<div class="pro-service">-->
                    <!--<div class="product-nst-list product-code clearfix" >-->
                        <!--<label >保障服务</label>-->
                        <!--<div class="pro-sm-con r-con">-->
                            <!--<div class="service-list">-->
                                <!--<div class="name">-->
                                    <!--华为无忧服务-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="product-nst-list product-code clearfix">
                    <label >已选择商品:</label>
                    <div class="pro-sm-con r-con">
                       <div class="check-suk">
                           <span>青山黛</span>
                           <span>5G全网通</span>
                           <span>8GB+512GB</span>
                           <span>官方标配</span>
                       </div>
                    </div>
                </div>
                <div class="add-card-box">
                    <InputNumber class="pro-number" :max="10" size="large" :min="1" v-model="productAddNumber"></InputNumber>
                    <i-button class="add-card" size="large" type="warning">
                        <span class="text">加入购物车</span>
                    </i-button>
                    <i-button class="bay-now" size="large" type="error">
                        <span class="text">立即下单</span>
                    </i-button>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <ProDetParPacAftSalEva></ProDetParPacAftSalEva>
    </div>
</template>

<style scoped lang="less">
    .line{
        width: 100%;
        height: 1px;
        background: #ddd;
    }
    .product-wrap{
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

        .product-mini{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            margin-bottom: 30px;
            .left-box{
                width: 450px;
                .pic-box{
                    width: 450px;
                    height: 450px;
                }
                .tum-swiper{
                    box-sizing: border-box;
                    margin: 0 20px;
                    position: relative;
                    .swiper-mini{
                        .swiper-slide{
                            width: 68px;
                            height: 68px;
                            border: 1px solid #ffffff;
                            img{
                                width: 68px;
                                height: 68px;
                                cursor: pointer;
                            }
                        }
                        .active{
                            border: 1px solid #ca141d;
                        }
                    }
                    .swiper-button-prev{
                        outline: none;
                        z-index: 1;
                        left: -20px;
                        top: 40px;
                        width: 28px;
                        height: 28px;
                    }
                    .swiper-button-next{
                        outline: none;
                        z-index: 1;
                        right: -20px;
                        top: 40px;
                        width: 28px;
                        height: 28px;
                    }
                }
            }
            .right-box{
                width: 700px;
                margin-left: 25px;
                .sku-prom-title{
                    margin-bottom: 12px;
                    font-size: 21px;
                }
                .sku-prom-word{
                    margin-bottom: 12px;
                }
                .product-info{
                    background: #f5f5f5;
                    padding-top: 14px;
                    padding-bottom: 3px;
                    .product-info-list{
                        margin-bottom: 5px;
                        display: flex;
                        label{
                            width: 85px;
                            font-size: 12px;
                            float: left;
                            width: 85px;
                            text-indent: 10px;
                            line-height: 30px;
                        }
                        .r-con{
                            flex: 1;
                        }
                        .pro-price{
                            font-size: 24px;
                            color: #ca141d;
                            padding-right: 3px;
                            em{
                                color: #ca141d;
                            }
                        }
                        .product-ticket{
                            font-size: 12px;
                            float: left;
                            position: relative;
                            background: #ef5a62;
                            color: #fff;
                            line-height: 20px;
                            padding: 0 2px;
                            margin-right: 15px;
                            margin-left: 5px;
                            margin-top: 5px;
                            cursor: pointer;
                            .be-bc{
                                position:absolute;
                                left: -5px;
                                top: 0;
                                height: 20px;
                                width: 5px;
                                background: url(https://res8.vmallres.com/20191126/images/echannel/icon/icon50.png) no-repeat -27px 0;
                            }
                            .af-bc{
                                position:absolute;
                                width: 5px;
                                right: -5px;
                                top: 0;
                                height: 20px;
                                background: url(https://res8.vmallres.com/20191126/images/echannel/icon/icon50.png) no-repeat -32px 0;
                            }
                        }
                        .check-in{
                            display: inline-block;
                            line-height: 30px;
                            font-size: 12px;
                            color: #ca141d;
                            cursor: pointer;
                        }
                        .pro-cx-con{
                            .item{
                                display: flex;
                                font-size: 12px;
                                margin-bottom: 10px;
                                .tag{
                                    border: 1px solid #ca141d;
                                    margin-right: 10px;
                                    font-size: 12px;
                                    padding: 0 5px;
                                }
                                .product-prom-con{
                                    flex: 1;
                                    line-height: 1.5;
                                    max-width: 485px;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    display: flex;
                                    span{
                                        margin-top: 2px;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                    }
                                }

                            }
                        }
                    }
                }
                .product-nst-list{
                    margin-bottom: 10px;
                    display: flex;
                    font-size: 12px;
                    label{
                        text-indent: 10px;
                        line-height: 30px;
                        font-size: 12px;
                        width: 85px;
                        text-indent: 10px;
                        line-height: 30px;
                    }
                    .r-con{
                        flex: 1;
                        .check-suk{
                            line-height: 30px;
                            span{
                                color: #ca141d;
                                &:after{
                                    content: '/';
                                    margin: 0 5px;
                                }
                                &:last-child{
                                    &:after{
                                       display: none;
                                    }
                                }
                            }
                        }
                    }
                    .pro-sm-con{
                        p{
                            line-height: 30px;

                        }
                    }

                }
                .service-description{
                    margin-top: 15px;
                }

                .pro-info-hr{
                    color: #3a3a3a;
                    border: none;
                    height: 1px;
                    background-color: #e5e5e5;
                }
            }

            .pro-service{
                .product-nst-list{
                    label{
                        line-height: 38px;
                    }
                }
                .service-list{
                    display: flex;
                    line-height: 38px;
                    border: 1px solid #a4a4a4;
                    box-sizing: border-box;
                    float: left;
                    padding: 0px 10px;
                    margin-right: 10px;
                    margin-bottom: 10px;
                    min-width: 60px;
                    .name{
                        height: 30px;
                        line-height: 30px;
                        margin: auto;
                    }
                }
            }

            .add-card-box{
                .pro-number{
                    margin-right: 15px;
                }
                .add-card{
                    margin-right: 15px;
                    width: 175px;
                    font-size: 18px;
                    color: #ffffff;
                    .text{
                        color: #ffffff;
                    }
                }
                .bay-now{
                    margin-right: 15px;
                    width: 175px;
                   font-size: 18px;
                    color: #ffffff;
                    background: #ca151d;
                    background-color: #ca151d;
                    &:hover{
                        background: #ff363f;
                        background-color: #ff363f;
                    }
                    .text{
                        color: #ffffff;
                    }
                }
            }

        }
    }
        
</style>
<script>
import PicZoom from 'vue-piczoom';
import TicketReceive from '../../components/common/TicketReceive.vue';
import ProDetParPacAftSalEva from "../../components/product/ProDetParPacAftSalEva";
import ProCheckSuk from "../../components/product/ProCheckSuk";
export default {
    components: {
        ProCheckSuk,
        ProDetParPacAftSalEva,
        PicZoom,
        TicketReceive
    },
    data() {
        return {

            TicketReceive:false,

            tumSwiperActive:0,
            zoomImg:'https://res.vmallres.com/pimages//product/6901443366903/428_428_83A07B6E37767C5041DD8004F88E717EEE7E5B643D74DD1Cmp.png',
            zoomBing:'https://res.vmallres.com/pimages//product/6901443366903/800_800_83A07B6E37767C5041DD8004F88E717EEE7E5B643D74DD1Cmp.png',
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 15,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },

            productAddNumber:1,


        }
    },
    methods:{
        checkCoupon(couponId){
            // 优惠卷
            this.TicketReceive = true;
            window.console.log(this.TicketReceive,couponId)
        },
    }
    
}
</script>