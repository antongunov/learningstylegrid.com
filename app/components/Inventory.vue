<template>
  <div>
    <app-progress :current-sentence="index + 1" :total-sentences="sentences.length"></app-progress>
    <app-timer :seconds="300"></app-timer>
    <div>
      <app-sentence :sentence="sentences[index]" :rank="ranks[index]"></app-sentence>
      <div>
        <button @click="prevSentence">Prev</button>
        <button @click="nextSentence">Next</button>
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
      'ranks',
    ]),
    methods: {
      checkPrev() {
        return this.index > 0;
      },
      prevSentence() {
        if (this.checkPrev()) {
          this.index--;
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
    components: {
      appProgress: Progress,
      appTimer: Timer,
      appSentence: Sentence,
    },
  }
</script>

<style lang="scss" scoped>

</style>
