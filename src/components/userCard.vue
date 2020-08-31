<template>
<div>
                  <div class="result__item">
                    <div class="result__wrapper">
                      <div class="result__content">
                        <div class="result__picture">
                          <!-- аватар чела -->
                          <img src="images/main/test5.jpg" alt="avatar" />
                        </div>
                        <div class="result__info">
                          <div class="result__nickname">
                            <!-- никнейм или же логин чела -->
                            <span class="result__info-nickname">{{nickname}}</span>
                          </div>
                          <div class="result__info-short">
                            <div class="result__name">
                              <!-- имя чувака -->
                              <span class="result__info-name">{{firstName}} {{lastName}}</span>

                              <!-- возраст и страна -->
                              <span class="result__info-agecountry">{{age}}, {{country}}</span>
                            </div>
                            <div class="result__filter">
                              <!-- главный вид деятельности -->
                              <span class="result__info-filter">
                                <span>{{prof}}</span>
                              </span>
                            </div>
                          </div>

                          <!-- текст о себе -->
                          <div class="result__info-more">
                              {{description}}
                          </div>
                          <div class="result__btn">
                            <button>Подробнее</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
</div>
</template>

<script>

export default {
    name:'userCard',
    data(){
        return{
            user :{}
        }
    },
    props:['description', 'age', 'country','firstName','lastName','nickname','prof'],
    beforeMount(){

    },
    
    methods:{

    }
}    
</script>

