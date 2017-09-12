<template>
  <div class="test">
      <h1>{{title}}</h1>
      <span v-html="title2"></span>
      <p v-if="showName">{{user.firstName}}</p>
      <p v-else>Nobody</p>
      <p>{{user.lastName}}</p>
      
      <input type="text" v-model="title"><br/>
      <ul>
          <li v-for="item in items" :key="item.id">{{item.title}}</li>
      </ul>

      <button v-on:click="greet('Greeting from Dome...')">Say Greeting</button><br/>
      <p><input type="text" v-on:keyup="presskey" v-on:keyup.enter="enterHit"><br/></p>

      <hr>
      <p>
      <label for="">First Name: </label><input type="text" v-model="user.firstName"><br/>
      <label for="">Last Name: </label><input type="text" v-model="user.lastName"><br/>
      <h3>{{ fullname }}</h3>
      </p>

      <p><h2>{{ msg }}</h2></p>

  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
      msg: {
          type: String,
          default: 'Foobar'
      }
  },
  data() {  // properties
      return {
          title: 'Hello world',
          title2: '<h1>Hello world v-html</h1>',
          user: {
              firstName: 'Dome',
              lastName: 'Potikanond'
          },
          showName: false,
          items: [
              {title: 'One One One', id: 2},
              {title: 'Two Two Two', id: 3},
              {title: 'Three Three Three', id:1}
          ]
      }
  },
  methods: {
      greet: function(g) {
          alert(g)
      },
      presskey: function(e) {
          console.log(e.target.value)
      },
      enterHit: function() {
          console.log('Hit enter!!!')
      }
  },
  computed: {   // computed property
      fullname: function() {
          return this.user.firstName + ' ' + this.user.lastName
      }
  }
}
</script>

<style scoped>

</style>
