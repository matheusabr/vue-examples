<template>
  <div class="greeting">
    <h2>Hi {{userName}}</h2>
    <p>What's up?</p>
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
  }
}
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}
</style>
