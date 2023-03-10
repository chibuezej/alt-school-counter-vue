<template>
  <section>
    <div class="counter">
        <h1>Counter: {{ counter }}</h1>
        <button class="btn" @click="increament">Increasement</button>
        <button @click="decreament">Decrement</button>
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
  position: relative;
    padding: 30px;
    margin: 50px;
  }
  h1{
    color: #fff;
    

  }
}
</style>