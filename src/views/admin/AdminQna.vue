<template>
  <div id="adminQna" class="admin">
    <h2>
      문의내역
      <b>답변이 달렸는지 확인하세요.</b>
      <select v-model="yearSelected" @change="yearChange()">
        <option v-for="item in yearArr" :value="item.value" v-bind:key="item.value">
          {{ item.text }}
        </option>
      </select>
    </h2>
    <div class="grid">
      <table>
        <tr>
          <th>문의번호</th>
          <th>회원명</th>
          <th>날짜</th>
          <th>객실번호</th>
          <th>회원전화번호</th>
          <th>회원이메일</th>
          <th>비밀번호</th>
          <th>제목</th>
          <th>내용</th>
          <th>답변</th>
          <th>등록일시</th>
          <th>수정일시</th>
          <th>답변</th>
        </tr>
        <tr v-show="!items || items.length === 0">
          <td colspan="1000" class="noList">내역이 없습니다.</td>
        </tr>
        <tr v-for="item in this.items" :key="item.QNA_NUMBER">
          <td>{{ item.QNA_NUMBER }}</td>
          <td>{{ item.MEMBER_NAME }}</td>
          <td>{{ item.ROOM_DATE }}</td>
          <td>{{ item.ROOM_NUMBER }}</td>
          <td>{{ item.MEMBER_PHONE }}</td>
          <td>{{ item.MEMBER_EMAIL }}</td>
          <td>{{ item.PASSWORD }}</td>
          <td class="tl">{{ item.SUBJECT }}</td>
          <td class="tl">{{ (item.CONTENT) ? item.CONTENT.substring(0,10) + '...' : '' }}</td>
          <td class="tl">{{ (item.REPLY_CONTENT) ? item.REPLY_CONTENT.substring(0,10) + '...' : '' }}</td>
          <td>{{ item.CREATE_DATE }}</td>
          <td>{{ item.UPDATE_DATE }}</td>
          <td>
            <button type="button" v-on:click.prevent="popupOpen(item)">답변</button>
            <!-- <button type="button" v-on:click.prevent="deleteReservation(item.RESERVATION_NUMBER)">삭제</button> -->
          </td>
        </tr>
      </table>
    </div>

    <!-- 답변달기 팝업 -->
    <div class="popup" v-if="popup.show">
      <div class="wrap">
        <form v-on:submit.prevent="setQnaReply()">
          <h2>답변하기</h2>
          <input type="hidden" v-model="popup.data.QNA_NUMBER" />
          <table class="row">
            <tr><th>질문내용</th><td><textarea style="height:100px; border:0;" readonly v-model="popup.data.CONTENT" /></td></tr><!--  v-model="item.REPLY_CONTENT" -->
            <tr><th>답변내용</th><td><textarea style="height:100px;" v-model="popup.data.REPLY_CONTENT" /></td></tr><!--  v-model="item.REPLY_CONTENT" -->
          </table>
          <div class="btnWrap">
            <button type="submit">답변</button>
            <button type="reset" @click="popupClose()">취소</button>
          </div>
        </form>
      </div>
    </div>

    <div class="qna" style="display:none;">
      <h2>문의 등록</h2>
      <form v-on:submit.prevent="setQna()">
        <table class="row">
          <tr><th>회원명</th><td><input type="text" v-model="this.MEMBER_NAME" /></td></tr>
          <tr><th>예약일자</th><td><input type="text" v-model="this.ROOM_DATE" /></td></tr>
          <tr><th>객실번호</th><td><input type="text" v-model="this.ROOM_NUMBER" /></td></tr>
          <tr><th>전화번호</th><td><input type="text" v-model="this.MEMBER_PHONE" /></td></tr>
          <tr><th>이메일</th><td><input type="text" class="large" v-model="this.MEMBER_EMAIL" /></td></tr>
          <tr><th>비밀번호</th><td><input type="text" v-model="this.PASSWORD" /></td></tr>
          <tr><th>제목</th><td><input type="text" class="large" v-model="this.SUBJECT" /></td></tr>
          <tr><th>내용</th><td><input type="text" class="large" v-model="this.CONTENT" /></td></tr>
        </table>
        <div class="btnWrap">
          <button type="submit">QNA 생성</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import QnaService from '@/services/QnaService';
import moment from 'moment';

export default {
  name: 'AdminQna',
  components: {
  },
  setup(props, context) {
    return {
    }
  },
  data() {
    return {
      popup: {
        show: false,
        data: {}
      },
      items: [],
      QNA_NUMBER: '',
      MEMBER_NAME: '홍길동',
      ROOM_DATE: moment().format('YYYY-MM-DD'),
      ROOM_NUMBER: 1,
      MEMBER_PHONE: '01073222222',
      MEMBER_EMAIL: '2133@hanmail.net',
      PASSWORD: '111',
      SUBJECT: '제목',
      CONTENT: '내용',
      yearSelected: '2022',    
      yearArr: this.$code.yearArr
    }
  },
  computed: {
  },
  mounted() {
    this.getQnaList(this.yearSelected);
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
    yearChange(){
      this.getQnaList(this.yearSelected);
    },
    deleteQna(QNA_NUMBER) {
      QnaService.deleteQna({ QNA_NUMBER: QNA_NUMBER }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    },
    deleteQnaReply() {
      QnaService.deleteQnaReply({ QNA_NUMBER: this.QNA_NUMBER }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    },
    getQna() {
      QnaService.getQna({ QNA_NUMBER: this.QNA_NUMBER }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    },
    getQnaList(searchYear) {
      QnaService.getQnaList({ searchYear: searchYear}).then(resp => {
        console.log(resp);
        this.items = resp.items;
      }, error => {
        console.log(error);
      });
    },
    getQnaPwdCheck() {
      QnaService.getQnaPwdCheck({ QNA_NUMBER: this.QNA_NUMBER, PASSWORD: this.PASSWORD }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    },
    getQnaReplyList() {
      QnaService.getQnaReplyList({ QNA_NUMBER: this.QNA_NUMBER }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    },
    setQna() {
      QnaService.setQna({ 
        ROOM_DATE: this.ROOM_DATE,
        ROOM_NUMBER: this.ROOM_NUMBER,
        MEMBER_NAME: this.MEMBER_NAME,
        MEMBER_PHONE: this.MEMBER_PHONE,
        MEMBER_EMAIL: this.MEMBER_EMAIL,
        PASSWORD: this.PASSWORD,
        SUBJECT: this.SUBJECT,
        CONTENT: this.CONTENT
       }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    },
    setQnaReply() { // 팝업저장
      QnaService.setQnaReply(this.popup.data).then(resp => {
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
#adminQna {width:100%;}
h2 {position:relative;}
h2 select {position:absolute; right:0; top:0;}
.popup .wrap {width:500px; margin-left:-250px;}
</style>
