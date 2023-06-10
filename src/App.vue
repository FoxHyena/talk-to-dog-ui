<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body>
    <div class="navBar">
      <!-- <div class="navBar">
        awdadawdaw
       </div> -->

      <div class="talkToDogText">
        <img src="@/assets/phone-icon.svg" alt="Phone icon" class="phone" /> TALK TO DOG
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
}

.routerLinks a.router-link-active,
.routerLinks a.router-link-exact-active {
  color: black;
}

.routerLinks li {
  list-style-type: none;
  display: inline;
  margin: 10px;
}

.routerLinks a {
  text-decoration: none;
  color: rgb(62, 62, 62);
}

.routerLinks ul {
  padding: 0;
  margin: 0;
}
.navBar {
  background-color: #968181;
  margin: 20;
  display: flex;
  align-items: center;
  height: 100px;
}

.talkToDogText {
  font-family: 'Picnic';
  font-size: 3em;
}

.routerLinks {
  font-family: 'Picnic';
  margin: 0;
  padding: 0;
  font-size: 1.3em;
}
</style>
