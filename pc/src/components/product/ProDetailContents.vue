<template>
    <div :class="showAllContentClass">
        <div id="pro-detail-contents-id" class="product-detail">
            <p>
                <img src="https://res.vmallres.com/pimages/detailImg/2019/12/04/E6B83EBA31A978DF2F1C3B819103CBAD2D8E42B378DD4F8E.jpg">
            </p>
            <p>
                <img src="https://res.vmallres.com/pimages/detailImg/2020/01/15/24731F82F5B16A641C0368E3C08824DFF305EEEE71B4877B.jpg" style="">
            </p>
            <p><img src="https://res.vmallres.com/pimages/detailImg/2020/01/15/151779C5CEABC68E0F1F5B5DE6727C4D74A86EE560EBDFF7.jpg" style=""></p>
        </div>
        <div class="content-long-show" v-if="showAllContentClass.length>1">
            <Button class="btn" @click="showAllContentClick">查看全部详情</Button>
        </div>
        <div class="content-long-hide" v-else>
            <div class="mini" @click="hideAllContentClick">
                <Icon type="ios-arrow-up" />
                收起产品详情
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProDetailContents",
        data(){
            return{
                showAllContentClass:['pro-tab-feature-content', 'content-hide'],
            }
        },
        methods:{
            showAllContentClick(){
                //显示所有详情
                this.showAllContentClass = ['pro-tab-feature-content'];
            },
            hideAllContentClick(){
                //收起详情
                this.showAllContentClass = ['pro-tab-feature-content', 'content-hide'];
            }
        }
    }
</script>

<style scoped lang="less">
    .content-hide{
        overflow: hidden;
        max-height: 1200px;
    }
    .pro-tab-feature-content{
        position: relative;
        .product-detail{
            position: relative;
            text-align: center;
            overflow: hidden;
            min-width: 1200px;
            img{
                vertical-align: top;
                width: 100%;
                min-width: 1000px;
            }
        }
        .content-long-show{
            position: absolute;
            height: 300px;
            width: 100%;
            background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.82), rgb(255, 255, 255));
            bottom: 0;
            left: 0;
            text-align: center;
            .btn{
                position: absolute;
                width: 162px;
                height: 40px;
                bottom: 0px;
                left: 50%;
                transform: translate(-50%,0);
            }
        }
        .content-long-hide{
            width: 1200px;
            text-align: center;
            margin: 0 auto;
            color: #a4a4a4;
            .mini{
                padding: 30px 0;
                cursor: pointer;
                color: #a4a4a4;
                i{
                    display: block;
                    color: #a4a4a4;
                }
                font-size: 22px;
                width: 200px;
                margin: 0 auto;
                line-height: 22px;
            }
        }
    }
</style>