<template>
<div>

    <link rel="stylesheet" href="/styles/landing.css">
<div class="page__wrapper">
        <!-- FIRST BLOCK -->
        <div class="first__block">
            <div class="first__wrapper block__wrapper">
                <header class="first__header">
                    <div class="first__logo">
                        <a class="first__logo-a" href="/">Allquasars</a>
                    </div>
                    <nav class="first__nav">
                        <ul class="first__nav-list">
                            <li class="first__nav-item">
                                <button id="fisrtMoreBtn" class="first__nav-btn">
                                    Узнать Больше
                                </button>
                            </li>
                            <li class="first__nav-item">
                                <a class="first__nav-a" href="/login">
                                    Войти
                                </a>
                            </li>
                            <li class="first__nav-item">
                                <a class="first__nav-a first__nav-attention" href="/signup">
                                    Регистрация
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div class="first__content block__content">
                    <div class="first__content-colomn first__content-colomn-text block__content-colomn">
                        <div class="first__content-section block__content-section">
                            <div class="first__content-text block__content-text">
                                <h1>Новый способ <span class="underline">найти</span><br> <span class="underline">работу</span> для артистов.</h1>
                                <h4 style="color: rgba(0,0,0, 0.75);">Allquasars - это онлайн платформа, <br> созданная специально для музыкантов, <br> танцоров и моделей, которая поможет <br> находить работу легче. </h4>
                                <ul class="first__content-list">
                                    <li class="first__content-li"><span class="first__content-feature">Концерты</span></li>
                                    <li class="first__content-li"><span class="first__content-feature">Шоу</span></li>
                                    <li class="first__content-li"><span class="first__content-feature">Мероприятия</span></li>
                                </ul>
                                <div class="first__content-action">
                                    <a href="/signup" class="first__content-start">Регистрация</a>
                                    <a href="/login" class="first__content-login">Войти</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="first__content-colomn block__content-colomn">
                        <div class="first__content-illustration block__content-illustration">
                            <img class="first__content-img block__content-img" src="images/landing/festivities.svg" alt="festivities">
                        </div>
                    </div>
                </div>
            </div>
            <!--<div class="first__wave first__wave-end">
                <img src="./icons/first-wave-start.svg" alt="wave-2">
            </div>-->
        </div>
        <!-- END OF FIRST BLOCK -->
        <!-- MAIN BLOCK-->
        <main id="main" class="main-off">
            <div class="second__block block__block">
                <div class="second__wrapper block__wrapper">
                    <div class="second__section block__section">
                        <h1>
                            Для артистов. Для менеджеров. Для всех.
                        </h1>
                    </div>
                    <div class="second__content block__content">
                        <div class="second__content-colomn block__content-colomn">
                            <div class="second__content-illustration block__content-illustration block__content-illustration-padding">
                                <img class="second__content-img block__content-img" src="images/landing/collaborators.svg" alt="collaborators">
                            </div>
                        </div>
                        <div class="second__content-colomn block__content-colomn">
                            <div class="second__content-section block__content-section block__content-section-padding">
                                <div class="second__content-text block__content-text">
                                    <h3 style="color: rgba(0,0,0, 0.5);">Здесь все ищут друг друга.</h3>
                                    <h2>Правильная <span class="underline">настройка</span> профиля и умный поиск помогут <span class="underline">найти</span> необходимого человека.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="third__block block__block">
                <div class="third__wrapper block__wrapper">
                    <div class="third__section block__section">
                        <h1>
                            Отзывчивость.
                        </h1>
                    </div>
                    <div class="third__content block__content">
                        <div class="third__content-colomn block__content-colomn">
                            <div class="third__content-section block__content-section block__content-section-padding">
                                <div class="third__content-text block__content-text">
                                    <h3 style="color: rgba(0,0,0, 0.5);">Простота наше все.</h3>
                                    <h2>Легкий и понятный <span class="underline">дизайн</span> упростят работу с продуктом и увеличат <span class="underline">производительность</span>.</h2>
                                </div>
                            </div>
                        </div>
                        <div class="third__content-colomn block__content-colomn">
                            <div class="third__content-illustration block__content-illustration block__content-illustration-padding">
                                <img class="third__content-img block__content-img" src="images/landing/designcomponents.svg" alt="designcomponents">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fourth__block block__block">
                <div class="fourth__wrapper block__wrapper">
                    <div class="fourth__section block__section">
                        <h1>
                            Наши преимущества.
                        </h1>
                    </div>
                    <div class="fourth__content block__content">
                        <div class="fourth__content-colomn">
                            <div class="fourth__content-illustration">
                                <img class="fourth__content-img" src="images/landing/mobileux.svg" alt="mobile ux">
                            </div>
                            <div class="fourth__content-section">
                                <div class="fourth__content-text">
                                    <h2>Мобильная версия.</h2>
                                    <h4>Спроектирована для быстрого доступа ко всем возможностям продукта.</h4>
                                </div>
                            </div>
                        </div>
                        <div class="fourth__content-colomn">
                            <div class="fourth__content-illustration">
                                <img class="fourth__content-img" src="images/landing/darkmode.svg" alt="dark mode">
                            </div>
                            <div class="fourth__content-section">
                                <div class="fourth__content-text">
                                    <h2>Темная тема.</h2>
                                    <h4>Специально разработана для более удобного пользования.</h4>
                                </div>
                            </div>
                        </div>
                        <div class="fourth__content-colomn">
                            <div class="fourth__content-illustration">
                                <img class="fourth__content-img" src="images/landing/securelogin.svg" alt="secure login">
                            </div>
                            <div class="fourth__content-section">
                                <div class="fourth__content-text">
                                    <h2>Безопасность.</h2>
                                    <h4>Грамотно выстроенная система безопасности не позволит мошенникам украсть ваши данные.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fifth__block block__block">
                <div class="fifth__wrapper block__wrapper">
                    <div class="fifth__section block__section">
                        <h1>
                            Давайте работать вместе.
                        </h1>
                    </div>
                    <div class="fifth__content block__content">
                        <div class="fifth__content-colomn block__content-colomn">
                            <div class="fifth__content-section block__content-section block__content-section-padding">
                                <div class="fifth__content-text block__content-text">
                                    <h2>Начинайте прямо <br> сейчас абсолютно <br> бесплатно.</h2>
                                    <h3>Легкий старт.</h3>
                                    <div class="fifth__content-action">
                                        <a href="signup.html" class="fifth__content-start">Начать Работу</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fifth__content-colomn block__content-colomn">
                            <div class="fifth__content-illustration block__content-illustration block__content-illustration-padding">
                                <img class="fifth__content-img block__content-img" src="images/landing/start.svg" alt="start">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sixth__block block__block">
                <div class="sixth__wrapper block__wrapper">
                    <div class="sixth__section block__section">
                        <h2>
                            Частые вопросы.
                        </h2>
                    </div>
                    <div class="sixth__content">
                        <div class="sixth__content-row">
                            <details class="sixth__content-details">
                                <summary class="sixth__content-question"><h5>Кто финансирует этот проект?</h5></summary>
                                <h4>Лорем ипсум долор сит амет, мел ут алиа агам адиписци, ид пер лаудем саперет персеяуерис, еум ессент цонституам еа. Вис ат цаусае репримияуе, еверти оцурререт вих ат. Оратио мелиус ет ест. Тритани индоцтум продессет ех усу.</h4>
                            </details>
                        </div>
                        <div class="sixth__content-row block__content-row">
                            <details class="sixth__content-details">
                                <summary class="sixth__content-question"><h5>Кто финансирует этот проект?</h5></summary>
                                <h4>Лорем ипсум долор сит амет, мел ут алиа агам адиписци, ид пер лаудем саперет персеяуерис, еум ессент цонституам еа. Вис ат цаусае репримияуе, еверти оцурререт вих ат. Оратио мелиус ет ест. Тритани индоцтум продессет ех усу.</h4>
                                
                            </details>
                        </div>
                        <div class="sixth__content-row block__content-row">
                            <details class="sixth__content-details">
                                <summary class="sixth__content-question"><h5>Кто финансирует этот проект?</h5></summary>
                                <h4>Лорем ипсум долор сит амет, мел ут алиа агам адиписци, ид пер лаудем саперет персеяуерис, еум ессент цонституам еа. Вис ат цаусае репримияуе, еверти оцурререт вих ат. Оратио мелиус ет ест. Тритани индоцтум продессет ех усу.</h4>
                                
                            </details>
                        </div>
                        <div class="sixth__content-row block__content-row">
                            <details class="sixth__content-details">
                                <summary class="sixth__content-question"><h5>Кто финансирует этот проект?</h5></summary>
                                <h4>Лорем ипсум долор сит амет, мел ут алиа агам адиписци, ид пер лаудем саперет персеяуерис, еум ессент цонституам еа. Вис ат цаусае репримияуе, еверти оцурререт вих ат. Оратио мелиус ет ест. Тритани индоцтум продессет ех усу.</h4>
                                
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- footer -->
        <footer class="footer__block">
            <div class="footer__wrapper block__wrapper">
                <div class="footer__content">
                    <div class="footer__logo">
                        <a class="footer__logo-a" href="landing.html">Allquasars</a>
                        <div class="footer__rights-text">
                            2020 © Copyright
                        </div>
                    </div>
                    <div class="footer__nav">
                        <ul class="footer__nav-ul footer__nav-ul--first">
                            <li class="footer__nav-item footer__nav-item--first">Поддержка</li>
                            <li class="footer__nav-item"><a href="#">Помощь</a></li>
                            <li class="footer__nav-item"><a href="#">Условия и положения</a></li>
                            <li class="footer__nav-item"><a href="#">Политика конфиденциальности</a></li>
                            <li class="footer__nav-item"><a href="#">Безопасность</a></li>
                        </ul>
                        <ul class="footer__nav-ul">
                            <li class="footer__nav-item footer__nav-item--first">Продукт</li>
                            <li class="footer__nav-item"><a href="#">Узнать Больше</a></li>
                            <li class="footer__nav-item"><a href="#">Регистрация</a></li>
                            <li class="footer__nav-item"><a href="#">Войти</a></li>
                        </ul>
                        <ul class="footer__nav-ul">
                            <li class="footer__nav-item footer__nav-item--first">Компания</li>
                            <li class="footer__nav-item"><a href="#">Instagram</a></li>
                            <li class="footer__nav-item"><a href="#">Facebook</a></li>
                            <li class="footer__nav-item"><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        <!-- END OF MAIN BLOCK-->

    </div>
</div>
</template>

<script>
import '../../public/js/landing';
//Возможно стоит переделать


export default {
    name:'landing',
    mounted(){
        document.title ='Allquasars: Start'
    },
    methods:{
        alert(){
            alert('TEST');
        }
    }
}    




</script>

<style>

</style>

