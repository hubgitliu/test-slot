export default {
    // namespaced:true,
    state:{ 
        count:111
    },
    getters:{
        getCount:(state,getters,rootState)=>{
            return state.count+rootState.count+getters.getone
        },
        getone:(state)=>{
            return state.count;
        },
        getCountOringin:(state)=>{
            return state.count;
        }
    },
    mutations:{
        getCount: state=>{
            state.count++
        }
    },
    actions:{
        getCount:context=>{
            context.commit('getCount')
        }
    }
}