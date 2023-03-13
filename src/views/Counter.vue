<template>
  <section>
    <div class="counter">
        <h1 class="header">Counter: {{ counter }}</h1>
        <div class="button">
          <button class="btn1" id="increament" @click="increament">Increasement</button>
        <button class="btn2"  id="decreament" @click="decreament">Decrement</button>
        </div>
        <button class="reset" @click="reset">Reset</button>
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
@keyframes slideInLeft {
  from{
transform: translateX(-500px);
  }
  to{
transform: translateX(0)
  }
}
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
    animation: slideInLeft 1s ease-in;
    animation-delay: 1s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    transform: translateX(-500px);
  }
.button{
  display: block;
 
  
    #increament,
    #decreament{
      font-size: 1rem;
  font-weight: 100;
  color: #00afea;
  background-color: #fff;
    margin: 10px;
    border-radius: 11px;
    transition:all 0.3s;

    &:hover{
      background-color: #00afea;
      color: #000;
    }
    }

  

}
.reset{
  width: 70px;
  object-fit: contain;
  height: 30px;
    font-size: 1rem;
    font-weight: 100;
    color: #00afea;
    border-radius: 8px;
    

    &:hover{
      transform: translateY(-5px);
      background-color: #00afea;
      color: #000;
      
    }
   }
.btn1{
  width: 110px;
  object-fit: contain;
    height: 60px;
    margin: 10px;
    border-radius: 11px;

    &:hover{
      transform: translateY(-10px);
      background-color: #00afea;
      color: #000;
      
    }
}
.btn2{
  width: 110px;
  object-fit: contain;
    height: 60px;
    margin: 10px;
    border-radius: 11px;

    &:hover{
      transform: translateY(-10px);
      background-color: #00afea;
      color: #000;
    }
}
}
</style>