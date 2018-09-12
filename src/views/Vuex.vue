<template>
  <div>
    <h4>{{message}}</h4>
    <button @click="decrement">-</button>
    {{count}}
    <button @click="increment">+</button>
    <div>
      <input
        v-model="productName"
        type="text"
        alt="Product name"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vuex',
  data () {
    return {
      message: 'Press the buttons to change value'
    }
  },
  computed: {
    count: function () {
      return this.$store.getters.count
    },
    // Getter and Setter to v-model (two-way binding)
    productName: {
      get: function () {
        return this.$store.getters.productName
      },
      set: function (newValue) {
        this.$store.dispatch('productName', newValue)
      }
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    },
    decrement () {
      this.$store.dispatch('decrement')
    }
  }
}
</script>
