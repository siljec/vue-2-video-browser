// Entry point for the application
// vue cli will look in src directory for main.js
// import Vue from 'vue';
import Vue from 'vue'


import App from './App';

new Vue({
    //el: '#app',
    render: h => h(App)
}).$mount('#app');