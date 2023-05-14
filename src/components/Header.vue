<template>
    <header>
        <router-link class="icon-container" to="/">
            <img id="logo" src="/public/logo.png" alt="logo">
            <h1 class="logo-text">SmartShark</h1>
        </router-link>

        <div class="nav">
            <router-link class="nav-item" v-if="authStore.token" to="/">Главная</router-link>
            <router-link class="nav-item" v-if="authStore.token" to="/generate">Генерация</router-link>
            <router-link class="nav-item" v-if="authStore.token" to="/history">Мои заказы</router-link>
        </div>

        <router-link class="button nav-item vert-centered login-btn"
                     style="margin-right: 30px; background: #3b5998; color: white;" to="/login" v-if="!authStore.token">
            Войти
        </router-link>
        <div class="user-email login-btn" v-if="authStore.token"> {{ authStore.email }}</div>

        <img src="/public/menu.png" id="burger" v-on:click="burger.show">
    </header>
</template>
<script setup>
import {useUserStore} from "@/store/user";
import {useBurger} from "@/store/burger";

const authStore = useUserStore();
const burger = useBurger();
</script>
<script>

import {useBurger} from "@/store/burger";

export default {
    name: "Header",
}
</script>

<style scoped>
header {
    height: 100px;
    width: 100%;
    display: flex;
    position: sticky;
    justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.icon-container {
    display: flex;
    text-decoration: none;
}

#logo {
    width: 80px;
    height: 80px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 20px;
}

.logo-text {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 40px;
    color: black;
    margin-left: 20px;
}

.user-email {
    margin: auto 20px auto 0;
    font-size: 20px;
}

.nav {
    width: 500px;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: space-around;
}

.nav-item {
    font-size: 25px;
    color: black;
    text-decoration: none;
}

#burger {
    width: 50px;
    height: 50px;
    display: none;
    margin-top: auto;
    margin-right: 30px;
    margin-bottom: auto;
}

@media (max-width: 880px) {
    .nav, .user-email {
        display: none;
    }

    #logo {
        width: 60px;
        height: 60px;
    }
    #burger{
        display: initial;
    }

    .logo-text {
        font-size: 30px;
    }

    .login-btn {
        display: none;
    }

}


</style>