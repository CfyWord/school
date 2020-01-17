<template>
    <div class="banner-width-ad">
        <swiper class="swiper" :options="swiperOption" v-if="dataList.length>1">
            <swiper-slide class="slide" v-for="(item,index) in dataList" :key="index">
                <router-link :to="item.path">
                    <img :src="item.img"/>
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" :style="{display:dataList.length>1?'block':'none'}" slot="pagination"></div>
        </swiper>
        <div class="one-img" v-for="(item,index) in dataList" :key="index" v-else>
            <router-link :to="item.path">
                <img :src="item.img"/>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerWithAd",
        props:{
            dataList:{
                type:Array
            }
        },
        data(){
            return{
                swiperOption: {
                    effect: 'fade',
                    loop: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                },
            }
        }
    }
</script>
<style lang="less">
    .banner-width-ad{
        .swiper-pagination{
            text-align: right;
            box-sizing: border-box;
            padding-right: 130px;
            .swiper-pagination-bullet{
                width: 12px;
                height: 12px;
                border: 1px solid #fff;
                background: 0;
            }
            .swiper-pagination-bullet-active{
                background: #fff;
            }
        }
    }

</style>
<style scoped lang="less">
    .banner-width-ad{
        height: 120px;
        overflow: hidden;
        border-radius: 10px;
        .swiper{
            .slide{
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }
        }
        .one-img{
            img{
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
    }

</style>