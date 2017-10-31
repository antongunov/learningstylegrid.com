<template>
  <div class="scores">
    <ul class="scores__list">
      <li class="scores__item">
        <app-score title="Experiencing" :score="scores.CE" :maxScore="maxScore"></app-score>
      </li>
      <li class="scores__item">
        <app-score title="Thinking" :score="scores.AC" :maxScore="maxScore"></app-score>
      </li>
      <li class="scores__item">
        <app-score title="Doing" :score="scores.AE" :maxScore="maxScore"></app-score>
      </li>
      <li class="scores__item">
        <app-score title="Reflecting" :score="scores.RO" :max-score="maxScore"></app-score>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import Score from './Score.vue';

  export default {
    name: 'Scores',
    props: {
      scores: {
        type: Object,
        required: true,
      },
      'max-score': {
        type: Number,
        required: true,
      }
    },
    components: {
      appScore: Score,
    },
  }
</script>

<style lang="scss" scoped>
  .scores {
    &__list {

    }

    &__item {
      margin-bottom: .3rem;
    }
  }
</style>
