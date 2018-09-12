<template>
  <div>
    <h2>Resume</h2>
    <h3>Product: {{productName}}</h3>
    <p>Total: {{count}}</p>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  computed: {
    productName: function () {
      return this.$store.getters.productName
    },
    count: function () {
      return this.$store.getters.count
    }
  }
}
</script>

