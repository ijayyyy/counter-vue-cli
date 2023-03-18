import {createApp} from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from "vue-router";
import store from './store';
import "./assets/main.css";
import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import ErrorPage from "@/components/ErrorPage.vue";
import MyCounter from "@/components/MyCounter.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "/AboutPage",
        name: "AboutPage",
        component: AboutPage,
      },
      {
        path: "/:pathName(.*)",
        name: "ErrorPage",
        component: ErrorPage,
      },
      {
        path: "/MyCounter",
        name: "MyCounter",
        component: MyCounter,
      }
    ],
  });
const app=createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
