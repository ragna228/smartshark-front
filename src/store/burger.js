

import {defineStore} from "pinia";


export const useBurger = defineStore({
    id: 'burger',
    state: () => {
        return {
            isOpened: false
        }
    },
    actions: {
        show(){
            this.isOpened = true;
        },
        hide(){
            this.isOpened = false;
        }
    },
    getters: {
        isOpen() {
            return this.isOpened;
        }
    }
})