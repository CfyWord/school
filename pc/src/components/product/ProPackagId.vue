<template>
    <div id="pro-packag-id" class="pro-nts-list packag-id">
        <h2 class="title">
            包装
        </h2>
        <div class="mini">
            <ul>
                <li>手机（含内置电池）X 1</li>
                <li>华为SuperCharge充电器 X 1</li>
                <li>Type-C 数据线 X 1</li>
                <li>Type-C 数字耳机X 1</li>
                <li>透明保护壳 X 1</li>
                <li>快速指南 X 1</li>
                <li>取卡针 X 1</li>
                <li>保修卡 X 1</li>
                <li>（备注：最终以实物为准）</li>
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
                    display: inline-block;
                    vertical-align: top;
                    color: #3a3a3a;
                    margin-right: 20px;
                    margin-bottom: 16px;
                    padding-left: 16px;
                    width: 223px;
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
        name: "ProPackagId",
        data(){
            return{

            }
        }
    }
</script>

