<template>
  <div class="greeting">
    <h2>Hi {{userName}}</h2>
    <p>What's up?</p>
    <button v-on:click="$emit('feelings', feelings)">I`m Fine</button>
  </div>
</template>

<script>
export default {
  name: 'CompGreeting',
  props: {
    userName: {
      type: String,
      required: true,
      default: 'Dude'
    }
  },
  data: () => {
    return {
      feelings: 'I,m Fine Bro!'
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  text-align: center
}
</style>
