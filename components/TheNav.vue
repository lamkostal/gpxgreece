<template>
  <nav>
    <ul @mouseleave="submenuOpen = false">
      <li @mouseenter="submenuOpen = false">
        <NuxtLink to="/" exact="true">ΑΡΧΙΚΗ</NuxtLink>
      </li>
      <li @mouseenter="submenuOpen = true" >ΜΟΝΤΕΛΑ <span class="submenu-toggle" :class="{'rotate-caret' : submenuOpen}"><img src="~/assets/img/caret.svg" alt=""></span></li>
      <transition appear="true">
        <div
          class="models_submenu_container"
          v-show="submenuOpen"
          @mouseleave="submenuOpen = false"
        >
          <div class="models_submenu_item" @click="submenuOpen = false">
            <NuxtLink to="/bikes/popz">
            <img src="~/assets/img/Popz-side-thumb.png" alt="popz-thumbnail">
            <span>POPZ</span>
            </NuxtLink>
          </div>
          <div class="models_submenu_item" @click="submenuOpen = false">
            <NuxtLink to="/bikes/rock">
            <img src="~/assets/img/Rock-side-thumb.png" alt="rock thumbnail">

            <span>ROCK</span>
            </NuxtLink>
          </div>
        </div>
      </transition>
      <li @mouseenter="submenuOpen = false">
        <NuxtLink to="/dealers">ΑΝΤΙΠΡΟΣΩΠΟΙ</NuxtLink>
      </li>
      <li @mouseenter="submenuOpen = false">
        <NuxtLink to="/contact">ΕΠΙΚΟΙΝΩΝΙΑ</NuxtLink>
      </li>
      <li @mouseenter="submenuOpen = false">
        <NuxtLink to="/about">ΣΧΕΤΙΚΑ</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      submenuOpen: false,
    };
  },
};
</script>

<style scoped>
img{
  max-width: 100%;
}
li {
  position: relative;
  color: var(--gray-9);
  padding: 00px 25px 15px;
  cursor: pointer;
  font-size: var(--font-size-2);
}
.submenu-toggle {
  position: absolute;
  width: 20px;
  height: 20px;
  top:2.5px;
  right:2px;
  transform: scale(0.6) ;
  transition:all 0.4s ease;
  
}
.rotate-caret{
  transform: scale(0.7) rotate(90deg);
  transform-origin: center;
}
li:hover,
a:hover {
  color: var(--indigo-6);
}
a {
  color: var(--gray-9);
  text-decoration: none;
}
a:focus,a:active {
  color: var(--indigo-9);
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
   color: var(--indigo-9);
}
ul {
  padding: 0;
  margin-top: 15px;
  list-style: none;
}
nav {
  margin: 0 auto;
}
nav > ul {
  display: flex;
}
.models_submenu_container {
  position: absolute;
  top: 3.8em;
  left: 0;
  background: var(--gray-1);
  width: 100%;
  height: auto;
  display: flex;
  padding: 5px 0;
  justify-content: center;
  gap: 10px;
  transform: translateY(0px);
  z-index: 0;
  
}
/* @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap'); */

.models_submenu_item span{
  font-size: var(--font-size-1);
  position:absolute;
  top:5px;
  left:10px;
  /* font-family: 'Fredoka One', cursive; */
}
.models_submenu_item {
  position: relative;
  text-align: center;
  width: 120px;
  height: 50px;
  }

 
/* transition */

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter,
.v-leave-to {
  opacity: 0 ;
  transform: translateY(-5px);
}
</style>