<template>
<div>
    <h1>userCard</h1>
    <div>
        name:{{user.name}}<br/>
        Type:{{user.type}}<br/>
        email:{{user.email}}<br/>
        createdAt:{{user.createdAt}}<br/> 
        updatedAt:{{user.updatedAt}} <br/>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name:'userCard',
    data(){
        return{
            user :{}
        }
    },
    beforeMount(){
        let ide = this.$route.params.id;//ИД пользователя, инфу которого нужно получить
        // let inputs = {name:1,type:1,email:1,_id:1};
        let inputs = {};//Поля которые нужно получить. {} => all info

        axios.get('http://192.168.1.9:5000/userDescription',{  headers: {token:localStorage['token'],  id:ide, inputs}  })
            .then(res=>{
                if (res.status==200){
                        // console.log(res.data.user);
                        this.user=res.data.user;
                    }
            },err=>{
                console.log(err);
            });

    },
    
    methods:{

    }
}    
</script>

