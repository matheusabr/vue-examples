<template>
  <div>
    <input v-model="p" />
    <button v-on:click="$emit('savedProduct', p)">Save Change</button>
  </div>
</template>

<script>
export default {
  props: [
    'product'
  ],
  data () {
    return {
      p: this.product
    }
  },
  watch: {
    product: function (newVal, oldVal) {
      this.p = newVal
    }
  }
}
</script>
