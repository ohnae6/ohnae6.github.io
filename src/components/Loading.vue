<template>
  <div id="loading">loading</div>
</template>
<script>
export default {
  name: 'Loading',
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
#loading {width:100%;}
</style>
