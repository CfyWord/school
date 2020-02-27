<template>
    <div id="pro-check-suk">
        <div class="pro-skus">
            <div class="product-nst-list product-code clearfix" v-for="(item,index) in sukData" :key="index">
                <label >选择{{item.title}}</label>
                <div class="pro-sm-con r-con">
                    <div :class="['suk-mini',key==0?'active-suk':'']" v-for="(value,key) in item.list" :key="key">
                        <div class="img" v-if="value.img">
                            <img :src="value.img"/>
                        </div>
                        <div class="name">
                            {{value.name}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProCheckSuk",
        data(){
            return{
                proSuksData:[
                    {
                        sukIds:[1,5,7,10],
                        title:'HUAWEI Mate 30 Pro 5G 全网通 8GB+128GB 麒麟990 双4000万徕卡电影四摄（亮黑色）',
                        suk_id:'1',
                        inventory:100,
                    },
                    {
                        sukIds:[1,5,7,11],
                        title:'HUAWEI Mate 30 Pro 5G 全网通 8GB+128GB 麒麟990 双4000万徕卡电影四摄（亮黑色）',
                        suk_id:'2',
                        inventory:100,
                    },
                    {
                        sukIds:[1,5,7,12],
                        title:'HUAWEI Mate 30 Pro 5G 全网通 8GB+128GB 麒麟990 双4000万徕卡电影四摄（亮黑色）',
                        suk_id:'3',
                        inventory:100,
                    },
                    {
                        sukIds:[1,5,8,10],
                        title:'HUAWEI Mate 30 Pro 5G 全网通 8GB+128GB 麒麟990 双4000万徕卡电影四摄（亮黑色）',
                        suk_id:'4',
                        inventory:100,
                    },
                    {
                        sukIds:[1,5,8,11],
                        title:'HUAWEI Mate 30 Pro 5G 全网通 8GB+128GB 麒麟990 双4000万徕卡电影四摄（亮黑色）',
                        suk_id:'5',
                        inventory:100,
                    }
                ],
                sukData:[
                    {
                        title:'颜色',
                        list:[
                            {
                                id:1,
                                name:'亮黑色',
                                img:'https://res.vmallres.com/pimages//product/6901443353200/40_40_E73C4A7361AE8B1D4FA95C2205572F40458983840EF80321mp.png',
                            },
                            {
                                id:2,
                                name:'新河银',
                                img:'https://res.vmallres.com/pimages//product/6901443353200/40_40_E73C4A7361AE8B1D4FA95C2205572F40458983840EF80321mp.png',
                            },
                            {
                                id:3,
                                name:'翡翠冷',
                                img:'https://res.vmallres.com/pimages//product/6901443353200/40_40_E73C4A7361AE8B1D4FA95C2205572F40458983840EF80321mp.png',
                            },
                            {
                                id:4,
                                name:'紫罗兰',
                                img:'https://res.vmallres.com/pimages//product/6901443353200/40_40_E73C4A7361AE8B1D4FA95C2205572F40458983840EF80321mp.png',
                            }
                        ],
                    },
                    {
                        title:'版本',
                        list:[
                            {
                                id:5,
                                name:'5G全网通',
                            },
                            {
                                id:6,
                                name:'4G全网通',
                            }
                        ],
                    },
                    {
                        title:'容量',
                        list:[
                            {
                                id:7,
                                name:'8GB+512GB',
                            },
                            {
                                id:8,
                                name:'8GB+256GB',
                            },
                            {
                                id:9,
                                name:'8GB+128GB',
                            }
                        ],
                    },
                    {
                        title:'套餐',
                        list:[
                            {
                                id:10,
                                name:'官方标配',
                            },
                            {
                                id:11,
                                name:'青梅竹马',
                            },
                            {
                                id:12,
                                name:'青梅竹马',
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>

<style scoped lang="less">
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
    .pro-skus{
        margin-top: 20px;
        .product-nst-list{
            label{
                line-height: 38px;
            }
        }
        .suk-mini{
            cursor: pointer;
            display: flex;
            line-height: 38px;
            border: 1px solid #a4a4a4;
            box-sizing: border-box;
            float: left;
            padding: 0px 10px;
            margin-right: 10px;
            margin-bottom: 10px;
            min-width: 60px;
            &:last-child{
                margin-right: 0;
            }
            &:after{
                content: '';
                display: block;
                float: none;
                clear: bottom;
            }
            .img{
                width: 30px;
                height: 30px;
                margin: 5px 10px 5px 0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .name{
                height: 30px;
                line-height: 30px;
                margin: auto;
            }
        }
        .active-suk{
            border: 1px solid #ca141d;
        }
    }
</style>