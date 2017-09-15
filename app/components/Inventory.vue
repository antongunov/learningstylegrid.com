<template>
  <div>
    <app-sentence :sentence="sentences[ndxSentence]"></app-sentence>
    <div>
      <button @click="prev">Prev</button>
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Sentence from './Sentence.vue';

  export default {
    name: 'Test',
    props: {
      sentences: {
        type: Array,
        required: true,
      },
    },
    data () {
      return {
        ndxSentence: 0,
        scores: [ 0, 0, 0, 0 ],
      };
    },
    methods: {
      prev() {
        if (this.ndxSentence > 0) {
          this.ndxSentence--;
        }
      },
      next() {
        if (this.ndxSentence + 1 < this.sentences.length) {
          this.ndxSentence++;
        }
      },
    },
    components: {
      appSentence: Sentence,
    },
  }
</script>

<style lang="scss" scoped>

</style>
