<template>
    <div style="display: flex; flex-direction: column; min-height: calc(100vh - 200px)">
        <div style="width: 100%; max-height: 600px; overflow: hidden">
            <video class="video" src="/public/animation.mp4" autoplay muted loop/>
        </div>
        <div class="title"><strong>SmartShark</strong> – технология, позволяющая создавать материал для статей,
            курсовых,
            дипломных и
            других видов работ.
        </div>
        <div class="page-container">
            <div class="page-container-item">
                <div class="it">
                    <h2 class="sub-title hide-mobile" style="text-align: center">Любая работа – за 3 минуты</h2>

                    <div class="attempts">У нас вы можете приобрести текстовые материалы для следующих видов работ:
                    </div>
                    <div class="list-actions hide-mobile" style="margin-bottom: 30px">
                        <div class="list-actions-item">1. Статья – 199 ₽</div>
                        <div class="list-actions-text">Наша система подготовит для вас материал для научной или
                            публицистической работы любой специфики. Оригинальность текста – более 99%.
                        </div>
                        <div class="list-actions-item">2. Курсовая работа – 499 ₽</div>
                        <div class="list-actions-text">Для того, чтобы ваш студенческий проект шел быстрее, мы можем
                            предоставить вам текстовые материалы для курсовой работы любого характера и типа.
                            Оригинальность текста – более 99%.
                        </div>
                        <div class="list-actions-item">3. Дипломная работа – 999 ₽</div>
                        <div class="list-actions-text">
                            Аналогично курсовой, мы предоставляет информационно-ознакомительные материалы для дипломных
                            работ, также с оригинальностью выше 99%.

                        </div>
                        <div class="list-actions-item">
                        </div>
                        <div class="list-actions-text">
                            Решение задач – проект нашего сайта, который работает в тестовом режиме. Пишите задачу по
                            любому предмету и наш сайт решит её. (возможны сбои в работе, проект находится в
                            beta-режиме).
                        </div>
                    </div>


                    <div class="attempts hide-mobile">III простых шага для получения материалов:</div>
                    <div class="list-actions hide-mobile">
                        <div class="list-actions-item">1. Регистрируйся – 1 минута.</div>
                        <div class="list-actions-text">Если вы когда-нибудь пользовались такими ресурсами, как интернет
                            или
                            компьютер – всё просто!
                        </div>
                        <div class="list-actions-item">2. Впиши тему – 10 сек.</div>
                        <div class="list-actions-text">Название темы твоей работы</div>
                        <div class="list-actions-item">3. Через пару минут работа будет готова!</div>
                        <div class="list-actions-text">
                            Готово! Теперь можно потратить время с пользой
                        </div>
                    </div>

                    <router-link to="/login" class="button ff"
                                 style="width: 200px; margin: 20px auto;color: white; background: #3b5998; text-align: center; text-decoration: none">
                        Старт
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style scoped>
.page-container-item:last-child {
    margin: auto;
}

.list-actions-text {
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 10px;
}

.list-actions {
    margin-top: 20px;
}

.list-actions-item {
    font-size: 25px;
    font-weight: bold;
}

.attempts {
    font-size: 25px;
}

.page-container {
    display: flex;
}

.sub-title {
    font-size: 35px;
    margin-bottom: 30px;
}

.page-container-item {
    width: 60%;
    display: flex;
    flex-direction: column;
}

.video {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.title {
    text-align: center;
    margin: 30px auto 40px;
    font-size: 35px;
    width: 60%;
}

@media (max-width: 1550px) {
    .page-container-item {
        width: 100%;
    }

    .page-container {
        flex-wrap: wrap;
    }

    .it {
        margin: 20px auto;
        width: 60%;
    }
}

@media (max-width: 650px) {
    .hide-mobile {
        display: none;
    }

    .title {
        font-size: 30px;
    }

    .ff {
        padding: 0;
    }
}
</style>