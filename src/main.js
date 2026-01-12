import "./global.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import SignUp from "./components/UserlistR/SignUp.vue";
import Admin from "./components/UserlistR/Admin.vue";
import UserList from "./components/UserlistR/UserList.vue";
// ✅ Font Awesome CSS (ALL icons)
import '@fortawesome/fontawesome-free/css/all.min.css'


const routes = [
  { path: "/admin", component: Admin },
  { path: "/signup", component: SignUp },
  { path: "/users", component: UserList },
];

const router = createRouter({
  history:createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')

