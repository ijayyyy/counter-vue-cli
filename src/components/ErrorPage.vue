<template>
    <center>
    <div class="error">
    <div class="error-container">
        <h1>404 Error!</h1>
        <p class="oops">Oooops, it seems you are lost..</p>
        <router-link to="/">Go to Home Page</router-link>
    </div>
    </div>
    </center>
    
</template>

<script>
export default {
    
}
</script>

<style>
.error {
    height: 100vh;
    color: #222;
    z-index: 1000;
  }
  .error-container {
    padding: 100px;
  }
  .oops {
    padding: 30px;
  }
</style>