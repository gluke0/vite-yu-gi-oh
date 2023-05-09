<script>

import axios from 'axios';
import store from '../store';

export default {
    name: "searchCard",
    data(){
        return {
            store,
        }
    },
    created(){
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then ((res) => {
            store.searchArray = res.data
        })
    }
}
</script>

<template>
    <div class="d-flex justify-content-center">
        <select class="my-2 text-white p-1" name="search-card" id="select" v-model="store.search" @change="$emit('nomeEmit')">
            <option :value="elem.archetype_name" v-for="(elem, index) in store.searchArray" :key="index"> {{ elem.archetype_name }}</option>
        </select>

    </div>
</template>


<style lang="scss" scoped>
@use '../style/partials/variables';

#select{
    width: fit-content;
    border: none;
    background-color: variables.$bg-dark;

    &:hover{
        transform: scale(1.05);
    }
}
</style>

