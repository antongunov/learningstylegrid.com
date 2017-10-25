<template>
  <div class="grid">
    <h1>Learning Style Grid</h1>
    <div class="grid__radar-chart">
      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" v-html="svgRadarChart"></svg>
    </div>
    <div class="grid__buttons">
      <button class="button button--secondary" @click="backInventory">← Inventory</button>
    </div>
  </div>
</template>

<script type="text/javascript">
  import radarChart from 'svg-radar-chart';
  import toHTML from 'virtual-dom-stringify';

  const captions = {
    CE: 'CE', // Concrete Experience
    RO: 'RO', // Reflective Observation
    AC: 'AC', // Abstract Conceptualization
    AE: 'AE', // Active Experimentation
  };

  const renderOptions = {
    axes: true,
    scales: 8,
    size: 100,
    // remove captions and free space
    captions: false,
    captionsPosition: 1,
    axisProps() {
      return {
        className: 'radar-chart__axis',
      };
    },
    scaleProps() {
      return {
        className: 'radar-chart__scale',
        fill: 'none',
      };
    },
    shapeProps({ color = '#73c873' }) {
      return {
        className: 'radar-chart__shape',
        fill: color,
        stroke: color,
      };
    },
  };

  const normalize = (scores, maxScore) => {
    return {
      CE: scores.CE / maxScore,
      RO: scores.RO / maxScore,
      AC: scores.AC / maxScore,
      AE: scores.AE / maxScore,
    };
  };

  export default {
    name: 'Grid',
    data() {
      return {
        svgRadarChart: null,
      };
    },
    computed: {
      scoreCount() {
        return this.$store.getters.scoreCount;
      },
      maxScore() {
        return 4 * this.scoreCount;
      },
      scoreTotal() {
        return this.$store.getters.scoreTotal;
      },
      sentenceCount() {
        return this.$store.getters.sentenceCount;
      },
    },
    methods: {
      backInventory() {
        this.$router.push(`/app/inventory/sentence-${this.sentenceCount}`);
      },
    },
    mounted () {
      const chart = radarChart(captions, [ normalize(this.scoreTotal, this.maxScore) ], renderOptions);
      this.svgRadarChart = toHTML(chart);
    }
  }
</script>

<style lang="scss" scoped>
  .grid {
    &__radar-chart {
      margin: 0 auto;
      max-width: 25rem;
    }

    &__buttons {
      margin: 1.5rem .15rem 0;
    }
  }
</style>
