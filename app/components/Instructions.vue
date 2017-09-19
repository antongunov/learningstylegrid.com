<template>
  <div>
    <h1>Instructions</h1>
    <div>
      <button @click="onStart">Start</button>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Instructions',
    methods: {
      onStart() {
        this.$emit('on-start');
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
