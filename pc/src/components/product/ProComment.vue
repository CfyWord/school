<template>
    <div class="product-comment-wrap">
        <div class="pro-score clearfix">
            <div id="pro-tab-evaluate-content"  class="clearfix">
                <div class="product-score-average clearfix">
                    <p id="pro-evaluate-avg-sorce">{{averageScore}}<em>%</em></p>
                    <label>好评度</label>
                </div>
            </div>
        </div>
        <div class="product-comment-tab clearfix">
            <ul class="clearfix">
                <li :class="[messageType==1?'active':'']" @click="setMessageType(1)">
                    <a  href="javascript:;" >最热门
                        <span>(4700+)</span>
                    </a>
                </li>
                <li :class="[messageType==2?'active':'']" @click="setMessageType(2)">
                    <a  href="javascript:;" >有图
                        <span>(1万+)</span>
                    </a>
                </li>
                <li :class="[messageType==0?'active':'']" @click="setMessageType(0)">
                    <a href="javascript:;" >全部</a>
                </li>
            </ul>
            <div class="fr product-comment-sku">
                <Checkbox label="twitter">
                    <span>只看当前商品评价</span>
                </Checkbox>
            </div>
        </div>
        <div id="product-comment-id" class="product-comment">
            <ul>
                <li v-for="(item,index) in messageList" :key="index">
                    <div class="product-comment-user">
                        <p class="product-comment-user-img">
                            <img :src="item.avatar" alt="">
                            <i :class="['icon-vip-level', 'icon-vip-level-'+item.vip_level]" :style="{'background-image':'url('+gradeIcon+')' }"></i>
                        </p>
                        <p class="product-comment-user-name">{{item.username}}</p>
                    </div>
                    <div class="product-user-comment">
                        <div class="product-user-comment-detial">
                            <div class="star-mini">
                                <div class="product-star">
                                    <span class="starRating-area" :style="{'background-image': 'url('+starIcon+')'}">
                                        <i :class="['star-score', 'star-'+item.star]" :style="{'background-image': 'url('+starIcon+')'}"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="product-user-comment-word" >
                               {{item.message}}
                            </div>
                            <div class="user-comment-img">
                                <div class="mini-pic-list">
                                    <div  v-for="(img,key) in item.img_list" :key="key" :class="['img', item.showPicIndex===key?'active':'']" @click="item.showPicIndex=key">
                                        <img :src="img"/>
                                    </div>
                                </div>
                                <div class="big-pic-list clearfix">
                                    <div  v-for="(img,key) in item.img_list" :key="key" :class="['img', item.showPicIndex===key?'active':'']" @click="item.showPicIndex=''">
                                        <img :src="img"/>
                                    </div>
                                </div>
                            </div>
                            <div class="product-user-comment-sku">翡冷翠,5G全网通,8GB+512GB,官方标配</div>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ProComment",
        data(){
            return{
                averageScore:99,
                messageType:1,
                messageList:[
                    {
                        username:'a***',
                        avatar:'https://res.vmallres.com/nwap/20170828/images/echannelWap/misc/defaultface_user_after.png',
                        star:0,
                        vip_level:0,
                        message:'快递速度很快，购买三天到货，正在拆机装软件',
                        showPicIndex:'',
                        img_list:[
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/45bb1567a45c2a4f63a1b5a1.jpg',
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/468db6c130b43b7de24a16f3.jpg',
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/a4e5e04f10c020e69fa6fe35.jpg']
                    },
                    {
                        username:'a***',
                        avatar:'https://res.vmallres.com/nwap/20170828/images/echannelWap/misc/defaultface_user_after.png',
                        star:1,
                        vip_level:1,
                        message:'快递速度很快，购买三天到货，正在拆机装软件',
                        showPicIndex:'',
                        img_list:[
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/45bb1567a45c2a4f63a1b5a1.jpg',
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/468db6c130b43b7de24a16f3.jpg',
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/a4e5e04f10c020e69fa6fe35.jpg']
                    },
                    {
                        username:'a***',
                        avatar:'https://res.vmallres.com/nwap/20170828/images/echannelWap/misc/defaultface_user_after.png',
                        star:2,
                        vip_level:2,
                        message:'快递速度很快，购买三天到货，正在拆机装软件',
                        showPicIndex:'',
                        img_list:[
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/45bb1567a45c2a4f63a1b5a1.jpg',
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/468db6c130b43b7de24a16f3.jpg',
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/a4e5e04f10c020e69fa6fe35.jpg']
                    },
                    {
                        username:'a***',
                        avatar:'https://res.vmallres.com/nwap/20170828/images/echannelWap/misc/defaultface_user_after.png',
                        star:3,
                        vip_level:3,
                        message:'快递速度很快，购买三天到货，正在拆机装软件',
                        showPicIndex:'',
                        img_list:[
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/45bb1567a45c2a4f63a1b5a1.jpg',
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/468db6c130b43b7de24a16f3.jpg',
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/a4e5e04f10c020e69fa6fe35.jpg']
                    },
                    {
                        username:'a***',
                        avatar:'https://res.vmallres.com/nwap/20170828/images/echannelWap/misc/defaultface_user_after.png',
                        star:4,
                        vip_level:4,
                        message:'快递速度很快，购买三天到货，正在拆机装软件',
                        showPicIndex:'',
                        img_list:[
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/45bb1567a45c2a4f63a1b5a1.jpg',
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/468db6c130b43b7de24a16f3.jpg',
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/a4e5e04f10c020e69fa6fe35.jpg']
                    },
                    {
                        username:'a***',
                        avatar:'https://res.vmallres.com/nwap/20170828/images/echannelWap/misc/defaultface_user_after.png',
                        star:5,
                        vip_level:5,
                        message:'快递速度很快，购买三天到货，正在拆机装软件',
                        showPicIndex:'',
                        img_list:[
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/45bb1567a45c2a4f63a1b5a1.jpg',
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/468db6c130b43b7de24a16f3.jpg',
                            'https://res.vmallres.com/rms/comment/image/U0526/79593b5a0c61684e3b4560a2d9f95525/100/a4e5e04f10c020e69fa6fe35.jpg']
                    }
                ],

                gradeIcon:require('../../assets/grade-icon.png'),
                starIcon:require('../../assets/star.png'),
            }
        },
        created() {
        },
        methods:{
            setMessageType($type){
                if (this.messageType == $type){
                    return false;
                }
                this.messageType = $type;
            },
        }
    }
</script>

<style scoped lang="less">
    .pro-score{
        position: relative;
        #pro-tab-evaluate-content{
            width: 1200px;
            margin: 0 auto;
            border-bottom: 1px dashed #eaeaea;
            .product-score-average{
                float: left;
                width: 89px;
                margin-left: 16px;
                margin-bottom: 12px;
                margin-top: 12px;
                #pro-evaluate-avg-sorce{
                    color: #ca141d;
                    font-size: 56px;
                    height: 50px;
                    line-height: 50px;
                    width: 89px;
                    text-align: center;
                    margin-bottom: 12px;
                    em{
                        font-size: 16px;
                        color: #ca141d;
                    }
                }
                label{
                    display: block;
                    text-align: center;
                    padding-right: 17px;
                    line-height: 14px;
                }
            }
        }

    }
    .product-comment-tab{
        width: 1200px;
        margin: 0 auto;
        height: 50px;
        border-bottom: 1px solid #eaeaea;
        box-sizing: border-box;
        padding: 6px 0 7px 16px;
        ul{
            float: left;
            box-sizing: border-box;
            li{
                float: left;
                line-height: 36px;
                margin-right: 40px;
                a{
                    color: #333;
                    font-size: 14px;
                    cursor: pointer;
                }
            }
            .active{
                a{
                    color: #ca141d;
                    cursor: default;
                    span{
                        color: #ca141d;
                    }
                }
            }
        }
        .product-comment-sku{
            float: right;
            line-height: 36px;
            span{
                font-size: 14px;
                color: #666;
            }
        }
    }
    .product-comment{
        width: 1200px;
        margin: 0 auto;
        ul{
            li{
                padding: 20px 0;
                display: flex;
                .product-comment-user{
                    text-align: center;
                    padding-left: 16px;
                    .product-comment-user-img{
                        width: 70px;
                        height: 70px;
                        position: relative;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        .icon-vip-level{
                            display: block;
                            position: absolute;
                            bottom: 0;
                            width: 23px;
                            height: 23px;
                        }
                        .icon-vip-level-0{
                            background-position-y: 0px;
                        }
                        .icon-vip-level-1{
                            background-position-y: -25px;
                        }
                        .icon-vip-level-2{
                            background-position-y: -52px;
                        }
                        .icon-vip-level-3{
                            background-position-y: -77px;
                        }
                        .icon-vip-level-4{
                            background-position-y: -104px;
                        }
                        .icon-vip-level-5{
                            background-position-y: -130px;
                        }
                    }
                    .product-comment-user-name{
                        margin-top: 6px;
                        text-align: center;
                        word-wrap: break-word;
                        word-break: break-all;
                    }
                }
                .product-user-comment{
                    flex: 1;
                    padding-left: 60px;
                    margin-top: 16px;
                    .product-user-comment-detial{
                        .star-mini{
                            .product-star{
                                .starRating-area{
                                    display: inline-block;
                                    width: 110px;
                                    height: 30px;
                                    line-height: 1px;
                                    overflow: hidden;
                                    position: relative;
                                    .star-score{
                                        position: absolute;
                                        height: 30px;
                                        left: 0;
                                        top: 0;
                                        background-position-x: 110px;
                                    }
                                    .star-0{
                                        width: 0;
                                    }
                                    .star-1{
                                        width: 22px;
                                    }
                                    .star-2{
                                        width: 44px;
                                    }
                                    .star-3{
                                        width: 66px;
                                    }
                                    .star-4{
                                        width: 88px;
                                    }
                                    .star-5{
                                        width: 110px;
                                    }
                                }
                            }
                        }
                        .product-user-comment-word{
                            font-size: 12px;
                            margin-bottom: 10px;
                        }
                        .user-comment-img{
                            .mini-pic-list{
                                .img{
                                    cursor: zoom-in;
                                    display: inline-block;
                                    margin: 5px;
                                    width: 80px;
                                    height: 80px;
                                    position: relative;
                                    border: 1px solid #ffffff;
                                    overflow: hidden;
                                    &:first-child{
                                        margin-left: 0px;
                                    }
                                    img{
                                        position: absolute;
                                        width: 80px;
                                        height: auto;
                                        left: 50%;
                                        top: 50%;
                                        transform: translate(-50%,-50%);
                                        box-sizing: border-box;
                                    }
                                }
                                .active{
                                    border: 2px solid #ca141d;
                                }
                            }
                            .big-pic-list{
                                .img{
                                    display: none;
                                    cursor: zoom-out;
                                    float: left;
                                }
                                .active{
                                    display: block;
                                }
                            }
                        }
                        .product-user-comment-sku{
                            color: #a4a4a4;
                            margin-top: 21px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            max-height: 36px;
                        }
                    }
                }
            }
        }
    }
</style>