const axios= require("axios");

export default {
  

  target: 'static',
  mode: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gpxgreece',
    
    htmlAttrs: {
      lang: 'el'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {rel:"preconnect",href:"https://fonts.googleapis.com"},
      {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Commissioner:wght@200;400;600;800;900&display=swap"},

      {rel:"stylesheet",href:"https://unpkg.com/open-props"},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
        {rel:"stylesheet", href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
     integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",
     crossorigin:""},
     
    ],
    script:[
      {src:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
   integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",
   crossorigin:""},
   {src:'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/gsap.min.js', body:true},
   {src:'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/ScrollTrigger.min.js', body:true}
   ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [ 
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['storyblok-nuxt',{ accessToken: process.env.NODE_ENV == 'production' ? 
    '2hwqbz1IQGl5exK8EM7kTQtt':'BEi60G3KulmzBjQhfhZwwAtt' , cacheProvider : 
    'memory'}],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    // routes: ['/bikes/popz','/bikes/rock']
  }
}
