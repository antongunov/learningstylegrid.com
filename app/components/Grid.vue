<template>
  <div>
    <h1>Grid</h1>
    <ul>
      <li>CE = {{ total[0] }}</li>
      <li>RO = {{ total[1] }}</li>
      <li>AC = {{ total[2] }}</li>
      <li>CE = {{ total[3] }}</li>
    </ul>
    <router-link to="/app/inventory" tag="button">Inventory</router-link>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Grid',
    computed: {
      total() {
        const total = [ 0, 0, 0, 0 ];
        this.$store.getters.ranks.forEach((rank) => {
          total[0] += rank[0]; // CE
          total[1] += rank[1]; // RO
          total[2] += rank[2]; // AC
          total[3] += rank[3]; // AE
        });
        return total;
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
