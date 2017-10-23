<template>
  <div class="inventory">
    <div class="inventory_sentence">
      <transition name="fade" mode="out-in">
        <app-sentence
          :sentence="sentences[sentenceIndex]"
          :scores="scores[sentenceIndex]"
          :number="sentenceNumber"
          :key="sentenceIndex"
          @sentence-rank="sentenceRank"></app-sentence>
      </transition>
    </div>
    <div class="inventory__buttons">
      <button class="button button--secondary" @click="prevSentence">
        ← {{ checkPrev ? 'Prev' : 'Instructions' }}
      </button>
      <button class="button button--primary" @click="nextSentence">
        {{ checkNext ? 'Next' : 'Build Grid' }} →
      </button>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Sentence from './Sentence.vue';
  import sentences from '../sentences.json';

  export default {
    name: 'Inventory',
    props: {
      sentenceNumber: {
        type: Number,
        required: true,
      },
    },
    data () {
      return {
        sentences,
      };
    },
    computed: {
      sentenceIndex() {
        return this.sentenceNumber - 1;
      },
      scores() {
        return this.$store.getters.scores;
      },
      checkPrev() {
        return this.sentenceNumber > 1;
      },
      checkNext() {
        return this.sentenceNumber < this.sentences.length;
      },
    },
    components: {
      appSentence: Sentence,
    },
    methods: {
      prevSentence() {
        if (this.checkPrev) {
          this.$router.push(`/app/inventory/sentence-${this.sentenceNumber - 1}`);
        } else {
          this.$router.push('/app/instructions');
        }
      },
      nextSentence() {
        if (this.checkNext) {
          this.$router.push(`/app/inventory/sentence-${this.sentenceNumber + 1}`);
        } else {
          this.$router.push('/app/grid');
        }
      },
      sentenceRank(sentenceScores) {
        this.$store.dispatch('updateScores', {
          sentenceNumber: this.sentenceNumber,
          sentenceScores,
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
  .inventory {
    &__sentence {

    }

    &__buttons {
      margin: 1.5rem .15rem 0;
    }
  }
</style>
