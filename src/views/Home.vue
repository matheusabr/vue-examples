<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CompGreeting />
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
  }
}
</script>

<style lang="scss" scoped>
footer {
  small {
    color: #2196f3;
  }
}
</style>
