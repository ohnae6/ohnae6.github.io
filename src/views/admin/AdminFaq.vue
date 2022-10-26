<template>
  <div id="adminFaq" class="admin">
    <h2>자주하는질문</h2>
    <div class="grid">
      <table>
        <tr>
          <th>번호</th>
          <th>우선순위</th>
          <th>질문</th>
          <th>답변</th>
          <th>등록일시</th>
          <th>수정일시</th>
          <th>수정</th>
        </tr>
        <tr v-show="!items || items.length === 0">
          <td colspan="1000" class="noList">내역이 없습니다.</td>
        </tr>
        <tr v-for="item in this.items" :key="item.FAQ_NUMBER">
          <td>{{ item.FAQ_NUMBER }}</td>
          <td>{{ item.PRIORITY }}</td>
          <td class="tl">{{ item.QUESTION }}</td>
          <td class="tl">{{ (item.ANSWER) ? item.ANSWER.substring(0,10) + '...' : '' }}</td>
          <td>{{ item.CREATE_DATE }}</td>
          <td>{{ item.UPDATE_DATE }}</td>
          <td>
            <button type="button" v-on:click.prevent="popupOpen(item)">수정</button>
            <button type="button" v-on:click.prevent="deleteFaq(item.FAQ_NUMBER)">삭제</button>
          </td>
        </tr>
      </table>
    </div>

     <!-- 수정팝업 -->
    <div class="popup" v-if="popup.show">>
      <div class="wrap">
        <h2>FAQ 수정</h2>
        <form v-on:submit.prevent="updateFaq()">
          <input type="hidden" v-model="popup.data.FAQ_NUMBER" />
          <table class="row">
            <tr>
              <th>질문. {{ popup.data.FAQ_NUMBER }}</th>
              <td><input type="text" class="large" v-model="popup.data.QUESTION" /></td>
            </tr>
            <tr>
              <th>우선순위</th>
              <td><input type="text" v-model="popup.data.PRIORITY" /></td>
            </tr>
            <tr>
              <th>답변</th>
              <td><textarea type="text" style="height:150px;" v-model="popup.data.ANSWER" /></td>
            </tr>
          </table>
          <div class="btnWrap">
            <button type="submit">수정</button>
            <button type="reset" @click="popupClose()">취소</button>
          </div>
        </form>
      </div>
    </div>

    <div class="faq">
      <h3>자주찾는 질문 등록</h3>
      <form v-on:submit.prevent="setFaq()">
        <table class="row">
          <tr>
            <th>질문</th>
            <td><input type="text" class="large" v-model="this.QUESTION" /></td>
          </tr>
          <tr>
            <th>우선순위</th>
            <td><input type="text" v-model="this.PRIORITY" /></td>
          </tr>
          <tr>
            <th>답변</th>
            <td><textarea type="text" style="height:150px;" v-model="this.ANSWER" /></td>
          </tr>
        </table>
        <div class="btnWrap">
          <button type="submit">FAQ 생성</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import FaqService from '@/services/FaqService';

export default {
  name: 'AdminFaq',
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
      FAQ_NUMBER: null,
      QUESTION: null,
      ANSWER: null,
      PRIORITY: null
    }
  },
  computed: {
  },
  mounted() {
    this.getFaqList();
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
    deleteFaq(FAQ_NUMBER) {
      FaqService.deleteFaq({ FAQ_NUMBER: FAQ_NUMBER }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    },
    getFaqList() {
      FaqService.getFaqList({}).then(resp => {
        this.items = resp.items;
      }, error => {
        console.log(error);
      });
    },
    setFaq() {
      FaqService.setFaq({ 
        QUESTION : this.QUESTION,
        ANSWER : this.ANSWER,
        PRIORITY : this.PRIORITY
       }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    },
    updateFaq() {
      FaqService.updateFaq(this.popup.data).then(resp => {
        //console.log(resp);
        alert(resp.message);
        location.reload();
      }, error => {
        console.log(error);
      });
    }
  },
};
</script>
<style scoped>
#adminFaq {width:100%;}
h2 {display:block;}
#faqList {width:100%;}
#faq {width:100%;}
.popup .wrap {width:500px; margin-left:-250px;}
</style>
