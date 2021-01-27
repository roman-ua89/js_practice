<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">home</router-link>
    <AddTodo
        @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">all</option>
      <option value="completed">completed</option>
      <option value="not-completed">not completed</option>
    </select>
    <hr/>
    <Loader v-if="loading" />
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
    />
    <p v-else>No todos</p>
  </div>
</template>


<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import Loader from '@/components/loader'
export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  components: {
    AddTodo,
    TodoList,
    Loader
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
          this.todos = json;
          this.loading = false;
        })
  },
  // watch: {
  //   filter(value){
  //     console.log(value);
  //   }
  // },
  computed: {
    filteredTodos() {
      if(this.filter === 'all'){
        return this.todos;
      }
      if(this.filter === 'completed'){
        return this.todos.filter(t => t.completed);
      }
      if(this.filter === 'not-completed'){
        return this.todos.filter(t => !t.completed);
      }
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    }
  }
}
</script>