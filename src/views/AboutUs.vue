<template>
  <div class="main">
    <div class="about-page">
      <div class="section-title"><h1>About</h1></div>
      <div class="dev-about"><h1>About Living - Real Estate</h1></div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis voluptatem, corporis
          repellat, praesentium, magnam repellendus esse culpa fugit laudantium nulla obcaecati
          nihil. Obcaecati illo distinctio ipsam eum aspernatur. Provident! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ut quis voluptatem, corporis repellat,
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style>
.about-page {
  padding-left: 15px;
  padding-right: 15px;
}
.dev-about {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
  height: 80px;
}
p {
  font-size: 18px;
  color: #4a4b4c;
}
.section-title {
  display: none;
}
@media only screen and (max-width: 768px) {
  .section-title {
    display: block;
    text-align: center;
    padding-top: 22px;
    margin: auto;
  }
  .dev-about {
    display: flex;
    justify-content: space-between;
    margin-top: 55px;
    align-items: center;
    height: 1px;
  }
  h1 {
    font-size: 18px;
  }
  h2 {
    font-size: 14px;
  }
  .dev-tag img {
    height: 45px;
  }
  p {
    font-size: 12px;
  }
}
</style>
