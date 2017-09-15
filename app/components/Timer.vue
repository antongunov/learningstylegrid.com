<template>
  <div>
    <p>{{ timerMin | n-digits(2) }} : {{ timerSec | n-digits(2) }}</p>
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
        return Math.trunc(this.counter / 60);
      },
      timerSec() {
        return this.counter % 60;
      },
    },
    filters: {
      'n-digits': (v, n) => (new Array(n).join('0') + v).slice(-n),
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
