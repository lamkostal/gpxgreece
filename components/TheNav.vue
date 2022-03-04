<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">ΑΡΧΙΚΗ</NuxtLink></li>
      <li>
        <ul>
            ΜΟΝΤΕΛΑ
          <li><NuxtLink to="/popz">popz</NuxtLink></li>
          <li><NuxtLink to="/rock">rock</NuxtLink></li>
        </ul>
      </li>
      <li><NuxtLink to="/dealers">ΑΝΤΙΠΡΟΣΩΠΟΙ</NuxtLink></li>
      <li><NuxtLink to="/contact">ΕΠΙΚΟΙΝΩΝΙΑ</NuxtLink></li>
      <li>
        <NuxtLink to="/about">ΣΧΕΤΙΚΑ</NuxtLink>
      </li>
      <li></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
li{
  color: rgb(75, 75, 75);
  padding: 10px;
  cursor: pointer;

}
a {
  color: rgb(75, 75, 75);
  text-decoration: none;
}
a:focus {
  color: blueviolet;
}
ul {
    padding: 0;
  margin: 0;
  list-style: none;
}
nav>ul{
    display: flex;

}
</style>