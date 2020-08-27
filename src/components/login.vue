<template>
    <!-- <div> -->
        <!-- <h1>Login</h1>
        email: <input type="text" v-model="email"  /><br />
        password: <input type="password" v-model="password"  /><br />
        <button v-on:click="login" >Login</button>
        {{error}} -->
    <!-- </div> -->
 <div id="pageWrapper" class="page__wrapper">
    <link rel="stylesheet" href="/styles/login.css">
    <link rel="stylesheet" href="/styles/fonts.css">
    <link rel="stylesheet" href="/styles/popup.css">
            <!-- ПОПАП -->
        <div id="popupWrapper" class="popup" :class="{'popup-active':popupflag}">
            <div class="popup__content">
                <div class="popup__content-headering">
                    Упс!
                </div>
                <div class="popup__content-message">
                    <!-- СООБЩЕНИЕ, КОТОРОЕ НУЖНО ПОКАЗАТЬ -->
                    <span class="popup__content-text">{{error}}</span>
                </div>
                <!-- КНОПКА ЗАКРЫТЬ ПОПАП -->
                <div class="popup__content-close">
                    <button id="popupClose" @click="popupToggle" class="popup__content-btn">Понятно</button>
                </div>
            </div>
        </div>
        <!-- КОНЕЦ ПОПАП -->
        <div class="page__wave page__wave-top">
            <svg viewBox="0 0 1440 320">
                <path fill="#a2d9ff" fill-opacity="1" d="M0,64L48,53.3C96,43,192,21,288,42.7C384,64,480,128,576,133.3C672,139,768,85,864,90.7C960,96,1056,160,1152,160C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
              </svg>
        </div>
        <div class="form">
            <div class="form__content">
                <div class="form__headering">
                    Вход в аккаунт <a class="form__headering-a" href="landing.html">Allquasars</a>
                </div>
                <div class="form__container"  v-on:submit.prevent="login">
                    <form>
                    <span class="form__bio-text">Системные данные</span>
                    <!-- ПОЧТА -->
                    <div class="form__mail">
                        <span id="mailWrapper" :class="{ 'form__clue--clicked':inputMailComp}" class="form__mail-wrap form__clue" data-placeholder="Почта">
                            <input id="inputMail"  required v-model="email" @focus="inputMail = true" @blur="inputMail = false" class="form__mail-input" type="email"/>
                        </span>
                    </div>

                    <!-- ПАРОЛЬ / ПОДТВЕРЖДЕНИЕ ПАРОЛЯ -->
                    <div class="form__password">
                        <span id="passwordWrapper" :class="{'form__clue--clicked':inputPasswordComp}" class="form__password-wrap form__clue" data-placeholder="Пароль">
                            <input id="inputPassword" minlength="8" v-model="password" @focus="inputPassword = true" @blur="inputPassword = false" class="form__password-input" type="password"  autocomplete="off"/>
                        </span>
                    </div>

                    <!-- УСЛОВИЯ -->
                    <div class="form__term">
                        <span id="termWrapper" class="form__term-wrap">
                            <input class="form__term-input" type="checkbox" name="" id="inputTerm">
                        </span>
                        <span class="form__term-message">
                            Остаться в системе
                        </span>
                    </div>

                    <!-- ВОЙТИ / РЕГИСТРАЦИЯ -->
                    <div class="form__submit">
                        <span class="form__submit-wrap">
                            <a class="from__submit-a" href="/signup">Регистрация</a>
                        </span>
                        <span class="form__submit-wrap">
                            <button id="buttonSubmit" class="from__submit-btn" type="submit">Войти</button>
                        </span>
                    </div>
                    </form>
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


// ПЕРЕД ТЕМ КАК ПЫТАТЬСЯ ПРОТЕСТИТЬ В ЛОКАЛКЕ СМЕНИ ЛОКАЛХОСТ НА ВНУТР. ИП!
<script>
import axios from 'axios';

export default {
    name:'login',
    data(){
        return{
            inputPassword:false,
            inputMail:false,
            email: '',
            password: '',

            popupflag:false,
            error:'',
        }
    },
    computed: {
        inputMailComp:function(){if ((this.inputMail)||(!this.email=='')){return true}else{return false}},
        inputPasswordComp:function(){if ((this.inputPassword)||(!this.password=='')){return true}else{return false}},
    },
    mounted(){
        document.title ='Allquasars: Log In';
        //Проверка на авторизацию
        axios.get('http://'+document.domain+':5000/user',{ headers: {token:localStorage['token']}  })
            .then(()=>{
                this.$router.push('/main');
            },()=>{
                console.log('UNAUTHORIZED');
            });
    },
    methods:{ 
        popupToggle(){
            this.popupflag = !this.popupflag;
        },
        login: function () {
            const candidate = {
                email:this.email,
                password: this.password,
            }
            // console.log(candidate);
            axios.post('http://'+document.domain+':5000/login', candidate)
                .then(res=>{
                    if (res.status==200){
                        localStorage['token'] = res.data.token
                        this.$router.push('/main');
                    }
                    // console.log(res);
                    this.error = res.data.message;
                    this.popupflag = !this.popupflag;
                }, err=>{
                    // console.log(err.response);
                    // alert(err.response.data.message);
                    this.error=err.response.data.message;
                    this.popupflag = !this.popupflag;

                })
        }
    }
}
</script>

<style>

</style>