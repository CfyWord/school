<template>
    <div class="swiper-ad-wrap">
        <swiper :options="option">
            <swiper-slide v-for="(item,index) in dataList" :key="index" class="swiper-slide" >
                <div class="swiper-product">
                    <div class="mini">
                        <div class="tag">
                            <span v-if="item.tag" :style="{background:item.tag.background}">{{item.tag.name}}</span>
                        </div>
                        <div class="pic">
                            <img  style="width: 100%;" :src="item.pic"/>
                        </div>
                        <div class="desc">
                            {{item.desc}}
                        </div>
                    </div>
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="price">
                        {{item.price}}
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev-cs" slot="button-prev">
                <Icon type="ios-arrow-back" />
            </div>
            <div class="swiper-button-next-cs" slot="button-next">
                <Icon type="ios-arrow-forward" />
            </div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "CateSwiperAd",
        props:{
            dataList:{
              type:Array,
              default:null
            },
            slidesPerView:{
                type:Number,
                default:5,

            },
            slidesPerGroup:{
                type:Number,
                default:5,

            },
            loop:{
                type:Boolean,
                default:false

            },
        },
        mounted(){
            this.option.slidesPerView = this.slidesPerView;
            this.option.slidesPerGroup = this.slidesPerGroup;
            this.option.loop = this.loop
        },
        data(){
            return{
                option: {
                    slidesPerView: this.slidesPerView,
                    spaceBetween: 0,
                    slidesPerGroup: this.slidesPerGroup,
                    loop: false,
                    loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: '.swiper-button-next-cs',
                        prevEl: '.swiper-button-prev-cs'
                    }
                },
            }
        }
    }
</script>

<style scoped lang="less">
    .swiper-ad-wrap {
        width: 1210px;
        margin-left: -5px;
        .swiper-button-prev-cs{
            position: absolute;
            top: 80px;
            left: 4px;
            z-index: 2;
            width: 36px;
            height: 72px;
            background: rgba(0,0,0,0.06);
            text-align: center;
            line-height: 72px;
            font-size: 18px;
            border-radius: 0 8px 8px 0;
            &:hover{
                background: rgba(0,0,0,0.18);
                cursor: pointer;
            }
        }
        .swiper-button-disabled{
            display: none;
        }
        .swiper-button-next-cs{
            position: absolute;
            top: 80px;
            right: 8px;
            z-index: 2;
            width: 36px;
            height: 72px;
            background: rgba(0,0,0,0.06);
            text-align: center;
            line-height: 72px;
            font-size: 18px;
            border-radius: 8px 0  0 8px;
            &:hover{
                background: rgba(0,0,0,0.18);
                cursor: pointer;
            }
        }
        .swiper-slide{
            .swiper-product{
                text-align: center;
                .mini{
                    box-sizing: border-box;
                    margin: 5px;
                    overflow: hidden;
                    margin-right: 10px;
                    background: #fff;
                    border-radius: 10px;
                    box-shadow: 0 1px 8px rgba(0,0,0,0.06);
                    &:hover{
                        box-shadow: 0 2px 10px rgba(0,0,0,0.15);
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
                    .desc{
                        font-size: 14px;
                        background: #f3f3f3;
                        color: #777;
                        margin: 0;
                        padding: 10px;
                    }
                }
                .title{
                    height: 21px;
                    line-height: 21px;
                    margin: 7px 5px 0 5px;
                }
                .price{
                    color: #d0021b;
                    line-height: 21px;
                    margin-bottom: 0;
                }
            }
        }
    }
</style>