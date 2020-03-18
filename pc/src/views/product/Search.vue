<template>
    <div id="search">
        搜索也
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "Search",
        data(){
            return{

            }
        },
        mounted(){
            this.addSearchHistoryRecord(this.$route.query.keyword);
        },
        methods:{
            ...mapActions({
                addSearchHistoryRecord: 'SearchHistoryRecord/add'
            })
        }
    }
</script>

<style scoped>

</style>