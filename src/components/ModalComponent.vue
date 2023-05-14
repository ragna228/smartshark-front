<template>
    <div class="modal-container">
        <div class="modal-body card">
            <img class="close" src="/public/close.png" @click="emits('cancel')">
            <div id="viewer" class="text-data"></div>

            <button class="button centered" style="background: #3b5998; color: white;" @click="emits('confirm')">
                Сохранить
            </button>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps(['id'])
const emits = defineEmits(['close'])


</script>
<script>
import WebViewer from "@pdftron/webviewer";
import {baseURL} from "@/api";

export default {
    name: 'aa',
    methods: {
    },
    mounted() {
        WebViewer({initialDoc: `${baseURL}/${this.id}.docx`, isReadOnly: true,
    }, document.getElementById('viewer'));
    }
}
</script>

<style>
.text-data {
    margin-left: 20px;
    height: 90vh;
    overflow-y: scroll;
    white-space: pre-wrap;
}

.centered {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
}

.close {
    width: 40px;
    margin: 10px 20px 20px auto;
    height: 40px;
}

.modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #000000d0;
}

.modal-body {
    width: 95%;
    height: 95%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

</style>