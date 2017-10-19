<template>
  <div class="inventory">
    <div>
      <app-sentence :sentence="sentences[index]" :scores="scores[index]"></app-sentence>
      <div class="inventory__buttons">
        <button class="button button--secondary" @click="prevSentence">
          ← {{ checkPrev ? 'Prev' : 'Instructions' }}
        </button>
        <button class="button button--primary" @click="nextSentence">
          {{ checkNext ? 'Next' : 'Build Grid' }} →
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Progress from './Progress.vue';
  import Timer from './Timer.vue';
  import Sentence from './Sentence.vue';

  import sentences from '../sentences.json';

  export default {
    name: 'Inventory',
    data () {
      return {
        sentences,
        index: 0,
      };
    },
    computed: {
      scores() {
        return this.$store.getters.scores;
      },
      checkPrev() {
        return this.index > 0;
      },
      checkNext() {
        return this.index < this.sentences.length - 1;
      },
    },
    components: {
      appProgress: Progress,
      appTimer: Timer,
      appSentence: Sentence,
    },
    methods: {
      prevSentence() {
        if (this.checkPrev) {
          this.index--;
        } else {
          this.$router.push('/app/instructions');
        }
      },
      nextSentence() {
        if (this.checkNext) {
          this.index++;
        } else {
          this.$router.push('/app/grid');
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .inventory {
    &__buttons {
      margin: 1.5rem .15rem 0;
    }
  }
</style>
