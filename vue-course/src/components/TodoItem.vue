<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox"
             v-on:change="todo.completed = !todo.completed" />
      <strong>{{index + 1}}</strong>
      {{todo.title | upperCase}}
    </span>
    <button class="rm"
            v-on:click="$emit('remove-todo', todo.id)"
    >&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style scoped>
  li {
    border: 1px solid #ccc;
    padding: 15px;
    display: flex;
    justify-content: space-between;
  }

  .rm {
    background: red;
    color: #fff;
    border-radius: 50%;
    border: none;
  }

  .done {
    text-decoration: line-through;
  }

  input {
    margin-right: 1rem;
  }
</style>