<template>
 <div id="pageWrapper" class="page__wrapper">
    <link rel="stylesheet" href="./styles/error.css">
        <div class="page__wave page__wave-top">
            <svg viewBox="0 0 1440 320">
                <path fill="#a2d9ff" fill-opacity="1" d="M0,64L48,53.3C96,43,192,21,288,42.7C384,64,480,128,576,133.3C672,139,768,85,864,90.7C960,96,1056,160,1152,160C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
              </svg>
        </div>
        <div class="form">
            <div class="form__content">
                <div class="form__headering">
                   Ошибка!
                </div>
                <div class="form__container">

                    <!-- ИЗОБРАЖЕНИЯ -->
                    <div class="form__image">
                        <span class="form__image-wrapper">
                            <img class="form__image-image" src="/images/error/error.svg" alt="ERROR!">
                        </span>
                    </div>
                    <span class="form__text">Что-то пошло не так ):</span>
                    
                    <!-- КНОПКА ВЕРНУТЬСЯ -->
                    <div class="form__back">
                        <span class="form__back-wrap">
                            <a class="form__back-a" href="/">Вернуться на стартовую</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="page__wave page__wave-bottom">
            <svg viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,192C840,171,960,85,1080,53.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </div>
    </div>
</template>

<script>

export default {
    name:'error_access',
}    
</script>

