<template>
  <div>
      <TheHeader/>
      <Nuxt/>
      <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
components:{
    TheFooter,
    TheHeader
}
}
</script>

<style>
*{
  box-sizing: border-box;
  /* position: relative; */
}
body{
  margin: 0;
  padding: 0;
   min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.container{
  width:1080px;
  margin-left: auto;
  margin-right: auto;
}
.container-fluid{
  width:100%;
}
main{
  
}
img{
  max-width: 100%;
}
section.hero{
  margin-top: 2.5rem;
  /* height: 40vh; */
  background: #000;
  object-fit: cover;
}


</style>