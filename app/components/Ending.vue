<template>
  <div class="ending">
    <div class="ending__text">
      <p>{{ text }}</p>
    </div>
    <div class="ending__buttons">
      <ul class="rank-buttons rank-buttons__list">
        <li v-for="i in 4" class="rank-buttons__item">
          <a @click="updateRank(i)" class="rank-button" :class="{ 'rank-button--ranked': i === mutableRank }">{{ i }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Ending',
    props: {
      text: {
        type: String,
        required: true,
      },
      rank: {
        type: Number,
        default() {
          return 0;
        },
      },
    },
    data() {
      return {
        mutableRank: this.rank,
      };
    },
    methods: {
      updateRank(rank) {
        this.mutableRank = this.mutableRank === rank ? 0 : rank;
        this.$emit('update-rank', rank);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .ending {
    &__text {

    }

    &__buttons {
      margin-bottom: 1rem;
    }
  }

  .rank-buttons {
    &__list {

    }

    &__item {
      display: inline-block;
      margin-bottom: .5rem;
    }
  }

  .rank-button {
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
