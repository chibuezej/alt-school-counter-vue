<template>
  <div class="about-page">
    <section class="about">
      <div class="about-text container">
        <h2 class="header">About Me</h2>
        <h4><span>N</span>meregini <span>J</span>ohnhenry</h4>
        <hr />
        <h2>
          FRONT-END <br />
          DEVELOPER
        </h2>
        <hr />
        <div class="hero"> 
          <h2>Contact Me</h2>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/johnhenry-chibueze-b01ba41b3/"><i class="fa-brands fa-linkedin"></i></a>
         <a href=""><i class="fa-brands fa-instagram"></i></a>
         <a href=""><i class="fa-brands fa-twitter"></i></a>
         <a href=""><i class="fa-brands fa-github"></i></a>
          </div>
  
        </div>
      
      </div>
    </section>
  </div>
</template>


<script>

export default {
name: 'About',

}
</script>

<style lang="scss" scoped>

.about {
  background-image: url("../assets/hero-bg.png");
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  
  .about-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
  
    span{
      color: #00afea;
      transform: translateX(-180deg);
    }
    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }
    h2 {
      font-size: 50px;
      @media (max-width: 1450px) { 
        font-size: 40px;
      }
    }
    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
  .hero{
   
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .social-links{
    display: flex;
   
  }
    a{
      width: 80px;
      height: 80px;
      text-align: center;
      text-decoration: none;
      color: #000;
      box-shadow: 0 0 20px 10px rgba(0,0,0,0.05);
      margin: 0 30px;
      border-radius: 50%;
      position: relative;
    }
  .fa-brands{
      font-size: 30px;
      line-height: 80px;

      .fa-brands::after{
        content: '';
        top: -90px;
        left: 0;
        background: linear-gradient(-45deg, #ed1c94, #ffec17);
        position: absolute;
      }
    }
    
  
}
</style>