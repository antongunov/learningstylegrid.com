<template>
  <div class="instructions">
    <h1 class="instructions__title">Instructions for the <abbr title="Learning Style Inventory">LSI</abbr></h1>
    <ol class="instructions__list">
      <li class="instructions__item instruction">
        <span class="instruction__text">Rank the endings for 12 sentences: 4 for most like you, 1 for least like you.</span>
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
      list-style: none;
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
      background-color: $color-black;
      border-radius: $font-height / 2 + rem;
      color: $color-white;
      content: counter(li);
      counter-increment: li;
      display: block;
      text-align: center;
      width: $font-height + rem;
    }

    &__text {
      display: table-cell;
      padding: 0 0 1rem 1rem;
    }
  }
</style>
