<template>
  <div id="app">
    <app-instructions v-if="currentCmp === 'app-instructions'"
      @on-start="onStartInventory"
    ></app-instructions>
    <app-inventory v-else-if="currentCmp === 'app-inventory'"
      :sentences="sentences"
      @on-complete="onCompleteInventory"
    ></app-inventory>
    <app-grid v-else-if="currentCmp === 'app-grid'"
      :ranks="ranks"
    ></app-grid>
  </div>
</template>

<script type="text/javascript">
  import Instructions from './components/Instructions.vue';
  import Inventory from './components/Inventory.vue';
  import Grid from './components/Grid.vue';

  import sentences from './sentences.json';

  export default {
    name: 'App',
    data () {
      return {
        currentCmp: 'app-instructions',
        sentences,
        ranks: null,
      };
    },
    methods: {
      onStartInventory() {
        this.ranks = [];
        this.currentCmp = 'app-inventory';
      },
      onCompleteInventory(ranks) {
        this.ranks = ranks;
        this.currentCmp = 'app-grid';
      },
    },
    components: {
      appInstructions: Instructions,
      appInventory: Inventory,
      appGrid: Grid,
    },
  }
</script>

<style lang="scss" scoped>

</style>
