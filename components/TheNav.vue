<template>
  <nav>
    <ul @mouseleave="submenuOpen = false">
      <li @mouseenter="submenuOpen = false">
        <NuxtLink to="/" >ΑΡΧΙΚΗ</NuxtLink>
      </li>
      <li @mouseenter="submenuOpen = true">
        ΜΟΝΤΕΛΑ
        <span class="submenu-toggle" :class="{ 'rotate-caret': submenuOpen }">
          <!-- <img src="~/assets/img/caret.svg" alt=""> -->
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xml:space="preserve"
            xmlns:serif="http://www.serif.com/"
            style="
              fill-rule: evenodd;
              clip-rule: evenodd;
              stroke-linejoin: round;
              stroke-miterlimit: 2;
            "
          >
            <path
              :class="{ 'fill-caret-svg': submenuOpen }"
              d="M16.967,10l-13.546,9.556l-0,-19.112l13.546,9.556Z"
              fill="var(--gray-9)"
            />
          </svg>
        </span>
      </li>
      <transition >
        <div
          class="models_submenu_container"
          v-show="submenuOpen"
          @mouseleave="submenuOpen = false"
        >
          <div class="models_submenu_item" @click="submenuOpen = false">
            <NuxtLink to="/bikes/popz">
              <img
                src="~/assets/img/Popz-side-thumb.png"
                alt="popz-thumbnail"
              />
              <span>POPZ</span>
            </NuxtLink>
          </div>
          <div class="models_submenu_item" @click="submenuOpen = false">
            <NuxtLink to="/bikes/rock">
              <img
                src="~/assets/img/Rock-side-thumb.png"
                alt="rock thumbnail"
              />

              <span>ROCK</span>
            </NuxtLink>
          </div>
          <div class="deco-rect"></div>
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
img {
  max-width: 100%;
}
li {
  position: relative;
  color: var(--gray-9);
  padding: 00px 25px 15px;
      line-height: 0.9;
  cursor: pointer;
  font-size: var(--font-size-2);
}
.submenu-toggle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: -2.5px;
  right: 2px;
  transform: scale(0.6);
  transition: all 0.2s ease-out;
}
.rotate-caret {
  transform: scale(0.6) rotate(90deg);
  transform-origin: center;
  fill: var(--blue-9);
}
.fill-caret-svg {
  fill: var(--blue-9);
}
li:hover,
a:hover {
  color: var(--blue-9);
}
a {
  color: var(--gray-9);
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
  background: var(--gray-0);
  width: 100%;
  height: 100px;
  display: flex;
  padding: 5px 0;
  justify-content: center;
  gap: 10px;
  transform: translateY(0px);
  z-index: 1;
  /* box-shadow: var(--shadow-4); */
}
.deco-rect{
  position: absolute;
  width: 100%;
  height:45px;
  top:32px;
  background: linear-gradient(90deg,var(--gray-0),30%, var(--gray-4),70%,var(--gray-0));
  z-index: 0;
}


.models_submenu_item span {
  font-size: var(--font-size-1);
  position: absolute;
  top: 0px;
  left: 10px;
  
}
.models_submenu_item {
  position: relative;
  text-align: center;
  width: 120px;
  height: 50px;
  z-index: 1;
}

/* transition */


.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>