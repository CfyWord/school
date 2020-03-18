// 搜索历史记录

//定义属性
const state = {
    items:JSON.parse(localStorage.getItem("SearchHistoryRecordList"))?JSON.parse(localStorage.getItem("SearchHistoryRecordList")):[],
};

// 获取属性
const getters = {

};

// actions
const actions = {
    clear (context) {
        context.commit('clear')
    },
    set (context,values) {
        context.commit('set',values)
    },
    add(context,values){
        context.commit('add',values)
    },
    reset(context){
        context.commit('reset');
    },
};

// 改变属性状态store.commit('increment', 10)
const mutations = {
    clear(state){
        localStorage.removeItem("SearchHistoryRecordList");
        state.items = [];
    },
    set(state,values){
        state.items = values;
        localStorage.setItem("SearchHistoryRecordList",values);
    },
    add(state,value){
        let items = state.items;
        if (items.indexOf(value)===-1){
            items.unshift(value);
            localStorage.setItem("SearchHistoryRecordList",JSON.stringify(items));
        }
    },
    reset(state){
        if (JSON.parse(localStorage.getItem("SearchHistoryRecordList"))){
            state.items = JSON.parse(localStorage.getItem("SearchHistoryRecordList"));
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}