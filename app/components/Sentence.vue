<template>
  <div>
    <h1>{{ begin }}</h1>
    <ul>
      <li v-for="end in ends">
        <p>{{ end }}</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        begin: 'Begin sentence...',
        ends: [
          '...end (A)',
          '...end (B)',
          '...end (C)',
          '...end (D)',
        ],
      };
    },
  }
</script>

<style lang="scss" scoped>

</style>
