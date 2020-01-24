
<template>
    <div class="banner-swiper">
        <swiper :options="swiperOption" class="swiper swiper-no-swiping">
            <slot slot="parallax-bg" name="isBanner">

            </slot>
            <swiper-slide v-for="(item,index) in dataList" :key="index" class="swiper-slide" >
                <router-link :to="item.path+'?abc=1'">
                    <div :style="{
                    background: 'url('+item.url+') 50% 0px no-repeat',
                    width: '100%',
                    height: '550px',
                    position: 'absolute',
                    opacity: 1}">

                    </div>
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>
    export default {
        name: "BannerSwiper",
        props:{
            dataList:{
                type:Array
            }
        },
        mounted(){

        },
        data(){
            return{
                swiperOption: {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                },
            }
        }
    }
</script>
<style lang="less">
    .banner-swiper {
        .swiper-pagination {
            width: 1200px;
            margin: 0 auto;
            bottom: 60px!important;
            text-align: right;
            left: 0;
            transform: translate(-50%,0);
            margin-left: 600px;
            .swiper-pagination-bullet {
                width: 12px;
                height: 12px;
                background: none;
                border: 1px solid #fff;
                outline: none;
            }
            .swiper-pagination-bullet-active{
                background: #fff;
            }
        }
    }
</style>
<style scoped lang="less">
    .banner-swiper {
        height: 550px;
        width: auto;
        margin:  0 auto;
        .swiper{
            height: 100%;
            width: auto;
            margin: 0 auto;
            .swiper-slide{

            }

        }

    }
</style>