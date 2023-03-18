import {createStore} from 'vuex';

const store=createStore({
    state:{
    counter: 0
    },
    getters:{
     counter: state => state.counter * 1,
    
    },
    mutations:{
       increment: state => state.counter++,
       decrement: state => state.counter--,
       reset: state => state.counter=0,
       setCounter(state, value) {state.counter = value}
    },
    actions:{
        updateCounter({commit}, value) {
            commit('setCounter', value)
        }
    }
    
      

    
})
export default store;