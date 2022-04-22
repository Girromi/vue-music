<template>
  <div>
    <audio :src="musicUrl" autoplay="autoplay" controls="controls"></audio>
  </div>
</template>

<script>
import vueEvent from '../assets/mitt'
export default {
  data () {
    return {
      musicUrl: ""
    }
  },
  created () {
    vueEvent.on('go', v => {
      this.musicUrl = v
      console.log(v)
    })
  }
}
</script>

<style>
</style>