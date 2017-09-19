<template>
  <div>
    <p>Sentence {{ currentSentence }} of {{ totalSentences }}</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Progress',
    props: {
      currentSentence: {
        type: Number,
        required: true,
      },
      totalSentences: {
        type: Number,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
