<script>
     export default {
    data() {
      return {
      }
    }
    
  }
</script>

<template>

    <header>
        <div class="d-flex align-items-center">
            <img class="ms-3" src="../../img/logo.png" alt="logo">
            <h1>
                Yu-Gi-Oh Api
            </h1>
        </div>

    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables';
    
    header{
        background-color: variables.$bg-dark;

        img{
            width: 10%;
        }

        h1{
            text-align: center;
            font-size: 3rem;
            color: white;
            padding: 0.7rem;
            margin: 0;
    }
}
    
</style>