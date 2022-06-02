<template>
  <div class="wrapper">
    <header class="head">
      <section aria-label="hero" class="hero"></section>
    </header>
    <main>
      <section class="dealers-section">
        <h1>Βρες έναν αντιπρόσωπο</h1>
        <h2>Αναζήτηση στο χάρτη</h2>
        <div id="map"></div>
        <div class="container">
          <h2>Αναζήτηση ανά περιοχή</h2>
          <div class="filters">
            <span @click="filter = ''" aria-role="button" class="filter"
              >Όλοι</span
            >
            <span @click="filter = 'Αττική'" aria-role="button" class="filter"
              >Αττική</span
            >
            <span
              @click="filter = 'Βόρεια Ελλάδα'"
              aria-role="button"
              class="filter"
              >Βόρεια Ελλάδα</span
            >
            <span
              @click="filter = 'Κεντρική Ελλάδα'"
              aria-role="button"
              class="filter"
              >Κεντρική Ελλάδα</span
            >
            <span
              @click="filter = 'Νότια Ελλάδα'"
              aria-role="button"
              class="filter"
              >Νότια Ελλάδα</span
            >
            <span @click="filter = 'Νησιά'" aria-role="button" class="filter"
              >Νησιά</span
            >
            <span @click="filter = 'Κρήτη'" aria-role="button" class="filter"
              >Κρήτη</span
            >
          </div>

          <div class="dealers-list">
            <ul
              v-for="dealer in dealers"
              :key="dealer.name"
              v-show="filter === '' || filter === dealer.region"
            >
              <li class="dealer-info-item name">
                <span> {{ dealer.name }}</span>
              </li>
              <li class="dealer-info-item">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M18.75 3.94L4.07 10.08c-.83.35-.81 1.53.02 1.85L9.43 14c.26.1.47.31.57.57l2.06 5.33c.32.84 1.51.86 1.86.03l6.15-14.67c.33-.83-.5-1.66-1.32-1.32z"
                    />
                  </svg>
                </span>
                <span class="adress"
                  >{{ dealer.street }}, {{ dealer.city }},
                  {{ dealer.code }}</span
                >
              </li>
              <li class="dealer-info-item">
                <a :href="'tel:' + dealer.phone">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                        d="M12.88 5.05c3.18.4 5.67 2.89 6.07 6.07.06.51.49.88.99.88.04 0 .08 0 .12-.01.55-.07.94-.57.87-1.12-.51-4.09-3.72-7.3-7.81-7.81-.55-.06-1.05.33-1.11.88-.07.55.32 1.05.87 1.11zm.38 2.11c-.53-.14-1.08.18-1.22.72s.18 1.08.72 1.22c1.05.27 1.87 1.09 2.15 2.15.12.45.52.75.97.75.08 0 .17-.01.25-.03.53-.14.85-.69.72-1.22-.47-1.77-1.84-3.14-3.59-3.59zm5.97 8.1l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                      />
                    </svg>
                  </span>
                </a>
                <span class="telephone">{{ dealer.phone }}</span>
              </li>
              <li class="dealer-info-item">
                <a :href="'mailto:' + dealer.email">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"
                      /></svg
                  ></span>
                </a>
                <span class="email"> {{ dealer.email }}</span>
              </li>
              <li class="dealer-info-item" v-if="dealer.website.length">
                <a :href="dealer.website" target="_blank" rel="noopener">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
                      />
                    </svg>
                  </span>
                </a>
                <span class="website">{{ dealer.website }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="dealers-section-contact">
        <div class="dealer-contact align-center">
          <h2>Σας ενδιαφέρει να γίνετε αντιπρόσωπος της <b>GPX</b>;</h2>
          <h3>Στείλε μας το μήνυμά σας, και θα επικοινωνήσουμε μαζί σας</h3>
          <form
            class="contact-form row"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="dealer-contact"
            action="/success/"
            method="post"
          >
                        <input type="hidden" name="form-name" value="dealer-contact" />

            <p class="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" >
              </label>
            </p>
            <div class="form-field col x-50">
              <input
                name="name"
                id="name"
                @keyup="notEmpty1 = true"
                class="input-text js-input"
                :class="{ 'not-empty': notEmpty1 }"
                type="text"
                required
              >
              <label class="label" for="name">Επωνυμία</label>
            </div>
            <div class="form-field col x-50">
              <input
                name="email"
                id="email"
                @keyup="notEmpty2 = true"
                class="input-text js-input"
                :class="{ 'not-empty': notEmpty2 }"
                type="email"
                required
              >
              <label class="label" for="email">E-mail</label>
            </div>
            <div class="form-field col x-100">
              <input
                name="message"
                id="message"
                @keyup="notEmpty3 = true"
                class="input-text js-input"
                :class="{ 'not-empty': notEmpty3 }"
                type="text"
                required
              >
              <label class="label" for="message">Μήνυμα</label>
            </div>
            <div class="form-field col x-100">
              <input
                name="checkbox"
                id="checkbox"
                class="input-text js-input"
                type="checkbox"
                required
              >
              <span
                >Έχω διαβάσει και συναινώ με την
                <nuxt-link to="/privacy">πολιτική απορρήτου</nuxt-link></span
              >
            </div>
            <div class="form-field col x-100 align-center">
              <input class="btn" type="submit" value="Submit" >
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
      filter: "",
      notEmpty1: false,
      notEmpty2: false,
      notEmpty3: false,
    };
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/?per_page=100", {
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
                : "",
              region: items.content.Region.length ? items.content.Region : " ",
              lat: items.content.Lat.length
                ? items.content.Lat.replace(",", ".")
                : " ",
              lon: items.content.Lon.length
                ? items.content.Lon.replace(",", ".")
                : " ",
            };
          }),
        };
      })
      .catch((e) => {
        console.log(e);
        context.error({ statusCode: 404, message: "Page does not exist" });
      });
  },
  computed: {},
  mounted() {
    // custom icon
    var LeafIcon = L.Icon.extend({
      options: {
        iconSize: [25, 41],
        //  shadowSize:   [50, 20],
        iconAnchor: [12, 41],
        shadowAnchor: [12, 41],
        popupAnchor: [0, -26],
      },
    });
    var gpxIcon = new LeafIcon({
      iconUrl: `https://res.cloudinary.com/lamkos/image/upload/v1649500624/GPX/marker-icon-2x-red_rqgj1d.png`,
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });

    var map = L.map("map", {
      scrollWheelZoom: false,
      dragging: !L.Browser.mobile,
      tap: !L.Browser.mobile,
    }).setView([37.96, 22.239], 7.1);
    this.dealers.forEach((el) => {
      console.log(el);
      var marker = L.marker([el.lat, el.lon], { icon: gpxIcon });
      marker.bindPopup(
        `<b>${el.name}</b><br>${el.street}, ${el.city}, ${el.code}<br><b> ${el.phone}</b><br>${el.email}<br><a href="${el.website}">${el.website}</a>`
      );
      marker.addTo(map);
    });
    L.tileLayer(
      // 'https://api.mapbox.com/styles/v1/elkid/ckz42ccyt000p17nxm7m84fy0/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWxraWQiLCJhIjoiY2wxcTQxdWx3MWhnYTNkbzJyODRyNTVxbyJ9.ObiYpLrx9bBnYRnd_74JWA&zoomwheel=true&fresh=true#5.9/38.383/24.704',//mapbox
      // 'https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=J9Xj7Qc5hqRW3MjpyuIy',//maptiler
      // 'https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=J9Xj7Qc5hqRW3MjpyuIy',//maptiler
      "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png", //stadia
      //  'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',//stadia
      {
        // subdomains: ['a','b','c'],
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18,
        // id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        // accessToken: 'pk.eyJ1IjoiZWxraWQiLCJhIjoiY2wxcTQxdWx3MWhnYTNkbzJyODRyNTVxbyJ9.ObiYpLrx9bBnYRnd_74JWA',//mapbox
      }
    ).addTo(map);
  },
};
</script>

<style scoped>
h1 {
  margin: 2rem 0 0 0;
}
.dealers-section h2 {
  text-align: center;
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-1);
  margin: 01rem 0 0 0;
}
h3 {
  text-align: center;
  color: var(--gray-7);
}
#map {
  /* width: 100%; */
  height: 100vh;
  box-shadow: var(--shadow-3);
  margin: 2.5rem 0;
  border-block: 10px solid var(--gray-2);
}
.dealers-section {
  padding: 02rem 0 6rem;
}
.filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 2.5rem 0 3rem 0;
}
.filter {
  padding: 7px 20px;
  background-color: var(--gray-2);
  color: var(--gray-9);
  /* border-radius: 20px; */
  cursor: pointer;
  transition: all 0.2s ease;
}
.filter:hover {
  background-color: var(--blue-9);
  color: var(--gray-0);
}
.filter:active {
  background-color: var(--blue-4);
}
.dealers-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  padding: 2rem 0;
  justify-content: start;
  padding: 0 1rem 0 1rem;
  gap: 2rem;
  /* margin-top: 5rem; */
}
.dealers-list > ul {
  margin: 0rem;
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-start;
  align-items: flex-start;
  /* margin: 2rem 0 0 0; */
  background: var(--gray-1);
  /* border: 1px solid black; */
  border-radius: 10px;
  box-shadow: var(--shadow-2);
}
li {
  text-align: left;
  flex-basis: 20%;
  padding-bottom: 2px;
  font-size: var(--font-size-1);
}
.dealer-info-item {
  display: flex;
  gap: 5px;
  align-items: center;
  padding-block: 5px;
}
.dealer-info-item span {
  display: flex;
  align-items: center;
}
.name {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-4);
  color: var(--blue-9);
  text-align: center;
  padding-bottom: 7px;
  align-self: center;
  transform: translateX(-1rem);
}
span > svg {
  width: 20px;
}
.dealers-section-contact {
  background-color: var(--gray-1);
  background-image: url(~/assets/img/GPX-road.svg);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 100% 101%;
  min-height: 100vh;
}

.dealer-contact {
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
}
/* transition group */
.list-enter-active,
.list-leave-active {
  opacity: 1;
  transition: all 0.4s ease-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
/* .list-move {
  transition: transform 1.2s ease-out;
} */
.list-leave-active {
  position: absolute;
}

/* contact form */
</style>