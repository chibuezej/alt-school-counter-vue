<template>
  <div class="about-page">
    <section class="about">
      <div class="about-text container">
        <h2 class="header">About Me</h2>
        <h4>Nmeregini Johnhenry</h4>
        <hr />
        <h2>
          FRONT-END <br />
          DEVELOPER
        </h2>
        <hr />
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
    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }
    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
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
}
</style>