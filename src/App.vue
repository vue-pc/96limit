<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.navShow" :class="$route.meta.navShow ? 'container-bot' : '' "/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name:'App',
    components: {FooterGuide}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
