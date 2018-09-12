<template>
  <div>
    <h2>Resume</h2>
    <h3>Product: {{productName}}</h3>
    <p>Total: {{total}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Resume',
  computed: {
    // Using mapGetters
    ...mapGetters({
      total: 'count'
    }),
    productName: function () {
      return this.$store.getters.productName
    }
  }
}
</script>
