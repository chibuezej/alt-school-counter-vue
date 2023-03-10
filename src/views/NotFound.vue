<template>
    <div class="error">
        <h2 class="error-text">Not found</h2>
    </div>
    
</template>

<style lang="scss" scoped>
.error {
  background-image: url("../assets/hero-bg.png");
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .error-text {
    height: 100%;
    display: flex;
    text-transform: uppercase;
      font-size: 22px;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }
  }
}
</style>