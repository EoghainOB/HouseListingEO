<template>
  <div class="devAbout"><h1>About DTT Real Estate</h1></div>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis voluptatem, corporis
      repellat, praesentium, magnam repellendus esse culpa fugit laudantium nulla obcaecati nihil.
      Obcaecati illo distinctio ipsam eum aspernatur. Provident! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Ut quis voluptatem, corporis repellat,
    </p>
  </div>
  <div class="devTag">
    <h1>Design & Development</h1>
    <img src="../components/images/img_logo_dtt@3x.png" alt="DTT" />
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style>
.devAbout {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
  height: 80px;
  margin-top: 30px;
}
.devTag img {
  height: 85px;
}

p {
  font-size: 18px;
  color: #4a4b4c;
}
</style>
