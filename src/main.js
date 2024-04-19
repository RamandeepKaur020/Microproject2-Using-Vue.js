// Import Vue library
import Vue from 'vue';
// Import App component from './App.vue' file
import App from './App.vue';

// Configure Vue instance
Vue.config.productionTip = false;

// Create new Vue instance
new Vue({
  // Render the App component
  render: h => h(App),
}).$mount('#app'); // Mount the Vue instance to the element with id="app"
