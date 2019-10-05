<template>
  <div class="home">
    <center>
      <b-alert show variant="dark" class="title">1A2B 猜數字遊戲</b-alert>
      <router-link to="/cmp_qes">
        <b-card border-variant="success" header="電腦出題" align="center" class="item-card">
          <b-card-text>此模式，將會由電腦隨機出題。</b-card-text>
        </b-card>
      </router-link>

      <router-link to="/user_qes">
        <b-card border-variant="info" header="使用者出題" align="center" class="item-card">
          <b-card-text>此模式，使用者可自行出題後，交由另一位玩家遊玩。</b-card-text>
        </b-card>
      </router-link>

      <a href="https://hanc1027.github.io/" target="_blank">
        <b-card
          border-variant="warning"
          header="作者Blog"
          header-bg-variant="transparent"
          align="center"
          class="item-card"
        >
          <b-card-text>點選後即可瀏覽作者作部落格。</b-card-text>
        </b-card>
      </a>
    </center>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  metaInfo: {
    title: "1A2B 猜數字"
  },
  components: {}
};
</script>

<style scoped>
.title {
  margin-top: 20px;
  width: 30%;
  font-size: 25px;
  color: teal;
  text-shadow: 0px 3px 0px #b2a98f, 0px 14px 10px rgba(0, 0, 0, 0.15),
    0px 24px 2px rgba(0, 0, 0, 0.1), 0px 34px 30px rgba(0, 0, 0, 0.1);
}
.item-card {
  width: 35%;
  margin-top: 20px;
  
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: blue;
  text-decoration: underline;
}
</style>
