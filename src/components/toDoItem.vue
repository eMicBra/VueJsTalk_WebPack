<template>
  <div>{{toDoItem.description}}<button @click="onDeleteClicked">Delete</button></div>
</template>
<script>
export default {
  name: 'to-do-item',
  props: {
      toDoItem: {
          required: true,
          type: Object
      }
  },
  methods: {
      onDeleteClicked(){
          this.$emit('deleteToDoItem', this.toDoItem.id)
      }
  },
}
</script>

