<template>
  <div id="adminNotice" class="admin">
    <h2>
      공지사항
    </h2>
    <div class="grid">
      <table>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>내용</th>
          <th>등록일시</th>
          <th>수정일시</th>
          <th>수정</th>
        </tr>
        <tr v-show="!items || items.length === 0">
          <td colspan="1000" class="noList">내역이 없습니다.</td>
        </tr>
        <tr v-for="item in this.items" :key="item.NOTICE_NUMBER">
          <td>{{ item.NOTICE_NUMBER }}</td>
          <td class="tl">{{ item.SUBJECT }}</td>
          <td class="tl">{{ (item.CONTENT) ? item.CONTENT.substring(0,10) + '...' : '' }}</td>
          <td>{{ item.CREATE_DATE }}</td>
          <td>{{ item.UPDATE_DATE }}</td>
          <td>
            <button type="button" v-on:click.prevent="popupOpen(item)">수정</button>
            <button type="button" v-on:click.prevent="deleteNotice(item.NOTICE_NUMBER)">삭제</button>
          </td>
        </tr>
      </table>
    </div>

    <!-- 수정팝업 -->
    <div class="popup" v-if="popup.show">>
      <div class="wrap">
        <h2>공지사항 수정</h2>
        <form v-on:submit.prevent="updateNotice()">
          <input type="hidden" v-model="popup.data.NOTICE_NUMBER" />
          <table class="row">
            <tr>
              <th>제목</th>
              <td><input type="text" class="large" v-model="popup.data.SUBJECT" /></td>
            </tr>
            <tr>
              <th>내용</th>
              <td><textarea style="height:150px;" type="text" v-model="popup.data.CONTENT" /></td>
            </tr>
          </table>
          <div class="btnWrap">
            <button type="submit">수정</button>
            <button type="reset" @click="popupClose()">취소</button>
          </div>
        </form>
      </div>
    </div>

    <div class="notice">
      <h3>공지사항 등록</h3>
      <form v-on:submit.prevent="setNotice()">
        <table class="row">
          <tr>
            <th>제목</th>
            <td><input type="text" class="large" v-model="this.SUBJECT" /></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea style="height:150px;" type="text" v-model="this.CONTENT" /></td>
          </tr>
        </table>
        <div class="btnWrap">
          <button type="submit">공지사항 등록</button>
        </div>
      </form>
    </div>

  </div>
</template>
<script>
import NoticeService from '@/services/NoticeService';

export default {
  name: 'AdminNotice',
  components: {
  },
  setup(props, context) {
    return {}
  },
  data() {
    return {
      popup: {
        show: false,
        data: {}
      },
      items: [],
      NOTICE_NUMBER: null,
      SUBJECT: null,
      CONTENT: null,
      CONTENT: null,
    }
  },
  computed: {
  },
  mounted() {
    this.getNoticeList();
  },
  methods: {
    popupOpen(data){
      this.popup.show = true;
      //  this.popup.data = data;
      this.popup.data = {...data};
    },
    popupClose(data){
      this.popup.show = false;
      this.popup.data = {};
    },
    deleteNotice(NOTICE_NUMBER) {
      NoticeService.deleteNotice({ NOTICE_NUMBER: NOTICE_NUMBER }).then(resp => {
        alert(resp.message);
        location.reload();
      }, error => {
        console.log(error);
      });
    },
    getNotice() {
      NoticeService.getNotice({ NOTICE_NUMBER: this.NOTICE_NUMBER }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    },
    getNoticeList() {
      NoticeService.getNoticeList({ }).then(resp => {
        this.items = resp.items;
      }, error => {
        console.log(error);
      });
    },
    setNotice() {
      NoticeService.setNotice({ 
        SUBJECT : this.SUBJECT,
        CONTENT : this.CONTENT
       }).then(resp => {
        alert(resp.message);
        location.reload();
      }, error => {
        console.log(error);
      });
    },
    // 팝업
    updateNotice() {
      NoticeService.updateNotice(this.popup.data).then(resp => {
        alert(resp.message);
        location.reload();
      }, error => {
        console.log(error);
      });
    },
  },
};
</script>
<style scoped>
#adminNotice {width:100%;}
.popup .wrap {width:500px; margin-left:-250px;}
</style>
