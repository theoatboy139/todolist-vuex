import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks : ["test","vuex","todo list"]
  },

  getters:{
    todoTasks (state) {
      return state.tasks
    }
  },

  mutations: {
    addNewTask (state, newTask) {
      state.tasks = [...state.tasks,newTask]  
    },

    removeTask (state, index){
      state.tasks = state.tasks.filter((task,i) => {
        return i != index
      })
    }
  },

  actions: {
    addNewTask (context, newTask){
      context.commit('addNewTask', newTask)
    },

    removeTask (context, index){
      context.commit('removeTask', index)
    }
  }
})
