<template>
  <div>
      <div>
          <label>Add ToDo:</label><input type="text" ref="toDoDescription" /><button @click="addToDo">Add</button>
      </div>
      <div>
          <to-do v-for="toDoItem in toDoList" :key="toDoItem.id" :toDoItem=toDoItem v-on:deleteToDoItem="onDeleteToDoItem" />
      </div>
  </div>
</template>
<script>
import toDoItem from './toDoItem'
export default {
    name: 'to-do-list',
    components: {
        toDo: toDoItem
    },
    data() {
        return {
            toDoList: [],
        }
    },
    methods: {
        addToDo(){
            let vm = this;

            let input = vm.$refs.toDoDescription;
            if (input.value) {

                let toDoItem = {
                    id: vm.uuidv4(), 
                    description: input.value
                };

                vm.toDoList.push(toDoItem);

                input.value = '';
            }
        },
        onDeleteToDoItem(deleteToDoId) {
            this.toDoList = this.toDoList.filter(toDoItem => toDoItem.id !== deleteToDoId);
        },
        uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            )
        }
    },
    created(){
        if (!this.$store.toDoList) {
            this.$store.toDoList = [];
        }

        this.toDoList = this.$store.toDoList;
    }
}
</script>

