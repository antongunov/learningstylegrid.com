<template>
  <div class="sentence">
    <h1 class="sentence__title">{{ title }}</h1>
    <ul class="sentence__endings">
      <li v-for="(ending, style) in endings">
        <app-ending
          :ending="endings[style]"
          :score="sentenceScores[style]"
          @rank="rankEnding(style, $event)"></app-ending>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import Ending from './Ending.vue';

  export default {
    name: 'Sentence',
    props: {
      number: {
        type: Number,
        required: true,
      },
      begin: {
        type: String,
        required: true,
      },
      endings: {
        type: Object,
        required: true,
      },
      scores: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        sentenceScores: { ...this.scores },
      };
    },
    computed: {
      title() {
        return `#${this.number}. ${this.begin}...`;
      },
    },
    methods: {
      rankEnding(rankStyle, score) {
        this.sentenceScores[rankStyle] = score;
        Object.keys(this.sentenceScores).forEach(style => {
          if (style !== rankStyle && this.sentenceScores[style] === score) {
            this.sentenceScores[style] = 0;
          }
        });
        this.$emit('rank', this.sentenceScores);
      },
    },
    components: {
      appEnding: Ending,
    },
  }
</script>

<style lang="scss" scoped>
  .sentence {
    &__title {

    }

    &__endings {
      margin: 0 auto;
      max-width: 21rem;
    }
  }
</style>
