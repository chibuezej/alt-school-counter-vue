<template>
  <section>
    <div class="counter">
        <h1 class="header">Counter: {{ counter }}</h1>
        <div class="button">
          <button class="btn" @click="increament">Increasement</button>
        <button class="btn" @click="decreament">Decrement</button>
        </div>
        <button @click="reset">Reset</button>
    </div>
  </section>
</template>

<script>


export default {
 name: 'Counter', 
 
 computed: {
  counter(){
    return this.$store.getters.counter
  }
},
methods:{
    increament()
    {
        this.$store.dispatch('increament')
    },
    decreament(){
        this.$store.dispatch('decreament')
    },
    reset(){
        this.$store.dispatch('reset')
    },
   
}
}
</script>

<style lang="scss" scoped>
section{
  display: flex;
  align-items: center;
  background-image: url(../assets/hero-bg.png);
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  .counter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 206px;
    margin: 161px 553px;
    @media (max-width: 1450px) {
  
        padding: 0;
        margin: auto;
        overflow: hidden;
      }
  }
  h1{
    color: #fff;
  }
.button{
  display: block;
}
.btn{
  width: 102px;
    height: 60px;
    margin: 10px;
    border-radius: 11px;
}
}
</style>