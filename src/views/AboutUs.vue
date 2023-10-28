<template>
  <div class="main">
    <div class="about-page">
      <div class="section-title"><h1>About</h1></div>
      <div class="dev-about"><h2>About DTT Real Estate</h2></div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis voluptatem, corporis
          repellat, praesentium, magnam repellendus esse culpa fugit laudantium nulla obcaecati
          nihil. Obcaecati illo distinctio ipsam eum aspernatur. Provident! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ut quis voluptatem, corporis repellat,
        </p>
      </div>
      <div class="dev-tag">
        <h1>Design & Development</h1>
        <img src="../assets/images/img_logo_dtt@3x.png" alt="DTT" />
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
.dev-tag img {
  height: 85px;
  margin-top: 20px;
}
.dev-tag {
  margin-top: 30px;
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
    padding-top: 20px;
    margin: auto;
  }
  .section-title h1 {
    font-size: 18px;
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
