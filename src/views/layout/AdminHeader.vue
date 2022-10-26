<template>
  <div>
    <div id="header">
      <h1>Chloris Admin</h1>
      <ul>
        <li><router-link to="/admin/room">객실설정</router-link></li>
        <li><router-link to="/admin/reservation">예약내역</router-link></li>
        <li><router-link to="/admin/qna">문의내역</router-link></li>
        <li><router-link to="/admin/notice">공지사항</router-link></li>
        <li><router-link to="/admin/faq">자주하는질문</router-link></li>
        <li><router-link to="/admin/holiday">휴일설정</router-link></li>
      </ul>
    </div>
    <div class="space"></div>
  </div>
</template>
<script>
export default {
  name: 'AdminHeader',
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
      this.$router.push({ name: 'Main' });
    }
  },
};
</script>
<style scoped>
#header {width:100%; box-shadow:5px 5px 5px rgba(0,0,0,0.3);}
h1 {font-size:20px; color:#000; padding:15px;}
.space {width:100%; clear:both; height:5px;}
ul {width:100%; padding:0 5px; clear:both; background:#333; border-bottom:1px solid #000; border-top:1px solid #000; line-height:30px;}
ul li {display:inline-block; padding:0 5px;}
ul li a {display:inline-block; padding:0 10px; font-size:14px; color:#fff;}
ul li a:hover {background:#000;}
</style>
