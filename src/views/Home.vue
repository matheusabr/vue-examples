<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- Using @Output Concept = Getting value from a component -->
    <CompGreeting :user-name="userName" @feelings="outpFeelings" />
    <footer>
      <small>
        Made by Matheus Abreu
      </small>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import CompGreeting from '@/components/CompGreeting'

export default {
  name: 'home',
  components: {
    CompGreeting
  },
  data: () => {
    return {
      userName: 'Mate'
    }
  },
  methods: {
    outpFeelings: (payload) => {
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
