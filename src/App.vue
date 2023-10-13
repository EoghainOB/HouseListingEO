<template>
  <header>
    <HeaderMenu />
  </header>
  <div class="wrapper">
    <router-view></router-view>
  </div>
  <footer>
    <FooterMenu />
  </footer>
</template>

<script>
import HeaderMenu from './components/headerMenu.vue'
import FooterMenu from './components/footerMenu.vue'

export default {
  components: { HeaderMenu, FooterMenu }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;1,500&family=Noto+Sans+Display:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@600&family=Open+Sans:wght@400;600&display=swap');

body {
  display: block;
  margin: 0;
  padding: 0;
  background-color: #f6f6f6;
}

footer {
  display: none;
}

.wrapper {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

h1,
h2,
h3,
a,
label {
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
}

h4,
h5,
p,
input {
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
}

h1 {
  font-size: 32px;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

p {
  line-height: 2;
}

@media only screen and (max-width: 768px) {
  .wrapper {
    width: 100%;
    margin: 0px;
  }
  header {
    display: none;
  }
  footer {
    display: block;
  }
  h1 {
    font-size: 18px;
  }
}
</style>
