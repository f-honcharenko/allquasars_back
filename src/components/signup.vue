<template>
 <div id="pageWrapper" class="page__wrapper">
    <link rel="stylesheet" href="/styles/signup.css">
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
                    Создайте аккаунт <a class="form__headering-a" href="landing.html">Allquasars</a>
        
                </div>
                <div class="form__container">
                   <form  v-on:submit.prevent="signup">

                    <!-- АРТИСТ / ЗАКАЗЧИК -->
                    <div class="form__type">
                        <button id="artistBtn" type="button" :class="{ 'form__type-btn--clicked': personType }" @click="personType = true" class="form__type-btn">Артист</button>
                        <button id="employerBtn" type="button" :class="{ 'form__type-btn--clicked': !personType }"  @click="personType = false" class="form__type-btn">Заказчик</button>
                    </div>
                    <span class="form__bio-text">Персональные данные</span>

                    <!-- ИМЯ / ФАМИЛИЯ -->
                    <div class="form__bio">
                        <span id="nameWrapper" :class ="{ 'form__clue--clicked':inputNameComp}" class="form__bio-wrap form__clue" data-placeholder="Имя">
                            <input id="inputName" required  v-model="firstName" @focus="inputName = true" @blur="inputName = false"  class="form__bio-input" type="text" autocomplete="off" />
                        </span>
                        <span id="surnameWrapper" :class ="{ 'form__clue--clicked':inputSurnameComp }"  class="form__bio-wrap form__clue" data-placeholder="Фамилия">
                            <input id="inputSurname" required v-model="lastName" @focus="inputSurname = true" @blur="inputSurname = false"  class="form__bio-input" type="text" autocomplete="off" />
                        </span>
                    </div>

                    <!-- С ДНЕМ РОЖДЕНИЯ -->
                    <div class="form__age">
                        <span id="dateWrapper" :class ="{ 'form__clue--clicked':inputDateComp }" class="form__age-wrap form__clue" data-placeholder="Дата рождения">
                            <input id="inputDate" required v-model="date" @focus="inputDate = true" @blur="inputDate = false" class="form__age-input" type="date" name=""/>
                        </span>
                    </div>
                    <span class="form__bio-text">Системные данные</span>
                    
                    <!-- ПОЧТА -->
                    <div class="form__mail">
                        <span id="mailWrapper" :class ="{ 'form__clue--clicked':inputMailComp }" class="form__mail-wrap form__clue" data-placeholder="Почта">
                            <input id="inputMail" required v-model="email" @focus="inputMail = true" @blur="inputMail = false" class="form__mail-input" type="email"/>
                        </span>
                    </div>

                    <!-- ПАРОЛЬ / ПОДТВЕРЖДЕНИЕ ПАРОЛЯ -->
                    <div class="form__password">
                        <span id="passwordWrapper" :class ="{ 'form__clue--clicked':inputPasswordComp }" class="form__password-wrap form__clue" data-placeholder="Пароль">
                            <input id="inputPassword" minlength='8' v-model="password" @focus="inputPassword = true" @blur="inputPassword = false" class="form__password-input" type="password"  autocomplete="off"/>
                        </span>
                        <span id="passwordcheckWrapper" :class ="{ 'form__clue--clicked':inputPassworCheckComp }" class="form__password-wrap form__clue" data-placeholder="Подтверждение">
                            <input id="inputPassworCheck" minlength='8' v-model="passwordCheck" @focus="inputPassworCheck = true" @blur="inputPassworCheck = false" class="form__password-input" type="password"  autocomplete="off"/>
                        </span>
                    </div>

                    <!-- УСЛОВИЯ -->
                    <div class="form__term">
                        <span id="termWrapper" class="form__term-wrap">
                            <input class="form__term-input" type="checkbox" name="" id="inputTerm">
                        </span>
                        <span class="form__term-message">
                            Я соглашаюсь с <a class="form__term-a" href="#">правилами</a> пользования.
                        </span>
                    </div>

                    <!-- КАПЧА -->
                    <div class="form__captcha">
                        <span id="captchaWrapper" class="form__captcha-wrap">
                            
                        </span>
                    </div>

                    <!-- ВОЙТИ / РЕГИСТРАЦИЯ -->
                    <div class="form__submit">
                        <span class="form__submit-wrap">
                            <a class="from__submit-a" href="/login">Войти</a>
                        </span>
                        <span class="form__submit-wrap">
                            <button id="buttonSubmit" class="from__submit-btn" @submit="signup" type="submit">Зарегестрироваться</button>
                        </span>
                    </div>
                    </form >
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
import axios from 'axios';
// import func from '../../vue-temp/vue-editor-bridge';
// import func from '../../vue-temp/vue-editor-bridge';
export default {
    name:'signup',
    data() { 
        return {
            inputDate:false,
            inputMail:false,
            inputPassword:false,
            inputPassworCheck:false,
            inputSurname:false,
            inputName:false,
            personType:false,
            firstName: '',
            lastName: '',
            email: '',
            type: '',
            date: '',
            password: '',
            passwordCheck:'',
            popupflag:false,
            popupTitle:'Упс',
            error:'',
            test1:'heelo',
        }
    },
    computed: {
        inputNameComp:function(){if ((this.inputName)||(!this.firstName=='')){return true}else{return false}},
        inputSurnameComp:function(){if ((this.inputSurname)||(!this.lastName=='')){return true}else{return false}},
        inputMailComp:function(){if ((this.inputMail)||(!this.email=='')){return true}else{return false}},
        inputDateComp:function(){if ((this.inputDate)||(!this.date=='')){return true}else{return false}},
        inputPasswordComp:function(){if ((this.inputPassword)||(!this.password=='')){return true}else{return false}},
        inputPassworCheckComp:function(){if ((this.inputPassworCheck)||(!this.passwordCheck=='')){return true}else{return false}},
        TypeComp:function(){if(this.personType){return 'artis'}else{return 'manager'}},
    },
    mounted(){
        document.title ='Allquasars: Sign Up';
        axios.get('http://'+document.domain+':5000/user',{ headers: {token:localStorage['token']}  })
            .then(()=>{
                this.$router.push('/main');
            },()=>{
                console.log('UNAUTHORIZED');
            });
    },
    methods: {
        popupToggle() {
            this.popupflag = !this.popupflag;
        },
        signup() {
            let newUser = {
                firstName: this.firstName,
                lastName: this.lastName,
                date: this.date,
                email: this.email,
                type: this.TypeComp,
                password: this.password
            };
            
            if (newUser.firstName == '' ||
                newUser.lastName == '' ||
                newUser.date == '' ||
                newUser.email == '' ||
                newUser.type == '' ||
                newUser.password == '' ||
                this.passwordCheck == '') {
                    this.popupTitle = 'Упс.';
                    this.error = 'Заполните все поля!';
                    this.popupflag = !this.popupflag;
            } else {
                if (!(this.passwordCheck == this.password)) {
                    this.popupTitle = 'Упс.';
                    this.error = 'Пароли не совпадают!';
                    this.popupflag = !this.popupflag;
                } else {
                    console.log(this.passwordCheck,'=',this.password);
                    axios.post('http://' + document.domain + ':5000/signup', newUser)
                        .then(res => {
                            console.log(res);
                            this.popupTitle = 'Ура!';
                            this.error = 'Вы успешно зарегестрировались!';
                            this.popupflag = !this.popupflag;
                            setTimeout(() => {
                                this.$router.push('/login')
                            }, 3000);
                        }, err => {
                            // console.log(err.response.data.message.message);
                            // alert('Error: '+ err.response.data.message.message);
                            console.log('Error: ' + err.response.data.message);
                            this.popupTitle = 'Упс.';
                            this.error = err.response.data.message;
                            this.popupflag = !this.popupflag;
                        });
                }
            }

        }
    }
}

</script>
