<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <app-sentence></app-sentence>
  </div>
</template>

<script type="text/javascript">
  import Sentence from './components/Sentence.vue';

  export default {
    name: 'app',
    components: {
      appSentence: Sentence,
    },
    data () {
      return {
        msg: 'Welcome to Learning Style Grid!'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
