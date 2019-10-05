<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <router-link to="/">
          <div class="nar-item">Home</div>
        </router-link>
        <router-link to="/cmp_qes">
          <div class="nar-item">電腦出題</div>
        </router-link>
        <router-link to="/user_qes">
          <div class="nar-item">使用者出題</div>
        </router-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
b-navbar{
  text-align: center;
}
.nar-item{
  margin: 5px 3px;
  font-size: 18px;
  color:aliceblue;
  border: 1.5px wheat solid;
  padding: 2px
}
.nar-item:hover{
  background: rgb(245, 189, 189);
  color:darkslateblue
}
</style>