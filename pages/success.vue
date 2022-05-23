<template>
 <div class="container success">
      <h1>Το μύνημα σας εστάλει με επιτυχία</h1>
      <nuxt-link to="/" class="back-home">Επιστροφή στην αρχική σελίδα</nuxt-link>
 </div>
</template>

<script>
export default {

}
</script>


<style >
.success{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.back-home{
    color: var(--blue-7);
}

</style>