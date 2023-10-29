<template>
  <header>
    <HeaderMenu />
  </header>
  <router-view></router-view>
  <footer>
    <FooterMenu />
  </footer>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'
import FooterMenu from '@/components/FooterMenu.vue'

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

.wrapper {
  margin: 0;
  background-image: url('@/assets/images/img_background@3x.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.main {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

footer {
  display: none;
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
input,
textarea {
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
