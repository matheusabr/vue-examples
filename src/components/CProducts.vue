<template>
  <div>
    <div v-for="product in productList" :key="product.id">
      {{ product }}
      <button v-on:click="select(product)">Select</button>
    </div>
    <CProductDetail v-on:save="save" :product="selectedProduct" @savedProduct="outpProductSaved" />
  </div>
</template>

<script>
import CProductDetail from '@/components/CProductDetail'
export default {
  name: 'CProducts',
  components: {
    CProductDetail
  },
  data () {
    return {
      selectedProduct: '',
      productList: ['bag', 'cap', 'belt']
    }
  },
  methods: {
    select: function (item) {
      this.selectedProduct = item
    },
    save: function (p) {
      this.product = p
    },
    outpProductSaved: (payload) => {
      console.log('Product saved:', payload)
    }
  }
}
</script>
