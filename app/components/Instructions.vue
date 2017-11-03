<template>
  <div class="instructions">
    <h1 class="instructions__title">Instructions for the <abbr title="Learning Style Inventory">LSI</abbr></h1>
    <ol class="instructions__list">
      <li class="instructions__item instruction">
        <span class="instruction__text" v-once>Rank the endings for {{ sentenceCount }} sentences: 4 for most like you, 1 for least like you.</span>
      </li>
      <li class="instructions__item instruction">
        <span class="instruction__text">Do not give two ending the same ranking.</span>
      </li>
      <li class="instructions__item instruction">
        <span class="instruction__text">Use your first impression.</span>
      </li>
      <li class="instructions__item instruction">
        <span class="instruction__text">Should take no more than 5 minutes.</span>
      </li>
    </ol>
    <router-link to="/app/inventory" tag="a" class="instructions__button button button--primary">Start Inventory</router-link>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Instructions',
    computed: {
      sentenceCount() {
        return this.$store.getters.sentenceCount;
      },
    },
  }
</script>

<style lang="scss" scoped>
  .instructions {
    &__title {
      abbr[title] {
        border-bottom: none;
        cursor: inherit;
        text-decoration: none;
      }
    }

    &__list {
      counter-reset: li;
      display: table;
      margin: 0 auto;
      max-width: 340px;
      padding: 0 0 3rem 0;
    }

    &__item {
      text-align: left;
    }
  }

  .instruction {
    display: table-row;
    margin: $font-height / 2 0;

    &:before {
      $size-circle: $font-height + .1rem;

      background-color: $color-black;
      border-radius: 50%;
      color: $color-white;
      content: counter(li);
      counter-increment: li;
      display: inline-block;
      height: $size-circle;
      text-align: center;
      width: $size-circle;
    }

    &__text {
      display: table-cell;
      padding: 0 0 1.5rem 1rem;
    }
  }
</style>
