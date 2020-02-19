<template>
    <div id="customer-service-location" class="pro-nts-list customer-service-location">
        <h2 class="title">
            售后服务
        </h2>
        <div class="mini">
            <ul>
                <li>本产品全国联保，享受三包服务，质保期为：一年质保</li>
                <li>如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受7天内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！</li>
                <li>售后服务电话：950800</li>
                <li>华为消费者BG官网： https://consumer.huawei.com/cn/</li>
            </ul>
        </div>
    </div>
</template>
<style scoped lang="less">
    .pro-nts-list{
        .mini{
            padding: 38px 30px 40px 130px;
            ul{
                &:after{
                    content: '';
                    display: block;
                    float: none;
                    clear: both;
                }
                li{
                    font-size: 14px;
                    position: relative;
                    vertical-align: top;
                    color: #3a3a3a;
                    margin-right: 20px;
                    margin-bottom: 16px;
                    padding-left: 16px;
                    &:before{
                        content: "";
                        width: 6px;
                        height: 6px;
                        display: block;
                        border-radius: 3px;
                        background: #d8d8d8;
                        position: absolute;
                        top: 7px;
                        left: 0;
                    }
                }
            }
        }
    }
</style>
<script>
    export default {
        name: "ProCusSerLoc"
    }
</script>

<style scoped>

</style>