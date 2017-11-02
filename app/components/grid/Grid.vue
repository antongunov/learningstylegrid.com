<template>
  <div class="grid">
    <h1>Learning Style Grid</h1>
    <div class="grid__wrapper">
      <div class="grid__error-message" v-if="scoreSum !== (1 + 2 + 3 + 4) * scoreCount">
        <p>Sorry, but you did not rank all sentences <i class="fa fa-lg fa-frown-o"></i></p>
      </div>
      <div v-else>
        <div class="grid__chart">
          <app-chart
            :score-total="scoreTotal"
            @define-learning-style="learningStyle = $event"></app-chart>
        </div>
        <div class="grid__learning-style">
          <p>You have the <strong>{{ learningStyle.name }}</strong> learning style.</p>
        </div>
      </div>
      <div class="grid__buttons">
        <button class="button button--secondary" @click="backInventory">← Inventory</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import Chart from './Chart.vue';

  export default {
    name: 'Grid',
    data() {
      return {
        learningStyle: {
          name: 'Undefined',
        },
      };
    },
    computed: mapGetters([
      'scoreCount',
      'scoreSum',
      'scoreTotal',
      'sentenceCount',
    ]),

    components: {
      appChart: Chart,
    },
    methods: {
      backInventory() {
        this.$router.push(`/app/inventory/sentence-${this.sentenceCount}`);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .grid {
    &__wrapper {
      margin: 0 auto;
      max-width: 19.5rem;
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

    }

    &__chart {

    }

    &__buttons {
      margin: 1.5rem .15rem 0;
    }
  }
</style>
