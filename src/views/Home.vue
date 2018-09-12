<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- Using @Output Concept = Getting value from a component -->
    <CGreeting :user-name="userName" @feelings="outpFeelings" />
    <CProducts />
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
  name: 'home',
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
