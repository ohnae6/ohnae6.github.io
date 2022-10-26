<template>
  <div id="error">
    <h2>Error</h2>
    <p>알수 없는 오류가 발생하였습니다.</p>
    <h3><router-link to="/">홈으로</router-link></h3>
  </div>
</template>
<script>
export default {
  name: 'Error',
  components: {
  },
  setup(props, context) {
    return {}
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style scoped>
#error {width:100%; text-align:center;}
h2 {display:block;}
p {padding:10px 0 20px 0; font-size:20px; color:#000; font-weight:bold;}
h3 {padding:30px 0; font-size:12px;}
</style>
