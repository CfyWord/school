<template>
    <div id="product-parameter-id" :class="['pro-nts-list', 'product-parameter', showAllContent?'':'height-hide-1200']">
        <h2 class="title">
            规格参数
        </h2>
        <div class="main-parameter-content" v-for="(list,index) in parameter" :key="index">
            <h2 class="left-title">
                {{list.group_name}}
            </h2>
            <div class="right-content">
                <ul>
                    <li v-for="(item,key) in list.data" :key="key">
                        <label>{{item.title}}</label>
                        <div class="content">
                           {{item.content}}
                        </div>
                        <div class="remark" >
                            <span v-if="item.remark">备注：{{item.remark}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content-long-show" v-if="!showAllContent">
            <Button class="btn" @click="showAllContent=true">查看全部参数</Button>
        </div>
        <div class="content-long-hide" v-else>
            <div class="mini" @click="showAllContent=false">
                <Icon type="ios-arrow-up" />
                收起参数详情
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProParameter",
        data(){
            return{
                showAllContent:false,
                parameter:[
                    {
                        group_name:'主要参数',
                        data:[
                            {
                                title:'传播名',
                                content:'HUAWEI Mate 30 Pro 5G',
                                remark:'',
                            },
                            {
                                title:'后置摄像头',
                                content:'后置超感光徕卡电影四摄：4000万像素电影摄像头（超广角，f/1.8光圈）+4000万像素超感光摄像头(广角，f/1.6光圈，支持OIS)+800万像素长焦摄像头（f/2.4光圈，支持OIS）+3D深感摄像头，支持自动对焦',
                                remark:'不同拍照模式的照片像素可能有差异，请以实际为准。',
                            },
                            {
                                title:'电池容量',
                                content:'4500mAh（典型值）',
                                remark:'电池额定容量为4400mAh',
                            },
                            {
                                title:'前置摄像头',
                                content:'3200万像素（f/2.0光圈，支持固定焦距）+3D深感摄像头，',
                                remark:'不同拍照模式的照片像素可能有差异，请以实际为准。',
                            },
                            {
                                title:'上市时间',
                                content:'2019年11月',
                                remark:'',
                            },
                            {
                                title:'屏幕尺寸',
                                content:'6.53英寸。',
                                remark:'显示屏采用圆角设计，按照标准矩形测量时，屏幕的对角线长度是6.53英寸（实际可视区域略小）',
                            },
                            {
                                title:'屏幕色彩',
                                content:'1670万色，DCI-P3广色域',
                                remark:'',
                            },
                        ]
                    },
                    {
                        group_name:'主体',
                        data:[
                            {
                                title:'品牌',
                                content:'华为 HUAWEI',
                                remark:'',
                            },
                            {
                                title:'型号',
                                content:'LIO-AN00',
                                remark:'',
                            },
                            {
                                title:'传播名',
                                content:'HUAWEI Mate 30 Pro 5G',
                                remark:'',
                            },
                            {
                                title:'上市时间',
                                content:'2019年11月',
                                remark:'',
                            },
                            {
                                title:'外观设计',
                                content:'直板',
                                remark:'',
                            },
                        ],
                    },
                    {
                        group_name:'网络',
                        data:[
                            {
                                title:'网络制式',
                                content:'支持联通/电信5G/4G+/4G/3G/2G，移动 5G/4G+/4G/2G；',
                                remark:'*卡槽1, 2可以任意切换为默认移动数据卡。 *如果两张都是电信卡，副卡（非默认移动数据卡）必须开通电信VoLTE业务，才能同时使用电信双卡。 *5G/4G网络使用，需要根据运营商网络和相关业务部署情况确定是否支持。',
                            },
                            {
                                title:'5G网络制式',
                                content:'移动5G（NR）/联通5G（NR）/电信5G（NR)',
                                remark:'',
                            },
                            {
                                title:'4G网络制式',
                                content:'主卡：移动4G（TD-LTE）/联通4G（TD-LTE/LTE FDD）/电信 4G（TD-LTE/LTE FDD）；副卡：移动4G（TD-LTE）/联通4G（TD-LTE/LTE FDD）/电信 4G（TD-LTE/LTE FDD）',
                                remark:'',
                            },
                            {
                                title:'3G网络制式',
                                content:'主卡：联通3G（WCDMA）/电信3G（CDMA 2000）；副卡：联通3G（WCDMA）',
                                remark:'',
                            },
                            {
                                title:'2G网络制式',
                                content:'直板',
                                remark:'主卡：移动2G（GSM）/联通2G（GSM）/电信2G（CDMA 1X）；副卡：移动2G（GSM）/联通2G（GSM）/电信2G（CDMA 1X）；',
                            },
                        ],
                    }
                ],
            }
        }
    }
</script>

<style scoped lang="less">
    .height-hide-1200{
        height: 1200px;
        overflow: hidden;
    }
    .product-parameter{
        position: relative;
        .main-parameter-content{
            display: flex;
            padding-top: 24px;
            border-top: 1px solid #d8d8d8;
            &:nth-child(2){
                border-top: none;
            }
            .left-title{
                display: block;
                font-size: 22px;
                color: #333;
                font-weight: 600;
                width: 100px;
                position: relative;
                top: -1px;
                margin-right: 140px;
            }
            .right-content{
                flex: 1;
                ul{
                    font-size: 16px;
                    line-height: 24px;
                    li{
                        display: flex;
                        margin-bottom: 24px;
                        label{
                            display: block;
                            width: 128px;
                            margin-right: 54px;
                        }
                        .content{
                            flex: 1;
                            margin-right: 96px;
                        }
                        .remark{
                            width: 438px;
                            color: #999;
                            font-size: 14px;
                            word-wrap: break-word;
                            word-break: break-all;
                        }
                    }
                }
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