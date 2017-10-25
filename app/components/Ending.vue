<template>
  <div class="ending">
    <div class="ending__title">
      <p>{{ title }}</p>
    </div>
    <div class="ending__score-buttons">
      <ul class="score-buttons score-buttons__list">
        <li v-for="score in 4" class="score-buttons__item">
          <a
            class="score-button" :class="{ 'score-button--ranked': score === endingScore }"
            @click="rank(score)">{{ score }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Ending',
    props: {
      ending: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        default() { return 0; },
      },
    },
    data() {
      return {
        endingScore: this.score,
      };
    },
    computed: {
      title() {
        return `...${this.ending}`;
      },
    },
    watch: {
      score: function () {
        this.endingScore = this.score;
      },
    },
    methods: {
      rank(score) {
        this.endingScore = this.endingScore === score ? 0 : score;
        this.$emit('rank', this.endingScore);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .ending {
    &__title {

    }

    &__score-buttons {
      margin-bottom: 1rem;
    }
  }

  .score-buttons {
    &__list {

    }

    &__item {
      display: inline-block;
      margin-bottom: .5rem;
    }
  }

  .score-button {
    $border-size: .2rem;
    $scale: 1.2;
    $size: ($font-height + 2 * $border-size) * $scale;

    background-color: $color-white;
    border-radius: 50%;
    border: $border-size solid darken($color-primary, 10);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .17);
    color: $color-black;
    display: block;
    height: $size;
    line-height: $font-height * $scale;
    margin: 0 .3rem;
    text-align: center;
    width: $size;

    &:hover {
      background-color: darken($color-primary, 10);
      cursor: pointer;
      color: $color-white;
    }

    &--ranked {
      background-color: $color-primary;
      transition: .3s;
      color: $color-white;
    }
  }
</style>
