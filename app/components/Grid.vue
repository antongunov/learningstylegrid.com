<template>
  <div>
    <h1>Grid</h1>
    <ul>
      <li v-for="rank in ranks">{{ rank }}</li>
    </ul>
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
  }
</script>

<style lang="scss" scoped>

</style>
