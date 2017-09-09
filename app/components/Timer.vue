<template>
  <div>
    <p>{{ timerMin }} : {{ timerSec }}</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      seconds: {
        type: Number,
      },
    },
    computed: {
      timerMin() {
        return ('0' + Math.trunc(this.seconds / 60)).slice(-2);
      },
      timerSec() {
        return ('0' + this.seconds % 60).slice(-2);
      },
    },
    mounted() {
      setTimeout(() => {
        const timerId = setInterval(() => {
          this.seconds -= 1;
        }, 1000);
        setTimeout(() => clearInterval(timerId), this.seconds * 1000)
      }, 1000);
    },
  }
</script>

<style lang="scss" scoped>

</style>
