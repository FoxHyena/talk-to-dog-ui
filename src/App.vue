<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body>
    <div class="navBar">
      <div class="talkToDogText">
        <img src="@/assets/phone-icon.svg" alt="Phone icon" class="phone" />TALK TO DOG
      </div>
      <div class="routerLinks">
        <ul>
          <li><RouterLink to="/">About</RouterLink></li>
          <li><RouterLink to="/contribute">Contribute</RouterLink></li>
        </ul>
      </div>
    </div>

    <RouterView />
  </body>
</template>

<style scoped>
@media only screen and (max-width: 60000px) {
  .navBar {
    justify-content: center;
    flex-direction: column;
  }
}

.phone {
  height: 0.6em;
  fill: white;
  float: left;
}

.routerLinks a.router-link-active,
.routerLinks a.router-link-exact-active {
  color: white;
  border-bottom: 2px solid white;
}

.routerLinks li {
  list-style-type: none;
  display: inline;
  margin: 10px;
}

.routerLinks a {
  text-decoration: none;
  color: #90e0ef;
}

.routerLinks ul {
  padding: 0;
  margin: 0;
}
.navBar {
  background-color: #0096c7;
  margin: 20;
  display: flex;
  align-items: center;
  height: 120px;
}

.talkToDogText {
  font-family: 'Picnic';
  font-size: 3rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.routerLinks {
  font-family: 'Picnic';
  margin: 0;
  padding: 0;
  font-size: 1.3em;
}
</style>
