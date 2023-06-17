<script setup lang="ts">
import type { WidgetConfig } from '@mcaptcha/core-glue'
import MCaptcha from './mCaptcha/Widget.vue'
import { ref } from 'vue'
import TapirRecorder from './TapirRecorder.vue'
import Block from './Block.vue'

const config: WidgetConfig = {
  widgetLink: new URL('https://captcha.talkto.dog/widget/?sitekey=oBg0O7oZtCoVXJui7AuQcoGDLu1yazxt')
}

const isHuman = ref(false)

function onSuccess(token?: string) {
  if (token) {
    setTimeout(() => {
      isHuman.value = true
    }, 500)
  }
}
</script>

<template>
  <div class="contributionContainer">
    <Block
      header="Want to contribute to Talk to Dog?"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium fusce id velit ut tortor pretium viverra suspendisse. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Rhoncus aenean vel elit scelerisque mauris pellentesque. Risus nullam eget felis eget nunc. Duis at tellus at urna condimentum. Justo nec ultrices dui sapien eget mi proin. Lacinia quis vel eros ."
      fontColor="black"
    >
    </Block>
    <div class="contribution">
      <div v-if="!isHuman" class="mCaptcha">
        <MCaptcha :config="config" :onSuccess="onSuccess" />
      </div>
      <div v-else><TapirRecorder /></div>
    </div>
  </div>
</template>

<style scoped>
.contributionContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 75%;
  margin: 20px auto;
  justify-content: center;
  gap: 10px;
}

@media (max-width: 800px) {
  .contributionContainer {
    flex-direction: column;
    width: 100%;
  }
}

.contribution {
  display: flex;
  justify-content: center;
  margin: auto;
}
</style>
