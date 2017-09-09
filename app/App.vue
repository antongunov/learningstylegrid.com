<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <app-timer seconds="300"></app-timer>
    <app-sentence></app-sentence>
  </div>
</template>

<script type="text/javascript">
  import Sentence from './components/Sentence.vue';
  import Timer from './components/Timer.vue';

  export default {
    name: 'app',
    components: {
      appSentence: Sentence,
      appTimer: Timer,
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
