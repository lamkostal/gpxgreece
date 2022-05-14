<template>
  <transition name="fade">
    <nav id="mobile-nav" v-show="menuOpen">
      <ul>
        <li class="nav-item" @click="toggleMenu">
          <NuxtLink to="/" >ΑΡΧΙΚΗ</NuxtLink>
        </li>
        <li class="nav-item" >
          <span>ΜΟΝΤΕΛΑ</span>
          <ul class="sub-nav">
              <li  @click="toggleMenu" class="sub-nav-item"> <NuxtLink to="/bikes/popz">Popz</NuxtLink></li>
              <li  @click="toggleMenu" class="sub-nav-item"> <NuxtLink to="/bikes/rock">Rock</NuxtLink></li>
          </ul>
        </li>
        
        <li @click="toggleMenu" class="nav-item" >
          <NuxtLink to="/dealers">ΑΝΤΙΠΡΟΣΩΠΟΙ</NuxtLink>
        </li>
        <li @click="toggleMenu" class="nav-item">
          <NuxtLink to="/contact">ΕΠΙΚΟΙΝΩΝΙΑ</NuxtLink>
        </li>
        <li @click="toggleMenu" class="nav-item" >
          <NuxtLink to="/about">ΣΧΕΤΙΚΑ</NuxtLink>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script>
export default {
  props:['menuOpen'],
  data() {
    return {
     
    };
  },
  methods:{
   toggleMenu(){
     this.$emit('toggledbylist')
   }
  },
  
};
</script>

<style scoped>

#mobile-nav{
  position: fixed;
  width: 100%;
  height: 100vh;
  top:0px;
  z-index: -1;
  background:var(--gray-9);
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width:1024px){
  #mobile-nav{
  display: none;
}
}
#mobile-nav>ul{

  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.nav-item{
  position: relative;
  color: var(--gray-0);
  padding-bottom: 3rem;
  line-height: 0.9;
  cursor: pointer;
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-4);
}
.sub-nav{
 text-align: right;
}
.sub-nav-item{
  padding-top: 1.5rem;
  font-size: var(--font-size-2);
}

.fill-caret-svg {
  fill: var(--blue-9);
}
li:hover,
a:hover {
  color: var(--blue-9);
}
a {
  color: var(--gray-1);
  text-decoration: none;
}
a:focus,
a:active {
  color: var(--blue-9);
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: var(--blue-9);
}

nav {
  margin: 0 auto;
  height: 100%;
}



/* transition */


.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease-out;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>