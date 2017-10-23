<template>
  <div class="inventory">
    <div class="inventory_sentence">
      <transition name="fade" mode="out-in">
        <app-sentence
          :sentence="sentences[sentenceIndex]"
          :scores="scores[sentenceIndex]"
          :number="sentenceIndex + 1"
          :key="sentenceIndex"></app-sentence>
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
        type: String,
        required: true,
      },
    },
    data () {
      return {
        sentences,
        sentenceIndex: Number.parseInt(this.sentenceNumber, 10) - 1,
      };
    },
    computed: {
      scores() {
        return this.$store.getters.scores;
      },
      checkPrev() {
        return this.sentenceIndex > 0;
      },
      checkNext() {
        return this.sentenceIndex < this.sentences.length - 1;
      },
    },
    watch: {
      sentenceNumber: function () {
        this.sentenceIndex = Number.parseInt(this.sentenceNumber, 10) - 1;
      },
    },
    components: {
      appSentence: Sentence,
    },
    methods: {
      prevSentence() {
        if (this.checkPrev) {
          this.$router.push(`/app/inventory/sentence-${this.sentenceIndex}`);
        } else {
          this.$router.push('/app/instructions');
        }
      },
      nextSentence() {
        if (this.checkNext) {
          this.$router.push(`/app/inventory/sentence-${this.sentenceIndex + 2}`);
        } else {
          this.$router.push('/app/grid');
        }
      },
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
