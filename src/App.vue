<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import 'vue-toastification/dist/index.css';
import {useBurger} from "@/store/burger";
import {useUserStore} from "@/store/user";

const burger = useBurger();
const user = useUserStore();
</script>

<script>
import {provideToast} from "vue-toastification";
import {useBurger} from "@/store/burger";

provideToast({
    maxToasts: 10,
})

</script>

<template>
    <div class="sub-app">
        <Header/>

        <router-view>
        </router-view>

        <Footer/>
    </div>
    <DialogsWrapper/>
    <div class="back" v-if="burger.isOpened" v-on:click="burger.hide"></div>
    <div id="navigation-container" v-bind:class="{'showed': burger.isOpened}">
        <div class="centered nav-wrapper">
            <router-link class="icon-container" to="/" style="margin-top: 30px" v-on:click="burger.hide">
                <img id="logo" src="/public/logo.png" alt="logo">
                <h1 class="logo-text">SmartShark</h1>
            </router-link>

            <div class="nav-burger">
                <router-link class="nav-burger-item" v-on:click="burger.hide" to="/">Главная</router-link>
                <router-link class="nav-burger-item" v-if="user.token" v-on:click="burger.hide" to="/generate">Генерация</router-link>
                <router-link class="nav-burger-item" v-if="user.token" v-on:click="burger.hide" to="/history">Мои заказы</router-link>
                <router-link class="nav-burger-item" v-if="!user.token" v-on:click="burger.hide" to="/login">Вход</router-link>
                <router-link class="nav-burger-item" v-if="!user.token" v-on:click="burger.hide" to="/register">Регистрация</router-link>
            </div>

            <div class="burger-footer">
                © 2023 LLC SharkSoft <br> All rights reserved.
            </div>
        </div>
    </div>
</template>

<style>
.nav-wrapper{
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
}
.burger-footer{
    font-size: 20px;
}
.nav-burger{
    display: flex;
    flex-direction: column;
}
.nav-burger-item{
    margin-top: 50px;
    color: black;
    text-decoration: none;
    font-size: 25px;
}
.nav-burger-item:first-child{
    margin-top: 0;
}
#logo {
    width: 80px;
    height: 80px;
    margin-top: auto;
    margin-bottom: auto;
}
.back{
    width: 100%;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    z-index: 1000;
}

.icon-container {
    display: flex;
    text-decoration: none;
}

.logo-text {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 40px;
    color: black;
    margin-left: 20px;
}

.sub-app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
}

#navigation-container {
    width: 300px;
    left: 100%;
    transition: all 1s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    top: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    background: white;
    z-index: 1000;
}
.showed{
    transition: all 1s;
    left: calc(100% - 300px)!important;
}

@media (max-width: 880px) {
    #logo {
        width: 50px;
        height: 50px;
    }

    .logo-text {
        font-size: 25px;
    }
}
</style>