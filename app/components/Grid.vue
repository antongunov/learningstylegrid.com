<template>
  <div>
    <h1>Grid</h1>
    <ul>
      <li>CE = {{ total[0] }}</li>
      <li>RO = {{ total[1] }}</li>
      <li>AC = {{ total[2] }}</li>
      <li>CE = {{ total[3] }}</li>
    </ul>
    <button @click="onRepeat">Repeat</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Grid',
    props: {
      ranks: {
        type: Array,
        required: true,
      }
    },
    computed: {
      total() {
        const total = [ 0, 0, 0, 0 ];
        this.ranks.forEach((rank) => {
          total[0] += rank[0]; // CE
          total[1] += rank[1]; // RO
          total[2] += rank[2]; // AC
          total[3] += rank[3]; // AE
        });
        return total;
      },
    },
    methods: {
      onRepeat() {
        this.$emit('on-repeat');
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
