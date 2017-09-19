<template>
  <div>
    <app-progress
      :current-sentence="currentIndexSentence + 1"
      :total-sentences="sentences.length"
    ></app-progress>
    <app-timer
      :seconds="300"
    ></app-timer>
    <div>
      <app-sentence
        :sentence="sentences[currentIndexSentence]"
        :rank="ranks[currentIndexSentence]"
      ></app-sentence>
      <div>
        <button @click="onPrevSentence">Prev</button>
        <button @click="onNextSentence">Next</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Progress from './Progress.vue';
  import Timer from './Timer.vue';
  import Sentence from './Sentence.vue';

  export default {
    name: 'Inventory',
    props: {
      sentences: {
        type: Array,
        required: true,
      },
    },
    data () {
      const ranks = [];
      let i = this.sentences.length;
      while (i-- > 0) {
        ranks.push([
          0, // CE
          0, // RO
          0, // AC
          0, // AE
        ]);
      }
      return {
        currentIndexSentence: 0,
        ranks,
      };
    },
    methods: {
      checkPrev() {
        return this.currentIndexSentence > 0;
      },
      onPrevSentence() {
        if (this.checkPrev()) {
          this.currentIndexSentence--;
        }
      },
      checkNext() {
        return this.currentIndexSentence < this.sentences.length - 1;
      },
      checkRank() {
        const check =
          this.ranks[this.currentIndexSentence][0] > 0 &&
          this.ranks[this.currentIndexSentence][1] > 0 &&
          this.ranks[this.currentIndexSentence][2] > 0 &&
          this.ranks[this.currentIndexSentence][3] > 0;
        return check;
      },
      onNextSentence() {
        if (this.checkRank()) {
          if (this.checkNext()) {
            this.currentIndexSentence++;
          } else {
            this.$emit('on-complete', [ ...this.ranks ]);
          }
        }
      },
    },
    components: {
      appProgress: Progress,
      appTimer: Timer,
      appSentence: Sentence,
    },
  }
</script>

<style lang="scss" scoped>

</style>
