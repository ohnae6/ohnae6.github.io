<template>
  <div id="alert">
    <h3>alert</h3>
  </div>
</template>
<script>
export default {
  name: 'Alert',
  components: {
  },
  setup(props, context) {
    return {
      infiniteLoading: true,
    };
  },
  data() {
    return {
      customerNoticeList: [],
    };
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
#popup {width:100%;}
#popup h3 {padding:10px;}
</style>
