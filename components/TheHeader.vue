<template>
  <header>
    <nuxt-link to="/"
      ><div class="logo-container">
        <img src="/GPX-logo.png" alt="gpx-logo" /></div
    ></nuxt-link>
    <the-nav />
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  padding: 1em 10em;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.logo-container {
  position: relative;
  z-index: 2;
  width: 150px;
  margin-top: 15px;
}
</style>