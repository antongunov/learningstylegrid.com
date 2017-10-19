<template>
  <div class="inventory">
    <div>
      <app-sentence :sentence="sentences[index]" :scores="scores[index]"></app-sentence>
      <div class="inventory__buttons">
        <button @click="prevSentence" class="button button--secondary">← Prev</button>
        <button @click="nextSentence" class="button button--primary">Next →</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Progress from './Progress.vue';
  import Timer from './Timer.vue';
  import Sentence from './Sentence.vue';

  import { mapGetters } from 'vuex';

  import sentences from '../sentences.json';

  export default {
    name: 'Inventory',
    data () {
      return {
        sentences,
        index: 0,
      };
    },
    computed: mapGetters([
      'scores',
    ]),
    components: {
      appProgress: Progress,
      appTimer: Timer,
      appSentence: Sentence,
    },
    methods: {
      checkPrev() {
        return this.index > 0;
      },
      prevSentence() {
        if (this.checkPrev()) {
          this.index--;
        } else {
          this.$router.push('/app');
        }
      },
      checkNext() {
        return this.index < this.sentences.length - 1;
      },
      nextSentence() {
        if (this.checkNext()) {
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
