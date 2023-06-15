<script setup lang="ts">
defineProps<{
  header: string
  text: string
}>()
</script>

<template>
  <div class="customBlock">
    <!-- <slot /> -->
    <h1 class="header">{{ header }}</h1>
    <div>{{ text }}</div>
  </div>
</template>

<style scoped>
.header {
  font-size: 1.3em;
}
.customBlock {
  width: 80%;
  max-width: 500px;
  /* background-color: #00b4d8; */
  margin: 10px auto 10px auto;
  border-radius: 5px;
  padding: 10px;
}
</style>
