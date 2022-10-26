<template>
  <div id="footer">
    <p>
      {{ copyright }}<router-link to="/admin">..</router-link>
      <br />{{ address }}
    </p>
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
  },
};
</script>
<style scoped>
#footer {width:100%; padding:30px 0; text-align:center; font-size:11px;}
</style>
