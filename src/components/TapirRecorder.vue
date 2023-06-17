<template>
  <tapir-widget
    :time="2"
    backendEndpoint="https://your-endpoint.com/.netlify/functions/audio-message"
    buttonColor="#0096c7"
  />
</template>

<script lang="ts">
//@ts-expect-error untyped import
import TapirWidget from 'vue-audio-tapir'
import 'vue-audio-tapir/dist/vue-audio-tapir.css'

export default {
  name: 'App',
  components: {
    TapirWidget
  }
}
</script>
