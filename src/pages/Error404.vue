<template>
  <div class="error-page">
    <h1>404</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
  </div>
</template>

<script>
export default {
  name: 'Error404',
}
</script>

<style>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 10rem;
  margin: 0;
}

p {
  font-size: 2rem;
  margin: 2rem 0 0 0;
}
</style>
