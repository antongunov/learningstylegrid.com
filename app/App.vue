<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <app-timer :seconds="300" @on-end=""></app-timer>
    <app-progress :current-question="1" :total-questions="12"></app-progress>
    <app-sentence></app-sentence>
  </div>
</template>

<script type="text/javascript">
  import Sentence from './components/Sentence.vue';
  import Timer from './components/Timer.vue';
  import Progress from './components/Progress.vue';

  export default {
    name: 'App',
    components: {
      appSentence: Sentence,
      appTimer: Timer,
      appProgress: Progress,
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
