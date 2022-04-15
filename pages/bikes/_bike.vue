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
               
                <img v-show="bikeColor===index"
                  v-for="(item, index) in bike.BikeColors"
                  :key="item.ColorImage.id"
                  :src="item.ColorImage.filename"
                  :alt="item.ColorImage.alt"
                />
             
            </transition-group>
           
            <div class="bike-colors-bullets">
              <div class="bullet-wrap" v-for="(bullet,index) in bike.BikeColors"
                :key="bullet.ColorImage.id"
               >
                <div  @click="bikeColor=index" class="bullet"  :style="{ backgroundColor: bullet.BulletColor.color }">
                </div>
                <span>{{ bullet.BulletColorName }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="details">
        <h2>Λεπτομέρειες</h2>
        <div class="container-fluid">
          <div class="detail" v-for="detail in bike.Details" :key="detail.DetailImage.id">
            <div class="detail-img">
              <img :src="detail.DetailImage.filename" alt="">
            </div>
            <div class="detail-text-wrap">
              <p class="detail-text">{{detail.DetailText}}</p>
              <p class="detail-text-desc">{{detail.DetailTextDesc}}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="dimentions" v-if="bike.DimentionsImg">
        <h2>Διαστάσεις</h2>
        <div class="container dimentions-wrap"><img :src="bike.DimentionsImg.filename" :alt="bike.DimentionsImg.alt" :title="bike.DimentionsImg.title"></div>
      </section>
      <section id="specifications">

        <h2>Τεχνικά Χαρακτηριστικά</h2>
        <div class="specifications container">
          <div class="specs-category" v-for="(category) in bike.Specifications" :key="category.SpecCatName">
           <div class="flex-row">
              <img :src="category.SpecCatIcon.filename" :alt="category.SpecCatName">

              <span class="cat-title">{{category.SpecCatName}}</span>
           </div>
            <div class="spec" v-for="spec in category.Specification" :key="spec.specName">
              <span class="spec-name">{{spec.specName}}</span>
              <span class="spec-value">{{spec.specValue}}</span>
            </div>
          </div>
        </div>

      </section>
    </main>
  </div>
</template>

<script>
export default {
  transition: 'fade',

  data() {
    return {
      bikeColor: 1,
    };
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: `bikes`,
      })
      .then((res) => {
        console.log(res);

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
              Details:items.content.Details,
              Specifications:items.content.Specifications,
              DimentionsImg:items.content.DimentionsImg
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
  mounted(){

     let gsap = this.$gsap;
      gsap.from('h1', {
        opacity:0,
        duration:1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: 'h1',
          start: "top-=300 top+=200",
          // scrub: true,
          end: "+=500",
          // markers: true,
        },
      });

 var headings2 = gsap.utils.toArray("h2");
    headings2.forEach((h2) => {
      gsap.from(h2, {
        scale:0,
        opacity: 0,
        duration:1.2,
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

    var details = gsap.utils.toArray(".detail-img");
    details.forEach((detail) => {
      gsap.to(detail, {
        rotationY:0,
        // scale:2,
        duration:0.3,
        flexBasis:600,
        borderRadius:20,
pin: true,
        ease:"linear",
        scrollTrigger: {
          trigger: detail,
          start: "top+=40 center+=50",
          toggleActions:"play reverse restart reverse",

          // scrub: true,
          end: "bottom center-=50",
          // markers: true,
        },
      });
    });
    var colorbikes = gsap.utils.toArray(".bike-colors-images");

      colorbikes.forEach((img) => {
      gsap.from(img, {
        x: -250,
        scale:0.5,
        opacity: 0,
        duration:1.5,
        delay:0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: img,
          start: "top center+=400",
        toggleActions:"play none none reset",

          // scrub: true,
          // end: "+=500",
          // markers: true,
        },
      });
    });
// INTRO BIKE
    gsap.to('.bg-intro',{
      scale:7.5,
      duration:3.5,
        ease: "power4.out",
      
      scrollTrigger:{
        trigger:'.intro',
        start:'top bottom',
        toggleActions:"play none none reset",

        // scrub:true
      }
    })
  }
};
</script>

<style scoped>
section{
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
  background: var(--orange-8);
  background: rgb(143, 143, 143, 0.8);
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
h2{
  color: var(--gray-4);
  font-weight: var(--font-weight-4);
  margin:1rem 0rem 3rem 0rem ;
  font-size: var(--font-size-5);
  

}
h2:after{
  content:"";
  display: block;
  width:3ch;
  height:1px;
  background-color:var(--gray-4);
  margin-inline:auto ;
  margin-top: 10px ;
  opacity: 0.9;
  border-radius: 15px;
}
section h2{
  color: var(--gray-2);
}
section h2:after{
  background-color: var(--gray-2);
}
#specifications h2{
  color: var(--gray-7);
}
#specifications h2:after{
   background-color: var(--gray-7);

}

.intro {
  /* background-color: rgb(41, 44, 53); */
  position: relative;
  overflow: hidden;
}
.bg-intro{
  position: absolute;
  width:100vh;
  height:100vh;
  border-radius: 50%;
  background: var(--gray-9);
  top:0;
  left:-50%;
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
}
.bike-colors-images {
  position: relative;
  width: 780px;
  max-width: 100%;
  height: 500px;
  /* background: #000; */
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
}
.bullet-wrap{
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
  border: 4px solid #000;
  cursor: pointer;
}
.details{
  background-color: var(--gray-9);

}
.detail{
  padding: 3.5rem 0;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0rem;
  perspective: 1000px;
}
.detail:nth-child(even){
  flex-direction: row-reverse;
}
.detail-img{
  display: flex;
  flex-basis: 500px;
  overflow: hidden;
  box-shadow: var(--shadow-4);
  flex-wrap: wrap;
  border-radius:0px;
  /* border:8px solid white; */
  transform: rotateY(30deg) ;
  z-index: 10;
  /* transform-style: preserve-3d; */
/* transition: all 0.35s ease-in-out;  */
}
.detail-img:hover{
    /* transform: rotateY(0deg) ;
  flex-basis: 600px;
  border-radius:20px; */
  /* border:8px solid transparent; */

}
.detail:nth-of-type(2n) .detail-img{
  transform: rotateY(-30deg);
}
/* .detail-img:hover{
    transform: rotateY(0deg) !important;
} */
.detail-text-wrap{
flex-basis: 35%;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.detail-text{
font-size: var(--font-size-5);
font-weight: var(--font-weight-8);
color: var(--blue-7);
margin: 10px 0;
}
.detail-text-desc{
font-size: var(--font-size-3);
font-weight: var(--font-weight-4);
color: var(--gray-4);
max-width: 35ch;
}
#dimentions{
 background-color:var(--gray-7);
 /* padding-inline: 8rem ; */
 background-image: url(~/assets/img/grid-monomer.png);
 
}
#dimentions img{
  filter:invert();
}
.specifications{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap:20px
}

.specs-category{
  flex-basis: 30%;
  flex-grow: 1;
}
@media (max-width:1024px){
  .specs-category{
  flex-basis:45%;
}
}
@media (max-width:768px){
  .specs-category{
  flex-basis:90%;
}
}
.specs-category img{
  width:25px;
  
  filter: sepia(100%) hue-rotate(180deg) saturate(50%);
}
.cat-title{
  display: block;
  font-weight: var(--font-weight-8);
  font-size: var(--font-size-3);
  color: var(--gray-7);
  margin: 10px 0;
}
.spec{
  
 display: flex;
 justify-content: space-between;
 border-top: 1px solid var(--gray-4);
 padding: 8px 5px;
 
}
.spec:nth-of-type(2n){
 background: var(--gray-2);
}
.spec-value{
  flex-basis: 50%;
}

/* transition */
.bike-enter-active,
.bike-leave-active {
  transition: all 0.35s ease-out  ;

}
.bike-enter,
.bike-leave-active {
  opacity: 0;
}


</style>