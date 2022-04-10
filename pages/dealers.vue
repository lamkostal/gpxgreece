<template>
  <div class="wrapper">
    <header class="head">
      <section aria-label="hero" class="hero"></section>
    </header>
    <main>
      <section class="dealers-section ">
        <h1>Βρες έναν αντιπρόσωπο</h1>
        <h2>Αναζήτηση στο χάρτη</h2>
        <div id="map"></div>
        <div class="container">
          <h2>Αναζήτηση ανά περιοχή</h2>
          <div class="filters">
            <span @click="filter= '' " aria-role="button" class="filter">Όλοι</span>
            <span @click="filter='Αττική'" aria-role="button" class="filter">Αττική</span>
            <span @click="filter='Βόρεια Ελλάδα'" aria-role="button" class="filter">Βόρεια Ελλάδα</span>
            <span @click="filter='Κεντρική Ελλάδα'" aria-role="button" class="filter">Κεντρική Ελλάδα</span>
            <span @click="filter='Νότια Ελλάδα'" aria-role="button" class="filter">Νότια Ελλάδα</span>
            <span @click="filter='Νησιά'" aria-role="button" class="filter">Νησιά</span>
            <span @click="filter='Κρήτη'" aria-role="button" class="filter">Κρήτη</span>
          </div>
  
          <div class="dealers-list"  >
           
             
                <ul v-for="dealer in dealers" :key="dealer.name" v-if="filter==='' || filter===dealer.region ">
                 
                  <li class="dealer-info-item">
                    <span class="name">{{ dealer.name }}</span>
                  </li>
                  <li class="dealer-info-item">
                    <span class="adress"
                      >{{ dealer.street }}, {{ dealer.city }}, {{ dealer.code }}</span
                    >
                  </li>
                  <li class="dealer-info-item">
                    <span class="telephone">τηλ. {{ dealer.phone }}</span>
                  </li>
                  <li class="dealer-info-item">
                    <span class="email">email: {{ dealer.email }}</span>
                  </li>
                  <li class="dealer-info-item" v-if="dealer.website.length">
                    <span class="website">{{ dealer.website }}</span>
                  </li>
                 
                </ul>
             
           
          </div>
        </div>
      </section>
      <section class="dealers-section-contact">
   <div class="dealer-contact">
     <h2 >Σας ενδιαφέρει να γίνετε αντιπρόσωπος της <b>GPX</b>;</h2>
     <h3>Στείλε μας το μήνυμά σας, και θα επικοινωνήσουμε μαζί σας</h3>
     <form class="contact-form row">
        <div class="form-field col x-50">
           <input id="name" @keyup="notEmpty1=true" class="input-text js-input" :class="{'not-empty':notEmpty1}" type="text" required>
           <label class="label" for="name">Επωνυμία</label>
        </div>
        <div class="form-field col x-50">
           <input id="email" @keyup="notEmpty2=true" class="input-text js-input" :class="{'not-empty':notEmpty2}" type="email" required>
           <label class="label" for="email">E-mail</label>
        </div>
        <div class="form-field col x-100">
           <input id="message" @keyup="notEmpty3=true" class="input-text js-input" :class="{'not-empty':notEmpty3}" type="text" required>
           <label class="label" for="message">Μήνυμα</label>
        </div>
        <div class="form-field col x-100 align-center">
           <input class="btn" type="submit" value="Submit">
        </div>
     </form>
   </div>
</section>

    </main>
  </div>
</template>

<script>
export default {
  
  transition: "fade",
  data() {
    return {
      filter:'',
      notEmpty1:false,
      notEmpty2:false,
      notEmpty3:false,

    };
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: `dealers`,
      })
      .then((res) => {
        console.log(res);

        if (!res.data.stories.length) {
          throw "erroo";
        }
        return {
          dealers: res.data.stories.map((items) => {
            return {
              name: items.content.CompanyName.length
                ? items.content.CompanyName
                : " ",
              street: items.content.Street.length ? items.content.Street : " ",
              city: items.content.City.length ? items.content.City : " ",
              code: items.content.PostalCode.length
                ? items.content.PostalCode
                : " ",
              phone: items.content.Telephone.length
                ? items.content.Telephone
                : " ",
              email: items.content.Email.length ? items.content.Email : " ",
              website: items.content.Website.length
                ? items.content.Website
                : " ",
              region: items.content.Region.length ? items.content.Region : " ",
              lat:items.content.Lat.length ? items.content.Lat.replace(',' , '.') : " ",
              lon:items.content.Lon.length ? items.content.Lon : " ",

            };
          }),
        };
      })
      .catch((e) => {
        console.log(e);
        context.error({ statusCode: 404, message: "Page does not exist" });
      });
  },
  computed: {
    
  },
  mounted(){
    // custom icon
    var LeafIcon = L.Icon.extend({
    options: {
       iconSize:     [25,41],
      //  shadowSize:   [50, 20],
       iconAnchor:   [12, 41],
       shadowAnchor: [12, 41],
       popupAnchor:  [0, -26]
    }
});
var gpxIcon = new LeafIcon({
    iconUrl: `https://res.cloudinary.com/lamkos/image/upload/v1649500624/GPX/marker-icon-2x-red_rqgj1d.png`,
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
})

    var map = L.map('map',{scrollWheelZoom: false,dragging: !L.Browser.mobile, tap: !L.Browser.mobile }).setView([38.960,22.239], 7.1);
    this.dealers.forEach(el => {
      console.log(el)
      var marker = L.marker([el.lat,el.lon],{icon:gpxIcon});
      marker.bindPopup(`<b>${el.name}</b><br>${el.street}, ${el.city}, ${el.code}<br><b> ${el.phone}</b><br>${el.email}<br><a href="${el.website}">${el.website}</a>`);
      marker.addTo(map)
    });
    L.tileLayer(
      // 'https://api.mapbox.com/styles/v1/elkid/ckz42ccyt000p17nxm7m84fy0/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWxraWQiLCJhIjoiY2wxcTQxdWx3MWhnYTNkbzJyODRyNTVxbyJ9.ObiYpLrx9bBnYRnd_74JWA&zoomwheel=true&fresh=true#5.9/38.383/24.704',//mapbox
      // 'https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=J9Xj7Qc5hqRW3MjpyuIy',//maptiler
      // 'https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=J9Xj7Qc5hqRW3MjpyuIy',//maptiler
    //  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', //stadia
     'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',//stadia
       {
    // subdomains: ['a','b','c'],
    attribution:  '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    // accessToken: 'pk.eyJ1IjoiZWxraWQiLCJhIjoiY2wxcTQxdWx3MWhnYTNkbzJyODRyNTVxbyJ9.ObiYpLrx9bBnYRnd_74JWA',//mapbox
}).addTo(map);


 
  }
};
</script>

<style scoped>
h1{
  margin: 2rem 0 0 0;
}
h2{
  text-align: center;
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-1);
  margin: 01rem 0 0 0;
}
h3{
   text-align: center;
  color: var(--gray-7);
}
#map{
  /* width: 100%; */
  height: 100vh;
  box-shadow: var(--shadow-3);
  margin: 2.5rem 0;
  border-block: 10px solid var(--gray-2);
}
.dealers-section {
  padding: 02rem 0 6rem;
}
.filters{
  display: flex;
  justify-content: center;
  gap:20px;
  margin: 2.5rem 0 3rem 0;
}
.filter{
  padding: 7px 20px;
  background-color: var(--gray-2);
  color:var(--gray-9);
  /* border-radius: 20px; */
  cursor: pointer;
  transition: all 0.2s ease;
}
.filter:hover{
  background-color: var(--blue-9);
  color:var(--gray-0);
}
.filter:active{
  background-color: var(--blue-4);

}
.dealers-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem 0;
  justify-content: start;
  padding: 0 0rem 0 4rem;
  gap:2rem;
  /* margin-top: 5rem; */
  
  
}
.dealers-list > ul {
  margin: 0rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-start;
  align-items: center;
  /* margin: 2rem 0 0 0; */
  background: var(--gray-1);
  /* border: 1px solid black; */
  border-radius: 10px;
  box-shadow: var(--shadow-2);
}
li {
  text-align: left;
  flex-basis: 20%;
  padding-bottom: 8px;
  font-size: var(--font-size-1);
}
.name {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-1);
  color: var(--blue-9);
}
/* transition group */
.list-enter-active,
.list-leave-active {
  opacity:1 ;
  transition: all 0.4s ease-out;
  

}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.list-move {
  /* transition: transform 1.2s ease-out; */
}
.list-leave-active {
  position: absolute;
 
}

/* contact form */

.align-center {
  text-align: center;
}
.row {
  margin: -20px 0;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.row .col {
  padding: 0 20px;
  float: left;
  box-sizing: border-box;
}
.row .col.x-50 {
  width: 50%;
}
.row .col.x-100 {
  width: 100%;
}

.content-wrapper {
  min-height: 100%;
  position: relative;
}
.dealers-section-contact{
  background-color: var(--gray-1);
  min-height: 100vh;
}

.dealer-contact {
  width:800px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
}
.contact-form {
  margin-top: 4rem;
}

.contact-form .form-field {
  position: relative;
  margin: 32px 0;
}
.contact-form .input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: var(--gray-7);
  font-family: Lusitana, serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  background: transparent;
}
.contact-form .input-text:focus {
  outline: none;
}
.contact-form .input-text:focus + .label, .contact-form .input-text.not-empty + .label {
  transform: translateY(-24px);
  color: var(--blue-9);
}
.contact-form .label {
  position: absolute;
  left: 20px;
  bottom: 11px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: var(--gray-5);
  cursor: text;
  transition: transform 0.2s ease-in-out;
}
input[type="submit" i]{
  display: block;
  border:none;
}
input[type="submit" i]:hover{
   padding:15px 20px;

}

.note {
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
  text-align: center;
  font-family: Lusitana, serif;
  font-size: 16px;
  line-height: 21px;
}
.note .link {
  color: #888;
  text-decoration: none;
}
.note .link:hover {
  text-decoration: underline;
}

</style>