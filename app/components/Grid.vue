<template>
  <div>
    <h1>Grid</h1>
    <ul>
      <li>CE = {{ total.CE }}</li>
      <li>RO = {{ total.RO }}</li>
      <li>AC = {{ total.AC }}</li>
      <li>CE = {{ total.CE }}</li>
    </ul>
    <router-link to="/app/inventory" tag="button" class="button button--secondary">← Inventory</router-link>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Grid',
    computed: {
      total() {
        let [ CE, RO, AC, AE ] = [ 0, 0, 0, 0];
        this.$store.getters.scores.forEach((sentenceScores) => {
          CE += sentenceScores.CE;
          RO += sentenceScores.RO;
          AC += sentenceScores.AC;
          AE += sentenceScores.AE;
        });
        return { CE, RO, AC, AE };
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
