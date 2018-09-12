<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- Using @Input Concept = Passing value to a component -->
    <!-- PS: when you’re using in-DOM templates, camelCased prop names need to use their kebab-cased (hyphen-delimited) equivalents -->
    <!-- Passing direct value -->
    <CompGreeting user-name="Matt" />
    <!-- Passing dynamic value -->
    <CompGreeting :user-name="userName" />
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
