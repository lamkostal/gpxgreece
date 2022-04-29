<template>
  <div role="button" aria-label="Display the menu" class="menu" @click="dispatchToggle"></div>
 
</template>

<script>
export default {

    methods:{

        dispatchToggle(){
            this.$emit('toggle','hello')
            console.log('disp')
        }
            
        
    }

}
</script>

<style  scoped>
@media (min-width:1024px){
  div{
  display: none;
}
}

.menu {
  --s: 25px; /* control the size */
  --c: var(--gray-5); /* the color */
  
  height: var(--s);
  aspect-ratio: 1;
  border: none;
  padding: 0;
  border-inline: calc(var(--s)/2) solid #0000;
  box-sizing: content-box;
  --_g: linear-gradient(var(--c) 20%,#0000 0 80%,var(--c) 0) 
        no-repeat content-box border-box;
  background: var(--_g) 0, var(--_g) 100%;
  background-size: 50% 100%;
  position: relative;
  clip-path: inset(0 25%);
  -webkit-mask: linear-gradient(90deg,#0000,#000 25% 75%,#0000);
  cursor: pointer;
  transition: 
    background-position .3s var(--_s,.3s), 
    clip-path 0s var(--_s,.6s);
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
}
.menu:before,
.menu:after {
  content:"";
  position: absolute;
  inset: 40% 0;
  background: var(--c);
  transition: transform .3s calc(.3s - var(--_s,.3s));
}
.menu:checked {
  clip-path: inset(0);
  background-position: -200%, 300%;
  --_s: 0s;
}
.menu:checked:before {
  transform: rotate(45deg);
}
.menu:checked:after {
  transform: rotate(-45deg);
}
.menu:focus-visible {
  clip-path: none;
  -webkit-mask: none;
  border: none;
  outline: 2px solid var(--c);
  outline-offset: 5px;
}

body {
  margin:0;
  min-height:100vh;
  display:grid;
  place-content:center;
}

</style>