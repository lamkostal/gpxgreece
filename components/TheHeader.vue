<template>
  <header :class="{scrolled:scrolled}">
    
    <nuxt-link to="/"
      ><div class="logo-container" :class="{logoScrolled:scrolled}">
        <img src="/GPX-logo.png" alt="GPX - Greece" /></div
    ></nuxt-link>
    <the-nav />
    <mobile-nav  :menuOpen="menuOpen" v-on:toggledbylist="menuOpen =!menuOpen"/>
    <hamburger v-on:toggle="menuOpen =!menuOpen"/>

    <div class="social-wrap">
      <a href="https://www.facebook.com/GPX-Greece-101019009531098/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
      

</svg></a>
<svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="4" />
  <circle cx="12" cy="12" r="3" />
  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
</svg>
<a href="https://www.youtube.com/@gpxgreece">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="4" />
  <path d="M10 9l5 3l-5 3z" />
</svg></a>
    </div>
  </header>
</template>

<script>
import Hamburger from './Hamburger.vue';
import MobileNav from './MobileNav.vue';
export default {
  components: { MobileNav, Hamburger },
  data(){
    return {
      scrolled:false,
      menuOpen:false
    }},
    
 
 methods: {
  handleScroll () {
    this.scrolled = window.scrollY > 0;
  },
  
},
created(){
//  this.$on('toggle', () => {
//         this.menuOpen =!this.menuOpen;
//     })
},
beforeMount () {
  window.addEventListener('scroll', this.handleScroll);

},
mounted(){
  // this.$on('toggle', () => {
  //       this.menuOpen =!this.menuOpen;
  //   })

console.log("menu:"+this.menuOpen)

},
beforeDestroy () {
  window.removeEventListener('scroll', this.handleScroll);
}
};
</script>

<style scoped>

header {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10000;
    background: var(--gray-0);
  transition: all 0.25s ease;
  border-bottom:1px solid var(--gray-5);
  -webkit-backface-visibility: hidden;

}

.logo-container {
  display: flex;
  position: relative;
  z-index: 200000;
  width: 150px;
  transform: scale(1);
  transition: all 0.25s ease;
 
}
.scrolled{
  height: 50px;
}
.logoScrolled{
  /* width: 100px; */
  transform: scale(0.8);
}
.social-wrap{
  display: flex;
  padding-right: 4rem;
  align-items: center;
  gap:7px
}
@media (max-width:1024px){
  .social-wrap{
  display: none;
}
}
.social-wrap svg{
  width:24px
}
.social-wrap .icon-tabler-brand-youtube{
  width:27px;
  transform: translateY(2px);

}
</style>