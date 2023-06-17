<script setup lang="ts">
withDefaults(
  defineProps<{
    header: string
    text?: string
    fontColor?: string
  }>(),
  {
    fontColor: 'black'
  }
)
</script>

<template>
  <div class="customBlock" :style="{ color: fontColor }">
    <!-- <slot /> -->
    <h1 class="header">{{ header }}</h1>
    <div class="text">{{ text }}</div>
    <slot />
  </div>
</template>

<style scoped>
.header {
  font-size: 1.4em;
}

.text {
  font-size: 1.1em;
}
.customBlock {
  width: 80%;
  max-width: 500px;
  margin: 10px auto 10px auto;
  border-radius: 5px;
  padding: 10px;
}
</style>
