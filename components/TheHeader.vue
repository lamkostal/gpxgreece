<template>
  <header>
    <nuxt-link to="/"
      ><div class="logo-container">
        <img src="/logo@2x.png" alt="gpx-logo" /></div
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
  width: 120px;
  transform: translateY(-5px);
}
</style>