<template>
    <div class="pro-det-par-pac-aft-sal-eva">
        <Affix :offset-top="0"  @on-change="layoutProNavChange" class="pro-affix" style="width: 100%;">
            <div :class="layoutProNavClass">
                <div class="mini">
                    <div class="nav-list">
                        <a :class="[navActive==0?'active':'']" @click="goCententActive(0)">
                            商品详情
                            <em></em>
                        </a>
                        <a :class="[navActive==1?'active':'']" @click="goCententActive(1)">
                            规格参数
                            <em></em>
                        </a>
                        <a :class="[navActive==2?'active':'']" @click="goCententActive(2)">
                            包装与售后
                            <em></em>
                        </a>
                        <a :class="[navActive==3?'active':'']" @click="goCententActive(3)">
                            用户评价(5万+)
                            <em></em>
                        </a>
                    </div>
                    <div class="add-card-msg-have">
                        <i-button class="bay-now" size="small" type="error">
                            <span class="text">立即下单</span>
                        </i-button>
                        <i-button class="bay-now" v-show="1<0" size="small" type="error">
                            <span class="text">到货通知</span>
                        </i-button>
                    </div>
                </div>
            </div>

        </Affix>
        <!--产品详情-->
        <ProDetailContents ref="ProDetailContents"></ProDetailContents>
        <div  class="hr-60"></div>
        <!--产品规格-->
        <ProParameter ref="productParameterId"></ProParameter>
        <div  class="hr-60"></div>
        <!--产品包装-->
        <ProPackagId ref="proPackagId"></ProPackagId>
        <!--产品售后-->
        <ProCusSerLoc></ProCusSerLoc>
        <!--免责声明-->
        <ProductDetailstips></ProductDetailstips>
        <div class="hr-60"></div>
        <!--用户评价-->
        <ProComment ref="productCommentId"></ProComment>
    </div>
</template>
<style lang="less">

    .hr-60{
        height: 60px;
    }
    .pro-number{
        width: 65px!important;
        margin-left: 6px!important;
        .ivu-input-number-handler-wrap{
            opacity: 1!important;
        }
    }
    .pro-affix{
        width: 100%;
        .ivu-affix{
            width: 100%!important;
        }
    }
    .layout-pro-nav{
        background: rgb(255, 255, 255);

        .mini{
            position: relative;
            width: 1200px;
            margin: 0 auto;

            .nav-list{
                padding: 11px 0 12px 0;
                text-align: center;
                font-size: 0;
                a{
                    margin: 0 25px;
                    font-size: 18px;
                    padding: 0 10px 6px 10px;
                    color: #a4a4a4;
                    text-align: center;
                    position: relative;
                    cursor: pointer;
                    em{
                        width: 100%;
                        height: 2px;
                        display: block;
                        background: #ffffff;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                    }
                }
                .active{
                    color: #ca141d;
                    cursor: default;
                    position: relative;
                    em{
                        background: #ca141d;
                    }
                }
            }
            .add-card-msg-have{
                position: absolute;
                top: 9px;
                right: 10px;
                .bay-now{
                    margin-right: 15px;
                    width: 120px;
                    font-size: 14px;
                    height: 32px;
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
    .nav-box-shadow{
        box-shadow: 0 1px 2px #ddd;
    }

    .pro-nts-list{
        width: 1200px;
        margin: 0 auto;
        .title{
            margin-bottom: 8px;
            font-size: 18px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 14px;
            position: relative;
            padding-left: 14px;
            &:before{
                content: "";
                width: 4px;
                height: 23px;
                display: block;
                position: absolute;
                left: 0;
                top: 1px;
                background: #ca141d;
            }
        }
    }

</style>
<script>
    import ProParameter from "./ProParameter";
    import ProPackagId from "./ProPackagId";
    import ProCusSerLoc from "./ProCusSerLoc";
    import ProDetailContents from "./ProDetailContents";
    import ProComment from "./ProComment";
    import ProductDetailstips from "./ProductDetailstips";
    export default {
        name: "ProDetParPacAftSalEva",
        components: {ProductDetailstips, ProComment, ProDetailContents, ProCusSerLoc, ProPackagId, ProParameter},
        data(){
            return{
                navActive:0,
                navIds:[
                    "pro-detail-contents-id",
                    "product-parameter-id",
                    "pro-packag-id",
                    "product-comment-id"
                ],
                showAllContentClass:['pro-tab-feature-content', 'content-hide'],
                layoutProNavClass:['layout-pro-nav'],
            }
        },
        created() {
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
        },
        methods:{
            handleScroll(){
                // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // //let offsetTop = this.$refs.ProDetailContents.$el.offsetTop;
                // let offsetTop2 = this.$refs.productParameterId.$el.offsetTop;
                // let offsetTop3 = this.$refs.proPackagId.$el.offsetTop;
                // let offsetTop4 = this.$refs.productCommentId.$el.offsetTop;
                // if (scrollTop>offsetTop4+1020){
                //     this.navActive = 3;
                // }else if(scrollTop>offsetTop3+1020){
                //     this.navActive = 2;
                // }else if(scrollTop>offsetTop2+1020){
                //     this.navActive = 1;
                // }else{
                //     this.navActive = 0;
                // }
                // window.console.log(this.$refs.ProDetailContents)
            },
            goCententActive(index){
                //跳转到指定模块
                if (this.navActive==index){
                    return false;
                }
                this.navActive = index;
                document.getElementById(this.navIds[index]).scrollIntoView();
            },
            layoutProNavChange(staus){
                //监听滚动条nav漂浮
                if(staus){
                    this.layoutProNavClass = ['layout-pro-nav','nav-box-shadow'];
                }else{
                    this.layoutProNavClass = ['layout-pro-nav'];
                }
            },

        }
    }
</script>
