<template>
    <div id="app">
      <header>
        <h1>To-Do List</h1>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </header>
      <div class="input-container">
        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo">
        <button @click="addTodo">Add</button>
      </div>
      <ul class="todo-list">
        <li v-for="(todo, index) in todos" :key="index" class="todo-item">
          <span>{{ todo }}</span>
          <button @click="removeTodo(index)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router'; // Correct import statement
  
  export default {
    components: {
      RouterLink
    },
    data() {
      return {
        newTodo: '',
        todos: []
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== '') {
          this.todos.push(this.newTodo);
          this.newTodo = '';
        }
      },
      removeTodo(index) {
        this.todos.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  #app {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9; /* Light gray background color */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle depth effect */
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  h1 {
    color: #333;
  }
  
  nav {
    display: flex;
  }
  
  nav a {
    color: #007bff;
    text-decoration: none;
    margin-right: 20px;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  
  .input-container {
    display: flex;
    margin-bottom: 20px;
  }
  
  input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    font-size: 16px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .todo-list {
    list-style-type: none;
    padding: 0;
  }
  
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
  }
  
  .todo-item span {
    flex: 1;
    margin-right: 10px;
    font-size: 16px;
  }
  
  .todo-item button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .todo-item button:hover {
    background-color: #c82333;
  }
  </style>
  