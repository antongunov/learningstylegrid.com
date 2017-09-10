<template>
  <div>
    <p>Question {{ currentQuestion }} of {{ totalQuestions }}</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      currentQuestion: {
        type: Number,
        required: true,
      },
      totalQuestions: {
        type: Number,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
