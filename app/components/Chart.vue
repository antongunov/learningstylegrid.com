<template>
  <div class="chart">
    <div class="chart__table">
      <table>
        <tr v-for="keys in styleKeyGrid">
          <td
            v-for="key in keys"
            class="learning-style"
            :class="{
              'learning-style--defined': learningStyles[key].name === defineLearningStyle.name
            }">{{ learningStyles[key].name }}</td>
        </tr>
      </table>
      <div class="point" :style="pointPosition"></div>
    </div>
    <div class="chart__source-data">
      <p>
        <span title="Abstract Conceptualization">AC= {{ scoreTotal.AC }}</span>
        <span title="Concrete Experience">CE= {{ scoreTotal.CE }}</span>
        <span title="Active Experimentation">AE= {{ scoreTotal.AE }}</span>
        <span title="Reflective Observation">RO= {{ scoreTotal.RO }}</span>
        <span>|</span>
        <span title="AC - CE">ACCE= {{ ACCE }}</span>
        <span title="AE - RO">AERO= {{ AERO }}</span>
      </p>
    </div>
  </div>
</template>

<script type="text/javascript">
  import percentiles from './percentiles.json';
  import learningStyles from './learning-styles.json';

  export default {
    name: 'Chart',
    props: {
      scoreTotal: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        ACCE: this.scoreTotal.AC - this.scoreTotal.CE,
        AERO: this.scoreTotal.AE - this.scoreTotal.RO,
        learningStyles,
        styleKeyGrid: [
          [ 'initiating', 'experiencing', 'creating' ],
          [ 'acting', 'balancing', 'reflecting' ],
          [ 'deciding', 'thinking', 'analyzing' ],
        ],
      };
    },
    computed: {
      defineLearningStyle() {
        let style = {};

        if (this.ACCE < 6 && this.AERO > 11) {
          style = learningStyles.initiating;
        } else if (this.ACCE < 6 && this.AERO > 0 && this.AERO < 12) {
          style = learningStyles.experiencing;
        } else if (this.ACCE < 6 && this.AERO < 1) {
          style = learningStyles.creating;
        } else if (this.ACCE > 5 && this.ACCE < 15 && this.AERO < 1) {
          style = learningStyles.reflecting;
        } else if (this.ACCE > 14 && this.AERO < 1) {
          style = learningStyles.analyzing;
        } else if (this.ACCE > 14 && this.AERO > 0 && this.AERO < 12) {
          style = learningStyles.thinking;
        } else if (this.ACCE > 14 && this.AERO > 11) {
          style = learningStyles.deciding;
        } else if (this.ACCE > 5 && this.ACCE < 15 && this.AERO > 11) {
          style = learningStyles.acting;
        } else if (this.ACCE > 5 && this.ACCE < 15 && this.AERO > 0 && this.AERO < 12) {
          style = learningStyles.balancing;
        } else {
          style = {
            name: 'Undefined',
          };
        }

        this.$emit('define-learning-style', style);

        return style;
      },
      pointPosition() {
        const y = this.percentile('ACCE');
        const x = this.percentile('AERO');

        const sizeTable = 19.5;
        const diameterPoint = 2;
        const offset = 100 * ((diameterPoint / sizeTable) / 2);

        return {
          top: y - offset + '%',
          left: (100 - x) - offset + '%',
        };
      },
    },
    methods: {
      percentile(type) {
        const value = this[type];
        const offset = percentiles[type].offset;
        const maxValue = percentiles[type].data.length - offset;

        let percent = 0;

        if (value + offset < 0) {
          percent = 0;
        } else if (value > maxValue) {
          percent = 100;
        } else {
          percent = percentiles[type].data[value + offset];
        }

        return percent;
      },
    },
  }
</script>

<style lang="scss" scoped>
  .chart {
    $sizeTable: 19.5rem;

    &__table {
      position: relative;

      table {
        background-color: $color-white;
        border-collapse: collapse;
        border: .2rem solid darken($color-primary, 10);
      }

      td {
        border: .15rem solid darken($color-primary, 10);
        font-size: .9rem;
        height: $sizeTable/3;
        text-align: center;
        width: $sizeTable/3;
      }
    }

    &__source-data {
      color: lighten($color-black, 20);
      font-size: .7rem;
      text-align: center;
    }
  }

  .point {
    $diameter: 2rem;

    background-color: rgba($color-blue, .8);
    border-radius: 50%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .17);
    height: $diameter;
    position: absolute;
    width: $diameter;
  }

  .learning-style {
    &--defined {
      background-color: lighten($color-primary, 5);
      color: $color-white;
      font-weight: 600;
    }
  }
</style>
