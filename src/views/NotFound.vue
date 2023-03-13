<template>
  <body>
    <img class="ufo1" src="../assets/img/ufo.png" alt="" />
    <img class="ufo2" src="../assets/img/ufo2.png" alt="" />

    <div class="starsBG">
      <div class="container">
        <div class="main"> 
          <h1 class="head">4</h1>
          <img class="saturn" src="../assets/img/earth.png" alt="" />

          <h1 class="head">4</h1>
        </div>
        <div class="main2">
          <p>OH! You're lost.</p>
          <router-link to="/"><button>RETURN TO HOME</button></router-link>
          
        </div>
      </div>
    </div>
    
  </body>
   
</template>

<style lang="scss" scoped>
@keyframes slideInLeft {
  from{
transform: translateX(-500px);
  }
  to{
transform: translateX(0)
  }
}
body{
  overflow: hidden;
  font-family: 'Gemunu Libre', sans-serif;
  .starsBG{
    background: #0000 url(../assets/hero-bg.png) repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    z-index: 0;
     @media (max-width: 1450px) {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: auto;
      }

    .container {
      width: 1200px;
      margin: 0 auto;

      h1{
      font-size: 250px;
      color: #fff;
      margin-left: 30px;
      margin-right: 50px;
      text-shadow: 0 1px 0 #00afea, 0 2px 0 #00afea, 0 3px 0 #00afea, 0 4px 0 #00afea, 0 5px 0 #00afea, 0 6px 0 #00afea, 0 7px 0 #00afea, 0 8px 0 #00afea, 0 0 5px #8a6dd400, 0 -1px 3px #8a6dd445, 0 9px 9px #8a6dd452, 0 12px 12px #8a6dd452, 0 15px 15px #8a6dd44d;
      @media (max-width: 1450px) {
        font-size: 100px;
        margin: auto;
      }
    }
    .saturn {
    width: 300px;
    margin-top: 5px;
    @media (max-width: 1450px) {
      width: 150px;
    }
    }
    .main{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60vh;
    }
  }
  .main2{
    text-align: center;

     p{
      color: #fff;
      font-size: 50px;
      margin: 0 0 30px;
      letter-spacing: 8px;
      font-family: 'Open Sans', sans-serif;
    }
     button{
      background: #00afea;
      color: #fff;
      padding: 10px;
      width: 220px;
      border-radius: 50px;
      cursor: pointer;
      font-size: 17px;
    }
     button:hover{
      border-radius: 5px;
    }
    
  }
  
}
.ufo1 {
	position: absolute;
    top: 70px;
	z-index: 9;
    width: 100px;
	-webkit-animation: ufo1 20s linear infinite;
	-moz-animation: ufo1 20s linear infinite;
	-o-animation: ufo1 20s linear infinite; 
   @media (max-width: 1450px) {
      width: 50px;
      z-index: 5;
      	-webkit-animation: ufo1 none ;
	-moz-animation: ufo1 20s none ;
	-o-animation: ufo1 20s none ; 
   animation: slideInLeft 5s ease-in;
    }
}

}
@-webkit-keyframes ufo1 {
	0% {
		margin-left:1400px;
 
	}
	100% {
		margin-left: -1000px;
	}
}

.ufo2 {
	position: absolute;
  overflow: none;
    bottom: 80px;
	z-index: 9;
    width: 90px;
	-webkit-animation: ufo2 20s linear infinite;
	-moz-animation: ufo2 20s linear infinite;
	-o-animation: ufo2 20s linear infinite;
   @media (max-width: 1450px) {
      width: 50px;
      z-index: 5;
      	-webkit-animation: ufo1 none ;
	-moz-animation: ufo1 20s none ;
	-o-animation: ufo1 20s none ; 
  animation: slideInLeft 5s ease-in;
    }
}

@-webkit-keyframes ufo2 {
	0% {
		margin-left:-1400px;
	}
	100% {
		margin-left: 2000px;
	}
}
</style>