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
      this.$store.dispatch('initRanks', sentences.length);
    },
  }
</script>

<style lang="scss" scoped>
  .fade {
    &-enter {
      opacity: 0;
      &-active {
        transition: opacity .3s ease;
      }
    }
    &-leave {
      &-active {
        transition: opacity .3s ease;
        opacity: 0;
      }
    }
  }
</style>
