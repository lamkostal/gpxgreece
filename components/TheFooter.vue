<template>
  <footer><span>© copyright GPX-Greece</span></footer>
</template>

<script>
export default {

}
</script>

<style scoped>

footer{
  width: 100%;
  background: var(--gray-8);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-self: flex-end;
  /* position:fixed; */
bottom:0;
}

  span{
    color: var(--gray-2);
    font-size:var(--font-size-fluid-0);
    padding: 20px 0 5px;
  }
</style>