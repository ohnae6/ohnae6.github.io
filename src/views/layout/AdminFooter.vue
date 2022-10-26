<template>
  <div id="footer">
    <p>{{ copyright }}<br />{{ address }}<br /><a @click.prevent="logout()">로그아웃</a></p>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  components: {
  },
  setup(props, context) {
    return {}
  },
  data() {
    return {
      copyright: this.$constant.copyright,
      address: this.$constant.address
    }
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
#footer {width:100%; padding:30px 0; text-align:center; font-size:11px;}
#footer a {color:#ff5500;}
</style>
