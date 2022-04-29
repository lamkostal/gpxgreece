<template>
  <div class="wrapper">
   
    <header class="head">
      <section aria-label="hero top-section" class="hero">
        <img :src="bike.HeaderImage" alt="bike.ImageAlt" class="hero_img" />
        <div class="header-btn-container">
          <nuxt-link class="btn header-btn" to="/dealers"
            >Βρες Αντιπροσωπο</nuxt-link
          >
        </div>
      </section>
    </header>
    <main>
      <section class="intro">
        <div class="bg-intro"></div>

        <h1>Εξερευνήστε το {{ bike.title }}</h1>
        <h2>Χρωματισμοί</h2>
        <div class="container bike-colors">
          <div class="bike-colors-wrapper">
            <transition-group tag="div" name="bike" class="bike-colors-images">
              <img
                v-show="bikeColor === index"
                v-for="(item, index) in bike.BikeColors"
                :key="item.ColorImage.id"
                :src="item.ColorImage.filename"
                :alt="item.ColorImage.alt"
              />
            </transition-group>

            <div class="bike-colors-bullets">
              <div
                class="bullet-wrap"
                v-for="(bullet, index) in bike.BikeColors"
                :key="bullet.ColorImage.id"
              >
                <div
                  @click="bikeColor = index"
                  class="bullet"
                  :style="{backgroundImage: 'linear-gradient(60deg,'+ bullet.BulletColor.color + ' 0 60%,'+ bullet.BulletColor2.color + ' 62% 100%)' }"
                ></div>
                <span>{{ bullet.BulletColorName }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="details">
        <h2>Λεπτομέρειες</h2>
        <div class="container-fluid">
          <div
            class="detail"
            v-for="detail in bike.Details"
            :key="detail.DetailImage.id"
          >
            <div class="detail-img">
              <img :src="detail.DetailImage.filename" alt="" />
            </div>
            <div class="detail-text-wrap">
              <p class="detail-text">{{ detail.DetailText }}</p>
              <p class="detail-text-desc">{{ detail.DetailTextDesc }}</p>
            </div>
          </div>
         
        </div>
     
      </section>
          <div class="full-width-detail container-fluid">
          <div class="full-width-detail_img"><img :src="bike.Chain[0].Image.filename" alt=""></div>
          <div class="full-width-detail_text">
            
           <div class="chain-text">
              <h3>{{bike.Chain[0].Title}}</h3>
              <p>{{bike.Chain[0].Text}}</p>
           </div>
          </div>
        </div>
        <div class="full-width" v-if="bike.Chain.length>1">
          <img :src="bike.Chain[1].Image.filename " alt="">

        </div>
        <div class="full-width design" v-if="bike.Chain.length>2">
          <div class="full-width-detail_img"><img :src="bike.Chain[2].Image.filename " alt=""></div>
          <div class="full-width-detail_text">
            <div class="design-text chain-text">
              <h3>{{bike.Chain[2].Title}}</h3>
                <p>{{bike.Chain[2].Text}}</p>
            </div>
          </div>

        </div>

      <section id="dimentions" v-if="bike.DimentionsImg">
        <h2>Διαστάσεις</h2>
        <div class="container dimentions-wrap">
          <img
            :src="bike.DimentionsImg.filename"
            :alt="bike.DimentionsImg.alt"
            :title="bike.DimentionsImg.title"
          />
        </div>
        <div class="dim-labels">
          <span>Μήκος : 1880mm</span><span>Ύψος : 1070mm</span><span>Πλάτος : 745mm</span>
        </div>
      </section>
      <section id="specifications">
        <h2>Τεχνικά Χαρακτηριστικά</h2>
        <div class="specifications container">
          <div
            class="specs-category"
            v-for="category in bike.Specifications"
            :key="category.SpecCatName"
          >
            <div class="flex-row">
              <img
                :src="category.SpecCatIcon.filename"
                :alt="category.SpecCatName"
              />

              <span class="cat-title">{{ category.SpecCatName }}</span>
            </div>
            <div
              class="spec"
              v-for="spec in category.Specification"
              :key="spec.specName"
            >
              <span class="spec-name">{{ spec.specName }}</span>
              <span class="spec-value">{{ spec.specValue }}</span>
            </div>
          </div>
        </div>
      </section>
      <section class="certificates  " v-if="bike.Cerificates.length>0">
        <h2>Πιστοποιητικά</h2>
        <div class="cert-wrap flex-row container">
          <div class="cert"  v-for="cert in bike.Cerificates" :key="cert.id">
            <img :src="cert.filename" alt="">
  
          </div>
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
      bikeColor: 0,
    };
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: `bikes`,
      })
      .then((res) => {
        console.log("ela"+res);

        if (!res.data.stories.length) {
          throw "erroo";
        }
        return {
          products: res.data.stories.map((items) => {
            return {
              title: items.content.name,
              HeaderImage: items.content.HeaderImage.filename,
              ImageAlt: items.content.HeaderImage.alt,
              BikeColors: items.content.BikeColors,
              Details: items.content.Details,
              Specifications: items.content.Specifications,
              DimentionsImg: items.content.DimentionsImg,
              Chain:items.content.Chain,
              Cerificates:items.content.Cerificates
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
    bike() {
      return this.products.find((e) => {
        return e.title.toLowerCase() == this.$route.params.bike;
      });
    },
   
  },
  mounted() {
    // GSAP ANIMATIONS
  setTimeout(()=>{
     // let gsap = this.$gsap;
     ScrollTrigger.refresh()
    gsap.from("h1", {
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "h1",
        start: "top-=300 top+=200",
        // scrub: true,
        end: "+=500",
        // markers: true,
      },
    });

    var headings2 = gsap.utils.toArray("h2");
    headings2.forEach((h2) => {
      gsap.from(h2, {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: h2,
          start: "top-=500 top+=100",
          // scrub: true,
          // end: "+=500",
          // markers: true,
        },
      });
    });
//details
    var details = gsap.utils.toArray(".detail-img");
    details.forEach((detail) => {
      gsap.to(detail, {
        rotationY: 0,
        // scale:2,
        duration: 0.5,
        flexBasis: 800,
        borderRadius: 10,
        
        ease: "power1.out",
        scrollTrigger: {
          trigger: detail,
          start: "top center",
          toggleActions: "restart reverse restart reverse",

          // scrub: true,
          end: "bottom+=100 center",
          // markers: true,
        },
      });
    });
    //details full width

        gsap.from('.full-width-detail_img',{x:-150, duration:1,
         scrollTrigger: {
          trigger: '.full-width-detail_img',
          start: "top center",
         
        }},)
        gsap.from('.full-width-detail_text',{x:150,
         duration:1,
         scrollTrigger: {
          trigger: '.full-width-detail_text',
          start: "top center",
          duration:2
         
        }},)

    


    //Bikes
    var colorbikes = gsap.utils.toArray(".bike-colors-images");

    colorbikes.forEach((img) => {
      gsap.from(img, {
        x: -250,
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: img,
          start: "top center+=400",
          toggleActions: "play none none reset",

          // scrub: true,
          // end: "+=500",
          // markers: true,
        },
      });
    });
    // INTRO BIKE
    gsap.to(".bg-intro", {
      scale: 7.5,
      duration: 3.5,
      ease: "power4.out",
      delay:0.3,
      scrollTrigger: {
        trigger: ".intro",
        start: "top bottom",
        toggleActions: "play none none reset",

        // scrub:true
      },
    });
    //bullets//
       
  ScrollTrigger.batch(".bullet-wrap", {
  onEnter: elements => {
    gsap.from(elements, {
      delay:0.5,
      ease:'power3.out',
      duration:1.5,
      autoAlpha: 0,
      y: 150,
      stagger: 0.5
    });
  },
  once: true
});

    //SPECS//
    ScrollTrigger.batch(".specs-category", {
  onEnter: elements => {
    gsap.from(elements, {
      ease:'power3.out',
      duration:1.5,
      autoAlpha: 0,
      y: 100,
      stagger: 0.3
    });
  },
  once: true
});
 //SPEC ITEM//
    ScrollTrigger.batch(".spec", {
  onEnter: elements => {
    gsap.from(elements, {
      ease:'power1.out',
      duration:0.4,
      autoAlpha: 0,
      y: 100,
      stagger: 0.2
    });
  },
  once: true
});
//cert//
    ScrollTrigger.batch(".cert", {
  onEnter: elements => {
    gsap.from(elements, {
      ease:'power1.out',
      duration:0.4,
      autoAlpha: 0,
      y: 100,
      stagger: 0.2
    });
  },
  once: true
});



  },250)

   
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-btn-container {
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  padding: 80px;
  align-items: center;
  /* background:linear-gradient(90deg,transparent,30%,rgba(36, 36, 36, 0.384)); */
}
.header-btn {
  background: var(--gray-9);
  /* background: rgb(143, 143, 143, 0.8); */
  border: var(--border-size-2) solid var(--gray-0);
  font-weight: var(--font-weight-5);
}
h1 {
  letter-spacing: 0.05em;
  color: var(--blue-7);
  margin: 0;
  /* text-transform: uppercase; */
  font-size: var(--font-size-6);
  opacity: 1;
  z-index: 1;
}
h2 {
  color: var(--gray-4);
  font-weight: var(--font-weight-4);
  margin: 1rem 0rem 3rem 0rem;
  font-size: var(--font-size-5);
}
h2:after {
  content: "";
  display: block;
  width: 3ch;
  height: 1px;
  background-color: var(--gray-4);
  margin-inline: auto;
  margin-top: 10px;
  opacity: 0.9;
  border-radius: 15px;
}
section h2 {
  color: var(--gray-2);
}
section h2:after {
  background-color: var(--gray-2);
}
#specifications h2 {
  color: var(--gray-7);
}
#specifications h2:after {
  background-color: var(--gray-7);
}

.intro {
  /* background-color: rgb(41, 44, 53); */
  position: relative;
  overflow: hidden;
}
.bg-intro {
  position: absolute;
  width: 100vh;
  height: 100vh;
  border-radius: 50%;
  background: var(--gray-9);
  top: 0;
  left: -50%;
  z-index: 0;
  transform: scale(0);
}
.bike-colors {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bike-colors-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.bike-colors-images {
  position: relative;
  width: 800px;
  max-width: 100%;
  height: 500px;
 
}
@media(max-width:768px){
  .bike-colors-images {
  position: relative;
  width: 800px;
  max-width: 100%;
  height: 70vw;
  
}
}
.bike-colors-images img {
  position: absolute;
  top: -2rem;
  left: 0;
}
.bike-colors-bullets {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  text-align: center;
  color: var(--gray-0);
  z-index: 1;
  padding-right: 1rem;
}
.bullet-wrap {
  width: 6rem;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.bullet {
  margin-top: 10px;
  width: 5.9rem;
  height: 2.9rem;
  border-radius: 50px;
  outline: 2px solid rgb(255, 255, 255);
  cursor: pointer;
}
.details {
  background-color: var(--gray-9);
}
.detail {
  padding: 3.5rem 0;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  perspective: 1000px;
  row-gap: 1rem;
}
.detail:nth-child(even) {
  flex-direction: row-reverse;
}
.detail-img {
  display: flex;
  flex-basis: 450px;
  overflow: hidden;
  box-shadow: var(--shadow-4);
  flex-wrap: wrap;
  border-radius: 0px;
  /* border:8px solid white; */
  transform: rotateY(40deg);
  z-index: 10;
  /* transform-style: preserve-3d; */
  /* transition: all 0.35s ease-in-out;  */
}
.detail-img img{
  width:100%;
}

.detail:nth-of-type(2n) .detail-img {
  transform: rotateY(-40deg);
}

.detail-text-wrap {
  flex-basis: 35%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (max-width:768px){
  .detail-text-wrap {
  flex-basis: 35%;
  flex:1;
  padding-inline: 1rem;

  
}
}
.detail-text {
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-8);
  color: var(--blue-7);
  margin: 10px 0;
}
.detail-text-desc {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-4);
  color: var(--gray-4);
  width:min(40ch,100%) ;
}
.full-width-detail{

  padding:2rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: rgb(0, 0, 0);
  gap:2rem
  
}
.full-width-detail_img{
  display: flex;
  /* flex-basis: 35%; */
  max-width: 600px;
  
}
.full-width-detail_text{
  /* flex-basis: 30%; */
  justify-content: center;
  padding-left: 2rem;

}
.chain-text{
  padding-block: 1rem;
  /* flex-basis: 60%; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.chain-text p {
  max-width: 30ch;
  line-height: 1.7;
  font-size: var(--font-size-fluid-1);
  color:var(--gray-4);

}
.chain-text h3 {
  font-weight: var(--font-weight-8);
  font-size: var(--font-size-fluid-2);
  color: var(--gray-2);

}
.full-width{
  display: flex;
}
.design{
   display: flex;
   flex-wrap: wrap;
   background: #C61016;
}
#dimentions {
  background-color: var(--gray-7);
  /* padding-inline: 8rem ; */
  background-image: url(~/assets/img/grid-monomer.png);
  padding-bottom: 0;
}
#dimentions img {
  filter: invert();
}
.dim-labels{
  padding: 4rem 0.5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap:8rem;
  color: var(--gray-0);
  font-size: var(--font-size-fluid-1);
  font-weight: var(--font-weight-6);
  background: rgba(255, 255, 255, 0.116);

}
@media (max-width:768px){
  .dim-labels{
    flex-direction: column;
  gap:2rem;
  padding: 2rem 0.5rem;
  

  }
}
.specifications {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.specs-category {
  flex-basis: 30%;
  flex-grow: 1;
}
@media (max-width: 1024px) {
  .specs-category {
    flex-basis: 45%;
  }
}
@media (max-width: 768px) {
  .specs-category {
    flex-basis: 90%;
  }
}
.specs-category img {
  width: 25px;

  filter: sepia(100%) hue-rotate(180deg) saturate(50%);
}
.cat-title {
  display: block;
  font-weight: var(--font-weight-8);
  font-size: var(--font-size-3);
  color: var(--gray-7);
  margin: 10px 0;
}
.spec {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--gray-3);
  padding: 8px 15px;
}
.spec:nth-of-type(2n) {
  background: var(--gray-1);
}
.spec-value {
  flex-basis: 50%;
}
.certificates {
 background:#fff;
}
.certificates h2{
  color: var(--gray-7);
}
.certificates h2::after{
  background-color: var(--gray-7);
}
.cert-wrap{
 justify-content: space-around;
 align-content: center;
}
.cert{
  width: 120px;
}

/* transition */
.bike-enter-active,
.bike-leave-active {
  transition: all 0.35s ease-out;
}
.bike-enter,
.bike-leave-active {
  opacity: 0;
}
</style>