<template>
  <div class="wrapper">
    <header class="head">
      <section aria-label="hero" class="hero">
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
         <h1>Γνωρίστε το {{ bike.title }}</h1>
          <h2>Χρωματισμοί</h2>
        <div class="container bike-colors">
         
          <div class="bike-colors-wrapper">
            <div class="bike-colors-images">
              <img v-show="bikeColor===index"
                v-for="(item, index) in bike.BikeColors"
                :key="item.ColorImage.id"
                :src="item.ColorImage.filename"
                :alt="item.ColorImage.alt"
              />
            </div>
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
    </main>
  </div>
</template>

<script>
export default {
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
          products: res.data.stories.map((pr) => {
            return {
              title: pr.content.name,
              HeaderImage: pr.content.HeaderImage.filename,
              ImageAlt: pr.content.HeaderImage.alt,
              BikeColors: pr.content.BikeColors,
              Details:pr.content.Details
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
  color: var(--blue-9);
  margin: 0;
  /* text-transform: uppercase; */
  font-size: var(--font-size-5);
}
h2{
  color: var(--gray-1);
  font-weight: var(--font-weight-4);
}
.intro {
  background: rgb(41, 44, 53);
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
  width: 650px;
  max-width: 100%;
  height: 400px;
  /* background: #000; */
}
.bike-colors-images img {
  position: absolute;
  top: -2rem;
  left: 0;
}
.bike-colors-bullets {
  display: flex;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  color: var(--gray-0);
}
.bullet-wrap{
  width: 6rem; 
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.bullet {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 4px solid #000;
  cursor: pointer;
}
.details{
  background-color: var(--gray-5);

}
.detail{
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;
  /* transform-style: preserve-3d; */
  perspective: 1100px;



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
  border-radius:20px;
  transform: rotateY(20deg);
  z-index: 10;
  /* transform-style: preserve-3d; */
transition: all 0.5s;

  
}
.detail-img:hover{
    transform: rotateY(0deg);

}
.detail:nth-of-type(2n) .detail-img{
  transform: rotateY(-20deg);
}
.detail-img:hover{
    transform: rotateY(0deg) !important;

}
.detail-text-wrap{
  flex-basis: 30%;
text-align: center;
/* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */


}
.detail-text{
  
font-size: var(--font-size-5);
font-weight: var(--font-weight-8);
color: var(--blue-7);

}
.detail-text-desc{
font-size: var(--font-size-3);
font-weight: var(--font-weight-4);
color: var(--gray-9);
max-width: 35ch;
}



</style>