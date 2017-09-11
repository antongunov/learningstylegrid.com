<template>
  <div>
    <p>{{ timerMin }} : {{ timerSec }}</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Timer',
    props: {
      seconds: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        counter: 0,
      };
    },
    computed: {
      timerMin() {
        return this.twoDigits(Math.trunc(this.counter / 60));
      },
      timerSec() {
        return this.twoDigits(this.counter % 60);
      },
    },
    methods: {
      twoDigits: (num) => ('0' + num).slice(-2),
    },
    mounted() {
      this.counter = this.seconds;
      setTimeout(() => {
        const timerId = setInterval(() => {
          this.counter -= 1;
        }, 1000);
        setTimeout(() => {
          clearInterval(timerId);
          this.$emit('on-end');
        }, this.seconds * 1000)
      }, 1000);
    },
  }
</script>

<style lang="scss" scoped>

</style>
