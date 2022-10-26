<template>
  <div id="container"><!--  v-bind:class="{ 'admin': isAdminPage }" -->
    <router-view name="Header" />
    <div id="content">
      <router-view name="Contents" />
    </div>
    <router-view name="Footer" />
    <!--
    <Loading />
    <Alert />
    <Popup />
    -->
  </div>
</template>

<script>
import Loading from './components/Loading.vue'
import Alert from './components/Alert.vue'
import Popup from './components/Popup.vue'

export default {
  name: 'App',
  components: {
    Loading,
    Alert,
    Popup
  },
  computed: {
  },
  mounted() {
  },
  setup(props, context) {
    return {
    }
  },
  data() {
    return {
      // isAdminPage: location.pathname.match('/admin/') ? true : false,
      auth: this.$store.state.auth
    }
  },
  methods: {
  },
};
</script>

<style>
/* @font-face {
	font-family: 'SpoqaHanSansNeo';
  font-weight: 400;
	src: url('./assets/fonts/SpoqaHanSansNeo-Regular.eot');
	src: url('./assets/fonts/SpoqaHanSansNeo-Regular.eot?#iefix') format('embedded-opentype'),
		url('./assets/fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
		url('./assets/fonts/SpoqaHanSansNeo-Regular.woff') format('woff'),
		url('./assets/fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
} */
body {font-family:'SpoqaHanSansNeo','sans-serif'; font-size:11px; color:#666; line-height:20px;}
body,html {height:100%; width:100%;} 
li {list-style:none;}
fieldset,ul,li,h1,h2,h3,h4,h5,ol,dl,dt,dd,p,body,input {margin:0; padding:0;}
fieldset {border:0;}
legend {display:none;}
iframe {border:none;}
img {border:0; vertical-align:middle;}
button {border:0; cursor:pointer;}
::selection {background:#ffdda8; color:#967540;}
a {text-decoration:none;}
a:link {color:#656565;}
a:visited {color:#888888;}
a:hover {color:#676767;}
a:active {color:#777; }
table {border-collapse:collapse;}
table caption {display:none;}
input,textarea,button,select {font-family:'SpoqaHanSansNeo'; font-size:11px; color:#666; vertical-align:middle;}
h1,h2,h3,h4,h5,h6 {font-size:11px; color:#666;}
th {font-weight:normal; text-align:left;}
input[type='month'],input[type='url'],input[type='tel'],input[type='color'],input[type='datetime'],input[type='datetime-local'],
input[type='text'],input[type='number'],input[type='password'],input[type='date'],input[type='email'] {border:1px solid #ccc; height:20px; padding:5px; line-height:20px; vertical-align:middle;}
textarea {width:100%; padding:0 5px; border:1px solid #aaa; line-height:22px; height:50px; white-space:pre-line;}
select {line-height:22px; border:1px solid #ccc; height:22px; padding:0 5px; margin:0; box-sizing:border-box; vertical-align:middle; box-sizing:border-box;}
input[readonly='readonly'] {background-color:#eee;}
div,a,li,ol,ul,dl,dt,dd,span,strong,p,h1,h2,h3,h4,h5,img,input,button,iframe,textarea {box-sizing:border-box; } /* transition:0.3s all linear; transition:all 0.3s linear 0.9s; */
/** common */
#content {padding:10px;}
.btnWrap {width:100%; clear:both; text-align:center; padding:10px 0 30px 0;}
.btnWrap button {line-height:30px; box-shadow:2px 2px 2px rgba(0,0,0,0.3); text-shadow:0 0 2px rgba(0,0,0,0.3); border-radius:5px; margin:0 3px; padding:0 10px; text-align:center; color:#fff; font-weight:bold; background:#ff5500;}
.btnWrap button:hover {background:#ff8142; box-shadow:0px 0px 0px;}
/** admin */
.admin {width:100%; height:100%; border:1px solid #ddd; box-shadow:0 0 15px rgba(0,0,0,0.1); background:#fff; clear:both; padding:10px;}
.admin h1 {display:none;}
.admin h2 {color:#000; font-size:14px; font-weight:bold; padding:5px 0 10px 0; text-shadow:2px 2px 2px rgba(0,0,0,0.1);}
.admin h2 b {color:#ff5500; font-size:11px; font-weight:normal;}
.admin h3 {color:#333; font-size:11px; font-weight:bold; padding:25px 0 10px 0; text-shadow:2px 2px 2px rgba(0,0,0,0.1);}
.admin input {width:100px;}
.admin input.small  {width:50px;}
.admin input.medium  {width:150px;}
.admin input.large  {width:300px;}
.admin table {width:100%; box-shadow:0 0 15px rgba(0,0,0,0.05); background:#fff; white-space:nowrap; border-top:2px solid #999;}
.admin table th {position:relative; text-align:center; padding:3px 3px 3px 10px; border:1px solid #ddd; background:#eee; font-size:11px;}
.admin table td {padding:3px; text-align:center; border:1px solid #ddd;}
.admin table th.required:before {content:''; display:block; position:absolute; width:0; height:0; left:2px; top:2px;
    border-bottom: 3px solid transparent;
    border-right: 3px solid transparent;
    border-left: 3px solid #ff0000;
    border-top: 3px solid #ff0000;
}
.admin table th.tl {text-align:left;}
.admin table th.tr {text-align:right;}
.admin table td.tl {text-align:left;}
.admin table td.tr {text-align:right;}
.admin table.row th {width:120px; text-align:left;}
.admin table.row td {text-align:left;}
.admin table td.noList {text-align:center; padding:50px 0;}

.admin textarea {width:100%; border:1px solid #ddd;}
.admin .grid {width:100%; overflow:auto;}
.grid button {display:inline-block; border-radius:5px; background:#666; color:#fff; margin:-2px 0 0 3px;}

.popup {position:fixed; left:0; top:0; z-index:1000; width:100%; height:100%; background:rgba(0,0,0,0.3);}
.popup .wrap {border:20px solid #fff; width:400px; background:#fff; margin:0 auto; position:absolute; left:50%; top:50%; margin:-250px 0 0 -200px;}
</style>
