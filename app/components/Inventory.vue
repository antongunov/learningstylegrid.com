<template>
  <div class="inventory">
    <div class="inventory_sentence">
      <transition name="fade" mode="out-in">
        <app-sentence
          :number="sentenceNumber"
          :begin="sentence.begin"
          :endings="sentence.endings"
          :scores="sentenceScores"
          :key="sentenceNumber"
          @rank="rankSentence"></app-sentence>
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

  export default {
    name: 'Inventory',
    props: {
      sentenceNumber: {
        type: Number,
        required: true,
      },
    },
    computed: {
      sentenceCount() {
        return this.$store.getters.sentenceCount;
      },
      sentence() {
        return this.$store.getters.sentence(this.sentenceNumber);
      },
      sentenceScores() {
        return this.$store.getters.sentenceScores(this.sentenceNumber);
      },
      checkPrev() {
        return this.sentenceNumber > 1;
      },
      checkNext() {
        return this.sentenceNumber < this.sentenceCount;
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
      rankSentence(sentenceScores) {
        this.$store.dispatch('updateScores', {
          number: this.sentenceNumber,
          scores: sentenceScores,
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
