<template>
  <div id="app">
    <app-timer :seconds="300" @on-end=""></app-timer>
    <app-progress :current-question="1" :total-questions="12"></app-progress>
    <app-inventory :sentences="sentences"></app-inventory>
  </div>
</template>

<script type="text/javascript">
  import Progress from './components/Progress.vue';
  import Inventory from './components/Inventory.vue';
  import Timer from './components/Timer.vue';

  import sentences from './sentences.json';

  export default {
    name: 'App',
    data () {
      return {
        sentences,
      };
    },
    components: {
      appProgress: Progress,
      appInventory: Inventory,
      appTimer: Timer,
    },
  }
</script>

<style lang="scss" scoped>

</style>
