<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script type="text/javascript">
  import sentences from './sentences.json';

  export default {
    name: 'App',
    created() {
      this.$store.dispatch('initScores', sentences.length);
    },
  }
</script>

<style lang="scss" scoped>

</style>
