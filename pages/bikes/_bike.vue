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
    <main class="container">
      <section class="intro bike-colors">
        <h1>{{ bike.title }}</h1>
        <h2>Χρωματισμοί</h2>
        <div class="bike-colors-wrapper">
          <div class="bike-colors-images">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div class="bike-colors-bullets">
            <div><div class="bullet"></div><span>color name</span></div>
            <div><div class="bullet"></div><span>color name</span></div>
            <div><div class="bullet"></div><span>color name</span></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
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
  background: rgb(143, 143, 143,0.8);
  border: var(--border-size-2) solid var(--gray-0);
  font-weight: var(--font-weight-5);

}
h1{
  color:var(--blue-9);
  margin: 0;
  /* text-transform: uppercase; */
  font-size: var(--font-size-5);
  
}
.bike-colors {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bike-colors-wrapper {
  max-width: 80%;
  width: 800px;
  /* background: #000; */
  height: auto;
  display: flex;
  flex-direction: column;
}
.bike-colors-bullets {
  display: flex;
  justify-content: center;
  gap: 4rem;
}
.bullet {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #000;
}
</style>