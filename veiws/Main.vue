<template>
  <el-container>
    <el-aside width="400px">
      <common-aside />
    </el-aside>
    <el-container>
      <el-header height="44px">
        <common-head />
      </el-header>
      <el-main height="70%">
        <common-content />
      </el-main>
      <el-footer>
        <common-foot />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../src/components/CommonAside.vue'
import CommonHead from '../src/components/CommonHead.vue'
import CommonContent from '../src/components/CommonContent.vue'
import CommonFoot from '../src/components/CommonFoot.vue'
export default {
  name: 'Home',
  components: {
    CommonAside,
    CommonHead,
    CommonContent,
    CommonFoot
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>