<script>

import axios from 'axios';
import cards from './cards.vue';
import store from '../store';

export default {

    components:{
        cards,
    },

    data() {
        return {

            cards: [],
            store,
        }
    },
    created(){
        this.fetchCards()
    },
    methods:{
        fetchCards(){
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=20')
            .then ((res) => {
                this.store.cards = res.data.data
            })
        }
    }
}
</script>

<template>
    <div class="frame">
        <select class="my-3" name="cardtype" id="select"></select>
        <div class="container">
            <div class="totcard bg-dark text-uppercase text-white"> found {{ store.cards.length }} cards</div>
            <div class="cards d-flex flex-wrap justify-content-between">
                <cards v-for="element in store.cards" 
                :key="index"
                :card="element">
                </cards>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@use '../style/partials/variables';

.frame{
    background-color: variables.$bg-main;
   
    .container{
        background-color: variables.$bg-dark;
        padding: 2rem;

        .totcard{
           width: 100%;
           padding: 0.5rem 1.5rem;
        }
    }
}

#select{
    width: 100px;
    margin-left: 3.7rem;
    border: none;
    background-color: variables.$bg-dark;

    &:hover{
        transform: scale(1.05);
    }
}

</style>
