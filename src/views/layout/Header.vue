<template>
  <div id="header">
    <h1><router-link to="/">chloris</router-link></h1>
    <ul>
      <li><router-link to="/">메인</router-link></li>
      <li><router-link to="/reservation">예약하기</router-link></li>
      <li><router-link to="/qna">문의하기</router-link></li>
      <li><router-link to="/notice">공지사항</router-link></li>
      <li><router-link to="/about">이용정보</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Header',
  components: {
  },
  setup(props, context) {
    return {}
  },
  data() {
    return {
      auth: this.$store.state.auth
    };
  },
  mounted() {
  },
  updated() {             
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push({ name: 'AdminLogin' });
    }
  },
};
</script>
<style scoped>
#header {width:100%;}
ol {position:absolute; right:10px; top:10px; font-size:11px;}
ol li {display:inline-block; padding:0 10px;}
h1 {padding:30px; font-size:30px; text-align:center;}
ul {width:100%; clear:both; background:#eee; line-height:30px; text-align:center;}
ul li {display:inline-block; padding:0 10px;}
ul li a {display:inline-block; padding:0 10px; font-size:14px;}
</style>
