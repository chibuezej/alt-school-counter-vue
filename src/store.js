import {createStore} from "vuex"

const store = createStore({
    state:{
        count:0,
        inputValue: "",
    },
    getters:{
        counter(state){
            return state.count;
        },
            getInputValue(state){
                return state.inputValue;
            }
        
    },
    actions:{
        increament({commit}){
            commit('increament')
        },
        decreament({commit}){
            commit('decreament')
        },
        reset({commit}){
            commit('reset')
        },
      
    },
    mutations:{
        increament(state){
            state.count++
        },
        decreament(state){
            state.count--
        },
        reset(state){
            state.count = 0;
        },
    
    }
})

export default store;