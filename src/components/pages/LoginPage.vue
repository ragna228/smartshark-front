<template>
  <div class="auth-container card">
    <h2>Вход</h2>
    <input class="input" v-model="loginText" type="email" placeholder="Введите email">
    <input class="input" v-model="passwordText" type="password" placeholder="Введите password">
    <div class="not-created">Еще нет аккаунта? <router-link to="/register">Создайте</router-link></div>
    <button v-on:click="login" class="button">Войти</button>
  </div>
</template>

<script>
import {loginRequest } from "@/api";
import {useUserStore} from "@/store/user";
import {useToast} from "vue-toastification";

export default {
  name: "LoginPage",
  data() {
    return {
      loginText: '',
      passwordText: '',
    };
  },
  methods: {
    login (){
      loginRequest(this.loginText, this.passwordText).then((response) => {
        useUserStore().update(response.data.token, this.loginText);
        this.$router.push('/generate');
      }).catch((error) => {
        const toast = useToast();
        const data = error.response.data.message;
        if(typeof data === 'string'){
          toast.error(data);
          return;
        }
        for (const item of data) {
          toast.error(item);
        }
      });
    }
  }
}
</script>

<style scoped>
.not-created{
  margin-left: 30px;
  margin-top: 15px;
  font-size: 17px;
  margin-bottom: 15px;
}
.auth-container{
  min-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
h2{
  font-size: 50px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
}

input{
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  font-size: 20px;
}

button{
  margin: 10px auto 20px;
}

@media (max-width: 1000px) {
    .auth-container{
        min-width: 0;
        width: 90%;
    }
}
</style>