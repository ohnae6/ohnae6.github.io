<template>
  <div id="adminLogin">
    <h2><router-link to="/">Admin Login</router-link></h2>
    <form v-on:submit.prevent="getLogin()" method="POST">
      <input type="text" autocomplete="false" v-model="id" required />
      <input type="password" autocomplete="false" v-model="password" required />
      <button type="submit">LOGIN</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'AdminLogin',
  components: {
  },
  setup(props, context) {
    return {}
  },
  data() {
    return {
      id: null,
      password: null
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    getLogin() { // vue -> actions -> service -> interceptor ->  store -> state
      this.$store.dispatch('auth/login', {
        id: this.id,
        password: this.password
      }).then(
        () => {
          this.$router.push({ name: 'AdminReservation' });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
</script>
<style scoped>
#adminLogin {width:100%;}
h2 {display:block; text-align:center; padding:100px 0 30px 0; color:#000; font-size:20px;}
form {width:290px; margin:0 auto; position:relative;}
button {position:absolute; right:0; top:0; width:70px; height:70px; font-weight: bold; background:#ff5500; color:#fff;}
input {width:200px; display:block; margin:10px; line-height:30px; height:30px;}
</style>
