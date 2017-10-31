<template>
  <div class="score">
    <div class="score__title">{{ title }}</div>
    <div class="score__progress">
      <div class="progress" :style="progressWidth">{{ score }}</div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Score',
    props: {
      title: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        required: true,
      },
      'max-score': {
        type: Number,
        required: true,
      }
    },
    computed: {
      percentages() {
        return 100 * this.score/this.maxScore;
      },
      progressWidth() {
        return {
          width: this.percentages + '%',
        };
      },
    },
  }
</script>

<style lang="scss" scoped>
  .score {
    &__title {
      text-align: left;
    }

    &__progress {
      background-color: $color-white;
      border: 2px solid $color-primary;
      text-align: left;
    }
  }

  .progress {
    background-color: $color-primary;
    color: $color-white;
    padding: 0 .5rem;
  }
</style>
