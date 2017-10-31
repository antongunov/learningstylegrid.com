<template>
  <div class="grid">
    <h1>Learning Style Grid</h1>
    <div class="grid__wrapper">
      <div class="grid__error-message" v-if="scoreSum !== (1 + 2 + 3 + 4) * scoreCount">
        <p>Sorry, but you did not rank all sentences <i class="fa fa-lg fa-frown-o"></i></p>
      </div>
      <div v-else>
        <div class="grid__scores">
          <app-scores :scores="scoreTotal" :max-score="maxScore"></app-scores>
        </div>
        <div class="grid__radar-chart">
          <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" v-html="svgRadarChart"></svg>
        </div>
        <div class="grid__learning-style">
          <p>
            You have {{ learningStyle ? 'the' : 'a balancing' }}
            <a
              href="https://en.wikipedia.org/wiki/Kolb's_experiential_learning#Kolb.27s_learning_styles"
              target="_blank"
              v-if="learningStyle">{{ learningStyle }}</a>
            style.
          </p>
        </div>
      </div>
      <div class="grid__buttons">
        <button class="button button--secondary" @click="backInventory">← Inventory</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Scores from './Scores.vue';

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
    scales: 0,
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
      learningStyle() {
        const { CE, RO, AC, AE } = this.scoreTotal;
        let style = '';
        if (CE > AC && AE > RO) style = 'Accommodating';
        if (CE > AC && AE < RO) style = 'Diverging';
        if (CE < AC && AE > RO) style = 'Converging';
        if (CE < AC && AE < RO) style = 'Assimilating';
        return style;
      },
      scoreSum() {
        return this.$store.getters.scoreSum;
      },
    },
    components: {
      appScores: Scores,
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
    &__wrapper {
      margin: 0 auto;
      max-width: 18rem;
    }

    &__error-message {
      color: $color-red;
      font-weight: 600;

      i {
        background-color: $color-white;
        border-radius: 50%;
        color: $color-red;
        font-size: 1.5rem;
      }
    }

    &__learning-style {
      font-weight: 600;
    }

    &__radar-chart {

    }

    &__scores {
      margin-bottom: 2rem;
    }

    &__buttons {
      margin: 1.5rem .15rem 0;
    }
  }
</style>
