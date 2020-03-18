<template>
    <div id="pro-check-suk">
        <div class="pro-skus">
            <div class="product-nst-list product-code clearfix" v-for="(item,index) in sukData" :key="index">
                <label >选择{{item.title}}</label>
                <div class="pro-sm-con r-con">
                    <div class="suk-mini"
                         :class="{'active-suk':value.id===changeSukValue[index],'suk-disabled ':!openClickStatus(value.id,index)}" v-for="(value,key) in item.list"
                         :key="key"
                         @click="changeSuk(value.id,index,key)"
                    >
                        <div class="img" v-if="value.img">
                            <img :src="value.img"/>
                        </div>
                        <div class="name">
                            {{value.name}}{{!openClickStatus(value.id,index)}}
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
                openClick:[],
                changeSukValue:[],
                proSuksData:[],
                sukData:[],
            }
        },
        created(){
            this.getProInfo();
        },
        methods:{
            openClickStatus(){

            },
            setOpenCheck(){

            },
            changeSuk(){

            },
            getProInfo(){
                this.axios.get('/product/details?id=1').then(response=>{
                    let $res = response.data;
                    this.proSuksData = $res.pro_suks_data;
                    this.sukData = $res.suk_data;
                });

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
            padding: 0 10px;
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
        .suk-disabled{
            border: 1px solid #e4e4e4;
            cursor: not-allowed;
            .name{
                color: #c4c4c4;
            }
        }
    }
</style>