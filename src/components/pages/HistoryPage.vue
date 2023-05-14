<template>
    <div class="items-container">
        <div v-for="item in items" class="item card" v-on:click="loadWindow(item.id, item.status)">
            <h2 class="item-theme">{{ item.theme }}</h2>
            <div class="status-container">
                Типа работы:&nbsp;
                <div class="status">
                    {{ workTypeToString(item.workType) }}
                </div>
            </div>
            <div class="status-container">
                Статус:&nbsp;
                <div class="status" :style="{'color': statusToColor(item.status)}">
                    {{ statusToString(item.status) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useUserStore} from "@/store/user";
import {baseURL, historyRequest} from "@/api";
import {useToast} from "vue-toastification";
import 'vue-final-modal/style.css'
import {createConfirmDialog} from "vuejs-confirm-dialog";
import ModalComponent from "@/components/ModalComponent.vue";

export default {
    name: "HistoryPage",
    data() {
        return {
            items: [],
            interval: null,
        };
    },
    methods: {
        statusToString(status) {
            switch (status) {
                case 'STARTED':
                    return 'Начат';
                case 'SUCCESS':
                    return 'Успешно';
                case 'ERROR':
                    return 'Ошибка';
            }
        },
        statusToColor(status) {
            switch (status) {
                case 'STARTED':
                    return 'yellow';
                case 'SUCCESS':
                    return 'green';
                case 'ERROR':
                    return 'red';
            }
        },
        workTypeToString(workType) {
            switch (workType) {
                case 'COURSEWORK':
                    return 'Курсовая';
                case 'DIPLOMA':
                    return 'Диплом';
                case 'ARTICLE':
                    return 'Статья';
                case 'WORK':
                    return 'Задача(beta)';
            }
        },
        async loadWindow(id, status) {
            if (status !== 'SUCCESS') {
                useToast().info("Статья еще в процессе");
                return;
            }
            const dialog = createConfirmDialog(ModalComponent, {id: id})
            dialog.onConfirm(() => {
                const downloadUrl = `${baseURL}/${id}.docx`

                const link = document.createElement('a')
                link.href = downloadUrl

                document.body.appendChild(link)
                link.click()
            })
            dialog.reveal()
        },
        async update(){
            const token = useUserStore().token;
            historyRequest(token).then((response) => {
                this.items = response.data;
            }).catch((error) => {
                useToast().error(error.response.data.message);
            });
        }
    },
    mounted() {
        this.update();
        setInterval(() => {
            this.update();
        }, 7000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    }
}
</script>

<style scoped>
.items-container {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    overflow-x: hidden;
    height: calc(100vh - 240px);
}

.item {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 15px;
    padding-top: 10px;
}

.item-theme {
    font-size: 40px;
    margin-left: 20px;
    margin-bottom: 20px;
}

.status-container {
    display: flex;
    margin-left: 20px;
    font-size: 20px;
    margin-bottom: 10px;
}

@media (max-width: 700px) {
    .items-container {
        height: auto;
    }
}
</style>