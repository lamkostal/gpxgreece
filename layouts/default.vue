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
    font-family: 'Commissioner', sans-serif;
  background-color: var(--gray-0);

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
section{
   padding: 3.5em 0;
}
section.hero{
  display: flex;
  margin-top:0;
  padding: 0;
  position: relative;
}
section.hero .hero_img{
   object-fit: cover;
   width:1900px;
   height:650px;
}
h1,h2{
  color: var(--gray-7);
}
h1{
  text-align:center;
   font-size: var(--font-size-5);
}
h2{
  font-size: var(--font-size-6);
}
h3,h4{
  color: var(--gray-6);
  font-weight: normal;
}
.btn{
  text-align: center;
  position: relative;
  font-weight: var(--font-weight-1);
  display: inline-block;
  margin-top: 5px;
  text-decoration: none;
  background: var(--blue-7);
  color:var(--gray-0);
  padding:15px 20px;
  transition:all 0.3s ease;
  text-transform: uppercase;
}
.btn:after{
  content:url(~/assets/img/caret.svg);
  width:12px;
  position: absolute;
  top:015px;
  opacity:0;
  transition:all 0.3s ease;
  right:12px;


  
}
.btn:hover{
  
  background: var(--blue-5);
  padding:15px 35px 15px 20px;
  
}
.btn:hover::after{
  opacity: 1;
  /* transform: translateX(-15px); */
  right:12px;


  
}

</style>