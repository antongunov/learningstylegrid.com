<template>
  <div>
    <h1>Grid</h1>
    <ul>
      <li>CE = {{ totalScores.CE }}</li>
      <li>RO = {{ totalScores.RO }}</li>
      <li>AC = {{ totalScores.AC }}</li>
      <li>CE = {{ totalScores.CE }}</li>
    </ul>
    <router-link to="/app/inventory" tag="button" class="button button--secondary">← Inventory</router-link>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Grid',
    computed: {
      totalScores() {
        return this.$store.getters.totalScores;
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
