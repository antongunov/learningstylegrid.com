<template>
  <div>
    <h1>{{ sentence.begin }}</h1>
    <ul>
      <li v-for="(ending, i) in sentence.endings">
        <div>
          <p>{{ ending }}</p>
        </div>
        <ul>
          <li v-for="j in 4">
            <button @click="onRank(i, j)">{{ j }}</button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Sentence',
    props: {
      sentence: {
        type: Object,
        required: true,
      },
      rank: {
        type: Array,
        required: true,
      },
    },
    methods: {
      onRank(i, j) {
        this.rank[i] = j;
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
