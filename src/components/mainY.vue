<script >
 export default {
    data() {
      return {
      }
    }
    
  }
</script>

<template>
    <div class="frame">
        <select class="my-3" name="cardtype" id="select"></select>
        <div class="container">
            <div class="totcard bg-dark text-uppercase text-white">found ... cards</div>
        </div>
    </div>
  
</template>


<style lang="scss">
@use '../style/partials/variables';

.frame{
    background-color: variables.$bg-main;
    max-width: 1400px;
   
    .container{
        background-color: variables.$bg-dark;
        height: 1000px;
        padding: 2rem;

        .totcard{
           width: 100%;
           padding: 0.5rem;
        }
    }
}

#select{
    width: 100px;
    margin-left: 8.3rem;
    border: none;
    background-color: variables.$bg-dark;

    &:hover{
        transform: scale(1.05);
    }
}

</style>
