<template>
  <div id="notFound">
    <h2>404 NotFound</h2>
    <p>페이지를 찾을 수 없습니다.</p>
    <h3><router-link to="/">홈으로</router-link></h3>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
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
#notFound {width:100%; text-align:center;}
h2 {display:block;}
p {padding:10px 0 20px 0; font-size:20px; color:#000; font-weight:bold;}
h3 {padding:30px 0; font-size:12px;}
</style>
