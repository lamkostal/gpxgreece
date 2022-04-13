<template>
<div class="wrapper"> 
  <header class="head">
    <section aria-label="hero" class="hero ">
     
      <img src="~/assets/img/popz-white.webp" alt="" class="hero_side_img hero_popz_img">
      <img src="~/assets/img/rock-black.webp" alt="" class="hero_side_img hero_rock_img">
      <img src="~/assets/img/GPX-HP-header.jpg"  alt="" class="hero_img">

      <h1>Καλως ήρθατε στην GPX</h1>
    </section>
  </header>
  <main class="container-fluid">
    <section class="intro">
      <div class="opaque"></div>
      <div class="intro-content container">
         <div class="text-content">
           <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit explicabo animi corporis iure expedita velit suscipit perferendis impedit laborum blanditiis.</p>
         </div>
         <div class="imgs-content">

         </div>
      </div>
     
     
    </section>
    <section aria-label="popz-intro" class="bike-intro popz-intro">
        <div class="grid container">
          <div class="bike-info popz-info">
            <h2>Popz 125</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam ad repellendus maiores provident! Officia perferendis.
            </p>
            <nuxt-link to="/bikes/popz" class="btn">ΔΕΣ ΤΟ ΑΝΑΛΥΤΙΚΑ</nuxt-link>
          </div>
          <div class="img-pop img-pop1">
            <img src="~/assets/img/popz/poz-HP-white.jpg" alt="">
          </div>
          <div class="img-pop img-pop2">
            <img src="~/assets/img/popz/popz-HP-recolour.jpg" alt="">
          </div>
          <div class="img-pop img-pop3">
            <img src="~/assets/img/popz/poz-HP-sq.jpg" alt="">
          </div>

        </div>

    </section>
    <section aria-label="rock-intro" class="bike-intro rock-intro">
      <div class="grid container">
           <div class="img-rock img-rock1">
            <img src="~/assets/img/rock/rock-HP1.jpg" alt="">
          </div>
          <div class="bike-info rock-info">
            <h2>Rock 125</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam ad repellendus maiores provident! Officia perferendis, reprehenderit assumenda 
            </p>
            <nuxt-link to="/bikes/rock" class="btn">ΔΕΣ ΤΟ ΑΝΑΛΥΤΙΚΑ</nuxt-link>
          </div>
         
          <div class="img-rock img-rock2">
            <img src="~/assets/img/rock/rock-HP2.jpg" alt="">
          </div>
          <div class="img-rock img-rock3">
            <img src="~/assets/img/rock/rock-HP3.jpg" alt="">
          </div>


        </div>
    </section>
    <section aria-label="dealers-intro" class="dealers-intro">
      <div class="container dealers-info">
        <h2>Βρες έναν αντιπρόσωπο</h2>
        <h3>Αναζήτησε στο δίκτυο μας τον πλησιέστερο αντιπρόσωπο στην περιοχή σου.</h3>
        <div class="map-img">
          <nuxt-link to="/dealers"><img src="~/assets/img/map-mockup.jpg" alt=""></nuxt-link>
        </div>
        <nuxt-link to="/dealers" class="btn">
          δες το χαρτη
        </nuxt-link>
      </div>
    </section>
  </main>
</div>

</template>

<script>
export default {
  transition: 'fade',

  
}
</script>

<style scoped>

section{
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  
}
main>section:nth-child(even){
  background: var(--gray-2);
}
h1{
  position:absolute;
  width:100%;
  bottom: 0;
  color:var(--gray-1);
  transform: translateY(-50px);
  text-align: center;
}
.hero_side_img{
  position: absolute;
  z-index: 3;
  top:100px;
  width:700px
}
.hero_popz_img{
  left:-60px
}
.hero_rock_img{
  right: -60px;
}
.intro {
  background-image: url(~/assets/img/intro1.jpg);
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
.opaque{
  position: absolute;
  top:0;
  width:100%;
  height: 100vh;
   background: linear-gradient(var(--gray-9),var(--gray-0));
  opacity: 0.8;
}
.intro-content{
  position: relative;
 z-index: 1;
 display: grid;
 grid-template-columns: 1fr 1fr ;
 justify-content:center ;
 align-content:center ;
}
.intro h2{
  font-size: var(--font-size-3);
}
.grid{
  grid-gap:10px;
  display: grid;
  grid-template-columns:auto auto;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  /* align-items: center; */

  
}
section.bike-intro{
  min-height: 100vh;
}
.bike-info{
 align-self: self-start;
}
.bike-info h2{
  margin-top: 0;
}

.bike-info p{
 max-width: 40ch;
}

.img-pop, .img-rock{
  box-shadow: 5px 5px 20px 2px rgba(128, 128, 128, 0.403);
  position: relative;
  display: flex;
}

:is(.img-pop, .img-rock) img  {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.img-pop1{
  transform: translateY(0px) translateX(-50px);
  /* background: rgb(32, 63, 201); */
   width:500px;
  height: 420px;
  z-index: 1;
}
.img-pop2{
  transform: translateY(-80px) translateX(30px);
    width:600px;
  height: 400px;
  /* background: red; */
  z-index: 2;
}
.img-pop3{
   width:400px;
  height: 420px;
  transform: translateY(25px) translateX(20px);
  /* background: yellow; */
  z-index: 2;

}

.img-rock1{
  transform: translateY(0px) translateX(0px);
  background: rgb(32, 63, 201);
   width:620px;
  height: 400px;

}
.img-rock2{
  transform: translateY(0px) translateX(-50px);
    width:500px;
  height: 350px;
  background: red;

}
.img-rock3{
  transform: translateY(-120px) translateX(-80px);
  background: yellow;
   width:550px;
  height: 450px;

}

.dealers-info{
  padding: 0 4em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap:10px;
}
.dealers-info h3{
  max-width: 50ch;
  margin-top: 0;
  line-height: 1.7;
}
.dealers-info h2{

  margin-bottom: 0;
}
.dealers-info .btn{
  flex-basis: 50%;
  margin-top:1em;
  
}
.map-img img {
   box-shadow: var(--shadow-5);
}
section.dealers-intro{
  min-height: 100vh;
  
}
</style>
