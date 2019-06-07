<template>
    <div>
        <h1 font: Arial>Todo Table List</h1>
        <ul>
            <li v-for='(task,index) in renderTasks' :key='index'>
                {{task}}
                <button type = "button" width:auto height:auto @click="removeTask(index)">Remove</button>
                <!-- <button type = "button" width:auto height:auto @click="setTaskDone(index)">Done</button> -->
            </li>
        </ul>
        <input type="text" width="20" height="5" v-model="newTask" @keyup.enter="addTask()">
        <button type="button" width = "20" height = "5" @click="addTask()">Add task</button>
    </div>      
</template>



<script>
export default {
    data() {
        return {
            newTask : ""
        }   
    },

    computed: {
        renderTasks(){
            return this.$store.getters.todoTasks
        }
    },

    methods:{
        addTask : function() {
          this.$store.dispatch('addNewTask',this.newTask)
          this.newTask = ""
        },

        removeTask : function(index) {
            this.$store.dispatch('removeTask',index)
        },
    }
}
</script>

<style>

</style>
