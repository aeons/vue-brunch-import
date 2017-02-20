import Vue from 'vue';
import Hello from './Hello';
// Un-comment the following line to make the component work
// import 'axios';

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    render: h => h(Hello)
  });
});
