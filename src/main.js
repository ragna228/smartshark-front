import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import router from "@/router";
import {useUserStore} from "@/store/user";
import Toast from "vue-toastification";
import * as ConfirmDialog from 'vuejs-confirm-dialog'
import { Buffer } from 'buffer';


const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

router.beforeEach((to, from, next) => {
    const auth = useUserStore()
    console.log(to.meta.isRequiredAuth);
    if (to.meta.isRequiredAuth){
        if(auth.isLogin()){
            next()
        }
        else{
            next('/login')
        }
    }
    else {
        next()
    }
})

createApp(App).use(ConfirmDialog).use(router).use(Toast).use(pinia).mount('#app')