<template>
  <div>
    <h1>{{ sentence.begin }}</h1>
    <ul>
      <li v-for="(ending, i) in sentence.endings">
        <div>
          <p>{{ ending }}</p>
        </div>
        <div>
          <button v-for="j in sentence.endings.length" @click="rank(i, j)">{{ j }}</button>
        </div>
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
    },
    data() {
      return {
        ranks: [ 0, 0, 0, 0 ],
      };
    },
    methods: {
      rank(i, j) {
        this.ranks[i] = j;
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
