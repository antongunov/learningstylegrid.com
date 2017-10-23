<template>
  <div class="sentence">
    <h1 class="sentence__title">{{ title }}</h1>
    <ul>
      <li v-for="(ending, style) in sentence.endings" >
        <app-ending
          :text="sentence.endings[style]"
          :score="sentenceScores[style]"
          @rank="rank(style, $event)"
        ></app-ending>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import Ending from './Ending.vue';

  export default {
    name: 'Sentence',
    props: {
      sentence: {
        type: Object,
        required: true,
      },
      scores: {
        type: Object,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        sentenceScores: Object.assign({}, this.scores),
      };
    },
    computed: {
      title() {
        return `#${this.number}. ${this.sentence.begin}...`;
      },
    },
    methods: {
      rank(rankStyle, score) {
        this.sentenceScores[rankStyle] = score;
        Object.keys(this.sentenceScores).forEach(style => {
          if (style !== rankStyle && this.sentenceScores[style] === score) {
            this.sentenceScores[style] = 0;
          }
        });
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
  }
</style>
