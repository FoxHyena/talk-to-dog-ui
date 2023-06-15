<script setup lang="ts">
import { onMounted, onDeactivated } from 'vue'
import { default as CoreWidget, type WidgetConfig } from '@mcaptcha/core-glue'

const props = defineProps<{ config: WidgetConfig; onSuccess?: (arg0: string) => void }>()

let token = ''

const setToken = (t: string) => (token = t)

function onVerifiedCallback(token: string) {
  console.log('verified', token)
  props.onSuccess && props.onSuccess(token)
  setToken(token)
}

const w = new CoreWidget(props.config, onVerifiedCallback)

onMounted(() => w.listen())
const cleanup = (): void => w.destroy()
onDeactivated(() => cleanup)
</script>

<template>
  <div class="mcaptcha__widget-container">
    <input
      id="mcaptcha__token"
      name="mcaptcha__token"
      :value="token"
      readonly
      hidden
      required
      type="text"
    />
    <iframe
      title="mCaptcha"
      :src="w.widgetLink.toString()"
      role="presentation"
      name="mcaptcha-widget__iframe"
      id="mcaptcha-widget__iframe"
      scrolling="no"
      sandbox="allow-same-origin allow-scripts allow-popups"
      width="100%"
      height="100%"
      frameBorder="0"
    />
  </div>
</template>

<style>
.mcaptcha__widget-container {
  width: 300px;
  height: 74px;
  background-color: white;
}
</style>
