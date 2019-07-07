export default {
    namespaced:true,
    state:{
        name:'liu'
    },
    getters:{
        getName(state){
            return state.name
        }
    },
    mutations:{
        setName(state,payload){
            state.name = payload
        }
    },
    actions:{
        setName(context,payload){
            context.commit('setName',payload)
        }
    }
}