<script>
    export default {
        props:{
            card:{
                type: Object,
                required: true
            }
        }
    }
</script>

<template>
    <div class="cards">
        <img class="mb-3" :src="card.card_images[0].image_url" alt="">
        <h3>{{ card.name }}</h3>
        <p class="description">{{ card.archetype }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables';

    .cards{
        background: variables.$bg-main;
        width: calc(100% / 5 - 0.5rem);
        margin-bottom: 0.5rem;
        border: 1px solid black;

        &:hover{
            transform: scale(1.3);
        }
    }

    img{
        width: 100%;
    }

    h3,
    .description{
        text-align: center;
        font-size: 1rem;
        color: white;
    }
    
</style>