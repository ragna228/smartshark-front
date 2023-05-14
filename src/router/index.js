import {createRouter, createWebHistory} from "vue-router";
import HistoryPage from "@/components/pages/HistoryPage.vue";
import MainPage from "@/components/pages/MainPage.vue";
import LoginPage from "@/components/pages/LoginPage.vue";
import Generate from "@/components/pages/GeneratePage.vue";
import RegisterPage from "@/components/pages/RegisterPage.vue";


const routes = [
    {
        path: '/',
        Name: 'Main',
        component: MainPage,
        meta: {
            isRequiredAuth: false,
        }
    },
    {
        path: '/history',
        Name: 'History',
        component: HistoryPage,
        meta: {
            isRequiredAuth: true,
        }
    },
    {
        path: '/login',
        Name: 'Login',
        component: LoginPage,
        meta: {
            isRequiredAuth: false,
        }
    },
    {
        path: '/register',
        Name: 'Register',
        component: RegisterPage,
        meta: {
            isRequiredAuth: false,
        }
    },
    {
        path: '/generate',
        Name: 'Generate',
        component: Generate,
        meta: {
            isRequiredAuth: true,
        }
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;