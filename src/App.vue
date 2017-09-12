<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <hello></hello> placeholder for the hello subcomponent -->
    <!-- <test title=""></test> --> <!-- placeholder for test subcomponent-->
    <!-- <test msg="Hello CPE405"></test>  -->
    <users></users>
  </div>
</template>

<script>
import Test from "./components/Test"
import Users from "./components/Users"

export default {
  name: 'app',
  components: {
//    Hello           // importing "Hello" subcomponent
    Test,
    Users
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
