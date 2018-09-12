<template>
  <div class="products">
    <!-- Using :Input Concept = Passing value to component -->
    <!-- Using @Output Concept = Getting value from component -->
    <CGreeting :user-name="userName" @feelings="outpFeelings" />
    <CProducts />
    <!-- ## Footer -->
    <footer>
      <small>
        Made by Matheus Abreu
      </small>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import CGreeting from '@/components/CGreeting'
import CProducts from '@/components/CProducts'

export default {
  name: 'Products',
  components: {
    CGreeting,
    CProducts
  },
  data () {
    return {
      userName: 'Mate'
    }
  },
  methods: {
    outpFeelings: function (payload) {
      console.log('Payload from child:', payload)
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  small {
    color: #2196f3
  }
}
</style>
