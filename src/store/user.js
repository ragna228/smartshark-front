import {defineStore} from "pinia";


export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            token: null,
            email: null
        }
    },
    actions: {
        update(newToken, newEmail) {
            this.token = newToken;
            this.email = newEmail;
        },
        reset(){
            this.token = null;
            this.email = null;
        },
        isLogin(){
            return this.token != null;
        }
    },
    persist: true,
})