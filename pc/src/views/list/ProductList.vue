<template>
  <div class="product-list-wrap">
        <div class="breadcrumb-wrap">
            <Breadcrumb separator=">" class="breadcrumb-mini">
                <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                <BreadcrumbItem > 笔记本 & 平板</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="cate-search-wrap">
            <div class="cate-search-item cate-list" v-if="cate_list">
                <div class="title">
                    {{cate_list.name}}：
                </div>
                <div class="list-mini">
                    <div class="item" v-for="item in cate_list.list" :key="item.value">
                        <a :class="{active:proListForm.cate_id===item.value}"  @click="cateClick(item.value)">
                            {{item.name}}
                        </a>
                    </div>
                </div>
            </div>
            <div class="cate-search-item price-list" v-if="price_range.length>0">
                <div class="title">
                    {{price_range.name}}：
                </div>
                <div class="list-mini">
                    <CheckboxGroup v-model="priceCheckbox" @on-change="priceRangeChange" >
                        <Checkbox class="item" v-for="item in price_range.list" :key="item.value" :label="item.value" >{{item.name}}</Checkbox>
                    </CheckboxGroup>
                </div>
            </div>
            <div class="cate-search-item attributes-list" v-for="(list,index) in attributes" :key="index">
                <div class="title">
                    {{list.name}}：
                </div>
                <div class="list-mini">
                    <CheckboxGroup v-model="attributesCheckbox" @on-change="attributesChange" >
                        <Checkbox class="item" v-for="item in list.list" :key="item.value" :label="item.value" >{{item.name}}</Checkbox>
                    </CheckboxGroup>
                </div>
            </div>

            <div class="cate-search-item sort-list">
                <div class="title">
                    排序：
                </div>
                <div class="list-mini">
                    <div class="item">
                        <a :class="{active:proListForm.searchSortField===0}" @click="clickSort(0)">
                            综合
                        </a>
                    </div>
                    <div class="item">
                        <a :class="{active:proListForm.searchSortField===1}" @click="clickSort(1)">
                            最新
                        </a>
                    </div>
                    <div class="item">
                        <a :class="{active:proListForm.searchSortField===2}" @click="clickSort(2)">
                            热度
                        </a>
                    </div>
                    <div class="item">
                        <a :class="{active:proListForm.searchSortField===3}" @click="clickSort(3)">
                            <span>价格</span>
                            <div class="price-sort">
                                <Icon :class="{'icon-1':true,'active-price':proListForm.searchSortType==='asc'}" type="md-arrow-dropup" />
                                <Icon :class="{'icon-2':true,'active-price':proListForm.searchSortType==='desc'}" type="md-arrow-dropdown" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="hr-20"></div>
        <div class="pro-list-box">
            <ProList :pro-list="proList"></ProList>
            <div class="page-box">
                <Page v-show="pageTotal>0" :page-size="proListForm.pageSize" :total="pageTotal" @on-change="pageChange" />
            </div>
        </div>
  </div>
</template>
<script>
import ProList from "../../components/product/ProList.vue";
export default {
    name:"ProductList",
    components:{ProList},
    data(){
        return{
            cate_list:[],
            price_range:[],
            attributes:[],
            pageTotal:0,
            proListForm:{
                cate_id:'',
                keyword: '',
                pageSize: 20,
                pageNum: 1,
                searchSortField: 0,
                searchSortType: '',
                searchFlag: 1,
                priceRange:'',
                brandType: 0,
                attributes:[],
            },
            priceCheckbox:[],
            attributesCheckbox:[],
            proList:[],
        }
    },
    created(){
        if (this.$route.query.cate_id){
            this.proListForm.class_id=parseInt(this.$route.query.cate_id);
        }
        this.getProList();
    },
    methods:{
        clickSort(value){//点击排序
            this.proListForm.searchSortField=value;
            if (value===3&&this.proListForm.searchSortType==='asc'){
                this.proListForm.searchSortType='desc';
            } else if (value===3) {
                this.proListForm.searchSortType='asc';
            }else{
                this.proListForm.searchSortType='';
            }
            this.proListForm.pageNum=1;
            this.getProList();
        },
        attributesChange(value){//属性选中
            this.proListForm.attributes = value;
            this.proListForm.pageNum=1;
            this.getProList();
        },
        priceRangeChange(value){//价格选择
            this.proListForm.priceRange = value;
            this.proListForm.pageNum=1;
            this.getProList();
        },
        cateClick(value){//分类选项
            this.proListForm.pageNum=1;
            if (this.proListForm.cate_id===value){
                return false;
            }
            this.$route.query.cate_id = value;
            this.proListForm.cate_id = value;
            this.getProList();
        },
        pageChange(){
          this.getProList();
        },
        getProList() {
            window.console.log(this.proListForm);
            this.axios.get('/product/list', {
                params: this.proListForm
            }).then(response => {
                let data = response.data;
                this.proList = data.list;
                this.pageTotal = data.total;
                this.cate_list = data.cate_list;
                this.price_range = data.price_range;
                this.attributes = data.attributes;
            })
        }
    }
}
</script>
<style scoped lang="less">
    .hr-20{
        height: 20px;
        width: 100%;
    }
    .product-list-wrap{
        background: #F5F5F5;
        .breadcrumb-wrap{
            width: 1200px;
            margin: 0 auto;
            padding: 20px 0;
            .breadcrumb-mini{
                font-size: 12px;
                span{
                    font-weight: unset;
                    color: #666;
                    a{
                        color: #666;
                        &:hover{
                            color: #333!important;
                        }
                    }
                }

            }
        }
        .cate-search-wrap{
            width: 1200px;
            margin: 0 auto;
            padding: 0 25px;
            box-sizing: border-box;
            background: #ffffff;
            .cate-search-item{
                display: flex;
                font-size: 12px;
                line-height: 35px;
                color: #666;
                position: relative;
                border-bottom: 1px solid #eaeaea;
                &:last-child{
                    border-bottom: none;
                }
                .title{
                    min-width: 70px;
                     color: #666;
                }
                .list-mini{
                    flex: 1;
                        min-height: 35px;
                        overflow: hidden;
                    .item{
                        margin-right: 40px;
                        float: left;
                        font-size: 12px;
                        .active{
                            color:#ca141d;
                            span{
                                color:#ca141d;
                            }
                        }
                        a{
                            color: #333;
                        }
                        &:hover{
                            color:#ca141d;
                            a{
                                color:#ca141d;
                            }
                        }
                        .price-sort{
                            width: 10px;
                            display: inline-block;
                            vertical-align: top;
                            position: relative;
                            height: 35px;
                            .icon-1{
                                position: absolute;
                                top: 5px;
                                font-size: 16px;
                                color: #333;
                            }
                            .icon-2{
                                position: absolute;
                                top: 11px;
                                font-size: 16px;
                                color: #333;
                            }
                            .active-price{
                                color:#ca141d;
                            }
                        }
                    }
                    &:after{
                        content:'';
                        display: block;
                        float: none;
                        clear: both;
                    }
                }
            }
        }

        .pro-list-box{
            width: 1200px;
            margin: 0 auto;

        }
        .page-box{
            text-align: right;
            padding-bottom: 25px;
        }
    }
</style>