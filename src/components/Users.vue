<template>
  <div class="users">
      <h1>Users Component</h1>
      
      <form v-on:submit="addUser">
          <input type="text" v-model="newUser.name" placeholder="Enter name:"><br/><br/>
          <input type="text" v-model="newUser.email" placeholder="Enter email:"><br/><br/>
          <input type="submit" value="Submit">
        
      </form>
      
      <ul>
          <li v-for="u in users" :key="u.name">
              <input type="checkbox" class="toggle" v-model="u.isContacted">
              <span :class="{contacted: u.isContacted}">
                  {{ u.name }}: {{ u.email }} <button v-on:click="deleteUser(u)">x</button>
              </span>
          </li>
      </ul>

  </div>
</template>

<script>
export default {
  name: 'users',
  data() {  // properties
      return {
          newUser: {},
          users: [
            //   {
            //       name: 'Jane Doe',
            //       email: 'jdoe@gmail.com',
            //       isContacted: false
            //   },
            //   {
            //       name: 'Yuthapong Boonma',
            //       email: 'yboonma@gmail.com',
            //       isContacted: true
            //   },
            //   {
            //       name: 'Pruet Patanukom',
            //       email: 'ppatanukum@gmail.com',
            //       isContacted: false
            //   }
          ]
      }
  },
  methods: {
      addUser: function(e) {
          e.preventDefault();
          this.users.push( {
              name: this.newUser.name,
              email: this.newUser.email,
              isContacted: false
          } );
      },
      deleteUser: function(u) {
          this.users.splice(this.users.indexOf(u),1);
      }  
  },
  created: function() {     // lifecycle hook (status): created()
    this.$http.get('https://jsonplaceholder.typicode.com/users').then( 
        function(response) {
            console.log(response.data);
            this.users = response.data;
        }
    );

  }
}

</script>

<style scoped>
    .users {
        text-align: left;
    }
    .contacted {
        text-decoration: line-through;
    }
</style>
