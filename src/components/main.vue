<template>
<div>
    <div>Welcome, {{name}}</div>
    <button @click="logout">logout</button>
    <hr/>
    Поиск<br/>
    <input type="checkbox" name="option1" value="artist" v-model="type"  @change="find">Артисты<br/>
    <input type="checkbox" name="option2" value="manager" v-model="type"  @change="find">Менегеры<br/>
    <!-- <input type="range" min="18" max="90" id="age" v-model="age" oninput="sizePic()" value="18"> {{age}} -->
    <!-- <button @click="find" >найти</button> -->
        <ul id="example-1">
            <li v-for="item in searchResult" :key="item._id"
            class="li-wrapper"
            :data-id="item._id" 
            :data-item="item" 
            @click="showMiniDesciption">
                Name: {{ item.name }}
                <!-- _ID: {{item._id}} -->
            </li>
        </ul>
    <hr/>
    <div v-if="MiniDesciptionShow">
        name:{{MiniDesciption.name}}<br/>
        Type:{{MiniDesciption.type}}<br/>
        email:{{MiniDesciption.email}}<br/>
        <!-- createdAt:{{MiniDesciption.createdAt}}<br/> 
         updatedAt:{{MiniDesciption.updatedAt}} <br/> -->
         <button :data-id="MiniDesciption._id"  @click="routeToUserCart">more</button>
    </div><p v-else> chose user.....</p>
    <!-- {{ JSON.stringify(MiniDesciption, true, 4)}} -->
    <hr/>



</div>
</template>

<script>
import axios from 'axios';

export default {
    name:'main',
    data(){
        return{
            name: '',
            age: "18",
            email: '',
            searchResult: '',
            type: [],
            MiniDesciption: {},
            MiniDesciptionShow: false,
        }
    },
    created(){
        if (localStorage['token']==null){
            this.$router.push('/error_access');
        }
    },
    beforeMount(){
        console.log('beforeMount');
        axios.get('http://'+document.domain+':5000/user',{ headers: {token:localStorage['token']}  })
            .then(res=>{
                this.name=res.data.user.firstName;
            },err=>{
                console.log(err);
            });
    },
    methods: {
        routeToUserCart(test){
            const ide = test.target.dataset.id;
            this.$router.push('/user/'+ide);
            // this.$router.push({name:'user', query:{'user':ide} });
            // console.log(ide);

        },
        showMiniDesciption(test){
            console.log('lenght'+this.MiniDesciption.length);
            const ide = test.target.dataset.id;
            // const item = test.target.dataset.item;
            // this.MiniDesciption = this.searchResult[ide];
            // console.log(MiniDesciption);
            let inputs = {name:1,type:1,email:1,_id:1};


            axios.get('http://'+document.domain+':5000/userDescription',{ headers: {token:localStorage['token'],  id:ide, inputs}   })
            .then(res=>{
                if (res.status==200){
                        // console.log(res.data.user);
                        this.MiniDesciption=res.data.user;
                        this.MiniDesciptionShow = true;
                        console.log(res.data.user);
                    }
            },err=>{
                console.log(err);
            });
            console.log('lenght'+this.MiniDesciption.length);
            
        },
        logout( ){
            localStorage.removeItem('token');
            this.$router.push('/');
        },
        find( ){
            // console.log('filters');

            let filters = {
                type: this.type
            };


            axios.post('http://'+document.domain+':5000/getUsers', { token:localStorage['token'], filters})
                .then(res=>{
                    if (res.status==200){
                        this.searchResult = res.data.result;
                    }
                    console.log(res.data.result);
                }, err=>{
                    console.log(err.response);
                })

        }
    }
}
</script>

<style>
.li-wrapper{
    padding: 2px;
    margin: 5px;
    border:1px solid black;
    list-style-type: none;
    transition: .15s;
}
.li-wrapper:hover{
    transform: scale(1.02); 
    box-shadow: 2px 2px 1px rgba(0,0,0,0.5);
}
</style>