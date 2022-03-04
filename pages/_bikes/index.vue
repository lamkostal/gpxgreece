<template>
  <div>
    <h1>the {{$route.params.bikes}}</h1>
    {{bike.title}}
    <!-- <p>{{title}}</p> -->
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
        console.log(res)
        
        if(!res.data.stories.length){
           throw "erroo"
        }
         return {
          products: res.data.stories.map((pr) => {
            return {
              title: pr.content.name,
            };
          })
        };
        
      })
      .catch((e) => {
          console.log(e)
            context.error({ statusCode: 404, message: 'Page does not exist' })
          }
          );
  },
  computed:{
    bike(){
      return this.products.find( (e) =>{

                   return e.title === this.$route.params.bikes
                    
                })
      
      
    }
  }

}
</script>

<style>

</style>