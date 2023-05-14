<template>
    <div class="auth-container card">
        <h2>Сгенерировать работу</h2>
        <select class="input" v-model="workType">
            <option>Курсовая</option>
            <option>Диплом</option>
            <option>Статья</option>
            <option>Задача(beta)</option>
        </select>
        <input class="input" v-model="theme" type="email" :placeholder="workType === 'Задача(beta)'? 'Ваедите задачу' : 'Введите тему'">
        <div class="themes-container" v-if="workType === 'Диплом' || workType === 'Курсовая'">
            <details>
                <summary>
                    <input class="input input-sub" v-model="paragraph" type="text" placeholder="Глава 1">
                </summary>
                <input class="input" v-model="subParagraphs[0]" type="text" placeholder="Параграф 1">
                <input class="input" v-model="subParagraphs[1]" type="text" placeholder="Параграф 2">
            </details>

            <details>
                <summary>
                    <input class="input input-sub" v-model="paragraph1" type="text" placeholder="Глава 2">
                </summary>
                <input class="input" v-model="subParagraphs1[0]" type="text" placeholder="Параграф 1">
                <input class="input" v-model="subParagraphs1[1]" type="text" placeholder="Параграф 2">
            </details>


        </div>
        <div style="margin-left: 30px; margin-right: 20px">
            <input type="checkbox" style="margin-left: 0" id="accept" name="isAccept" v-model="isAccept">
            <label class="accept-text" for="isAccept">Я согласен с <a download="" href="https://smartshark.ru/license.pdf">пользовательским
                соглашением</a></label>
        </div>
        <button v-on:click="generate" class="button">Сгенерировать</button>
    </div>
</template>

<script>
import {createGeneration} from "@/api";
import {useUserStore} from "@/store/user";
import {useToast} from "vue-toastification";

export default {
    name: "GeneratePage",
    data() {
        return {
            theme: '',
            workType: 'Диплом',
            paragraph: '',
            subParagraphs: [
                '',
                ''
            ],
            paragraph1: '',
            subParagraphs1: [
                '',
                ''
            ],
            isAccept: false
        }
    },
    methods: {
        stringToWorkType(workType) {
            switch (workType) {
                case 'Курсовая':
                    return 'COURSEWORK';
                case 'Диплом':
                    return 'DIPLOMA';
                case 'Статья':
                    return 'ARTICLE';
                case 'Задача(beta)':
                    return 'WORK';
            }
        },
        generate() {
            if (!this.isAccept) {
                useToast().error("Вы должны принять пользовательское соглашение");
                return;
            }
            const data = new Map([[
                this.paragraph, this.subParagraphs
            ], [this.paragraph1, this.subParagraphs1]]);
            const toast = useToast();
            createGeneration(useUserStore().token, this.theme, this.stringToWorkType(this.workType), Object.fromEntries(data)).then((response) => {
                toast.success(`Заказ на тему ${response.data.theme} создан`);
            }).catch((error) => {
                toast.error(error.response.data.message);
            });
        }
    }
}
</script>

<style scoped>
#accept {
    width: 15px;
    height: 15px;
    margin-right: 10px;
}

.accept-text {
    font-size: 20px;
}

.auth-container {
    min-width: 900px;
    margin: auto;
    display: flex;
    flex-direction: column;
}

h2 {
    font-size: 50px;
    margin-top: 20px;
    margin-right: auto;
    text-align: center;
    margin-left: auto;
}

.themes-container {
    display: flex;
    flex-direction: column;
}

input, select {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 20px;
    font-size: 20px;
}

details {
    margin-left: 30px;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    margin-right: 30px;
}

.input-sub {
    margin-left: 0;
    margin-top: 0;
    width: calc(100% - 30px);
    margin-right: 0;
}

details input {
    width: calc(100% - 41px);
    margin-right: 0;
}


button {
    margin: 10px auto 20px;
}

@media (max-width: 960px) {
    .auth-container {
        min-width: 0;
        margin-left: 30px;
        margin-right: 30px;
    }

    @media (max-width: 700px) {
        h2{
            font-size: 40px;
        }
    }
}
</style>