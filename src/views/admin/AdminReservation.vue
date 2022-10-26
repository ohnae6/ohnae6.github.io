<template>
  <div id="adminReservation" class="admin">
    <h2>
      예약내역 <b>예약정보 변경시 주의하세요.</b>
      <span>
        <select v-model="yearSelected" @change="yearChange()">
          <option v-for="item in yearArr" :value="item.value" v-bind:key="item.value">
            {{ item.text }}
          </option>
        </select>
        <select v-model="monthSelected" @change="monthChange()">
          <option v-for="item in monthArr" :value="item.value" v-bind:key="item.value">
            {{ item.text }}
          </option>
        </select>
      </span>
    </h2>
    <div class="grid">
      <table>
        <tr>
          <th>예약번호</th>
          <th>예약일</th>
          <th>객실번호</th>
          <th>가격</th>
          <th>예약상태</th>
          <th>회원명</th>
          <th>회원전화번호</th>
          <th>회원이메일</th>
          <th>예약비밀번호</th>
          <th>비고</th>
          <th>추가인원</th>
          <th>바베큐추가수</th>
          <th>온수추가수</th>
          <!-- <th>기타4</th>
          <th>기타5</th> -->
          <th>등록일시</th>
          <th>수정일시</th>
          <th>수정</th>
        </tr>
        <tr v-show="!items || items.length === 0">
          <td colspan="1000" class="noList">내역이 없습니다.</td>
        </tr>
        <tr v-for="item in this.items" :key="item.RESERVATION_NUMBER">
          <td>{{ item.RESERVATION_NUMBER }}</td>
          <td>{{ item.RESERVATION_DATE }}</td>
          <td>{{ item.ROOM_NUMBER }}</td>
          <td class="tr">{{ item.PRICE }}</td>
          <td>
            {{ item.STATUS_CODE == 1 ? '예약중' : '' }}
            {{ item.STATUS_CODE == 2 ? '예약취소' : '' }}
            {{ item.STATUS_CODE == 3 ? '예약완료' : '' }}
          </td>
          <td>{{ item.MEMBER_NAME }}</td>
          <td>{{ item.MEMBER_PHONE }}</td>
          <td>{{ item.MEMBER_EMAIL }}</td>
          <td>{{ item.PASSWORD }}</td>
          <td>{{ item.DESCRIPTION }}</td>
          <td>{{ item.ADD_COUNT_1 }}</td>
          <td>{{ item.ADD_COUNT_2 }}</td>
          <td>{{ item.ADD_COUNT_3 }}</td>
          <td>{{ item.CREATE_DATE }}</td>
          <td>{{ item.UPDATE_DATE }}</td>
          <td>
            <button type="button" v-on:click.prevent="popupOpen(item)">수정</button>
            <!-- <button type="button" v-on:click.prevent="deleteReservation(item.RESERVATION_NUMBER)">삭제</button> -->
          </td>
        </tr>
      </table>
    </div>

    <div class="reservation" style="display:none;">
      <h2>예약 등록</h2>
      <form v-on:submit.prevent="setReservation()">
        <table class="row">
          <tr><th>예약일</th><td><input type="text" v-model="this.RESERVATION_DATE" /></td></tr>
          <tr><th>객실번호</th><td><input type="text" v-model="this.ROOM_NUMBER" /></td></tr>
          <tr><th>가격</th><td><input type="text" class="large" v-model="this.PRICE" /></td></tr>
          <tr><th>예약상태</th><td><input type="text" v-model="this.STATUS_CODE" /></td></tr>
          <tr><th>회원명</th><td><input type="text" v-model="this.MEMBER_NAME" /></td></tr>
          <tr><th>회원전화번호</th><td><input type="text" v-model="this.MEMBER_PHONE" /></td></tr>
          <tr><th>회원이메일</th><td><input type="text" class="large" v-model="this.MEMBER_EMAIL" /></td></tr>
          <tr><th>예약비밀번호</th><td><input type="text" v-model="this.PASSWORD" /></td></tr>
          <tr><th>비고</th><td><input type="text" class="large" v-model="this.DESCRIPTION" /></td></tr>
          <tr><th>추가인원</th><td><input type="text" v-model="this.ADD_COUNT_1" /></td></tr>
          <tr><th>바베큐추가수</th><td><input type="text" v-model="this.ADD_COUNT_2" /></td></tr>
          <tr><th>온수추가수</th><td><input type="text" v-model="this.ADD_COUNT_3" /></td></tr>
        </table>
        <div class="btnWrap">
          <button type="submit">예약 생성</button>
        </div>
      </form>
    </div>

    <div class="popup" v-if="popup.show">
      <div class="wrap">
        <form v-on:submit.prevent="updateReservation()">
          <h2>예약 수정</h2>
          <table class="row">
            <input type="hidden" v-model="popup.data.RESERVATION_NUMBER" />
            <input type="hidden" v-model="popup.data.RESERVATION_DATE" />
            <input type="hidden" v-model="popup.data.ROOM_NUMBER" />

            <input type="hidden" v-model="popup.data.MEMBER_NAME" />
            <input type="hidden" v-model="popup.data.MEMBER_PHONE" />
            <input type="hidden" class="medium" v-model="popup.data.MEMBER_EMAIL" />
            <input type="hidden" class="medium" v-model="popup.data.DESCRIPTION" />

            <tr><th>예약일</th><td>{{ popup.data.RESERVATION_DATE }}</td></tr>
            <tr><th>객실번호</th><td>{{ popup.data.ROOM_NUMBER }}</td></tr>
            <tr><th>가격</th><td><input type="text" v-model="popup.data.PRICE" /></td></tr>
            <tr><th>예약상태</th>
            <td>
              <input type="hidden" v-model="popup.data.STATUS_CODE" />
              <select v-model="popup.data.STATUS_CODE">
                <option value="1">예약중</option>
                <option value="2">예약취소</option>
                <option value="3">예약완료</option>
                <!-- <option v-for="item in resevationType" :value="popup.data.STATUS_CODE" v-bind:key="popup.data.STATUS_CODE">
                  {{ item.text }}
                </option> -->
              </select>
            </td></tr>
            <tr><th>회원명</th><td>{{ popup.data.MEMBER_NAME }}</td></tr>
            <tr><th>회원전화번호</th><td>{{ popup.data.MEMBER_PHONE }}</td></tr>
            <tr><th>회원이메일</th><td>{{ popup.data.MEMBER_EMAIL }}</td></tr>
            <tr><th>예약비밀번호</th><td><input type="text" v-model="popup.data.PASSWORD" /></td></tr>
            <tr><th>비고</th><td>{{ popup.data.DESCRIPTION }}</td></tr>
            <tr><th>추가인원</th><td><input class="small" type="text" max="10" v-model="popup.data.ADD_COUNT_1" /></td></tr>
            <tr><th>바베큐추가수</th><td><input class="small" type="text" max="10" v-model="popup.data.ADD_COUNT_2" /></td></tr>
            <tr><th>온수추가수</th><td><input class="small" type="text" max="10" v-model="popup.data.ADD_COUNT_3" /></td></tr>
          </table>
          <div class="btnWrap">
            <button type="submit">수정</button>
            <button type="reset" @click="popupClose()">취소</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>
<script>
import ReservationService from '@/services/ReservationService';
import moment from 'moment';

export default {
  name: 'AdminReservation',
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
      RESERVATION_DATE: '2022-04-13',
      ROOM_NUMBER: 1,
      MEMBER_NAME: '홍길동',
      MEMBER_PHONE: '01072222222',
      MEMBER_EMAIL: '708@hanmail.net',
      PASSWORD: '1111',
      DESCRIPTION: '비고',
      STATUS_CODE: 1,
      ADD_COUNT_1: 0,
      ADD_COUNT_2: 0,
      ADD_COUNT_3: 0,
      PRICE: 300000,
      yearSelected: moment().format('YYYY'),    
      yearArr: this.$code.yearArr,
      monthArr: this.$code.monthArr,
      resevationType: this.$code.resevationType,
      monthSelected: moment().format('MM')
    }
  },
  computed: {
  },
  mounted() {
    this.getReservationList(this.yearSelected, this.monthSelected);
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
      this.getReservationList(this.yearSelected, this.monthSelected);
    },
    monthChange(){
      this.getReservationList(this.yearSelected, this.monthSelected);
    },
    changeStatus ($event){
      console.log($event);
    },
    deleteReservation(RESERVATION_NUMBER) {
      ReservationService.deleteReservation({ RESERVATION_NUMBER: RESERVATION_NUMBER }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    },
    getReservationList(searchYear, searchMonth) {
      ReservationService.getReservationList({ searchYear: searchYear, searchMonth: searchMonth }).then(resp => {
        this.items = resp.items;
      }, error => {
        console.log(error);
      });
    },
    setReservation() {
      ReservationService.setReservation({ 
        RESERVATION_DATE: this.RESERVATION_DATE,
        ROOM_NUMBER: this.ROOM_NUMBER,
        MEMBER_NAME: this.MEMBER_NAME,
        MEMBER_PHONE: this.MEMBER_PHONE,
        MEMBER_EMAIL: this.MEMBER_EMAIL,
        PASSWORD: this.PASSWORD,
        DESCRIPTION: this.DESCRIPTION,
        ADD_COUNT_1: this.ADD_COUNT_1,
        ADD_COUNT_2: this.ADD_COUNT_2,
        ADD_COUNT_3: this.ADD_COUNT_3,
        STATUS_CODE: this.STATUS_CODE,
        PRICE: this.PRICE
       }).then(resp => {
        console.log(resp);
        if(!resp.success) {
          alert(resp.message);
        } else {
          location.reload();
        }
      }, error => {
        console.log(error);
      });
    },
    updateReservation() { // 팝업저장
      ReservationService.updateReservation(this.popup.data).then(resp => {
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
#adminReservation {width:100%;}
h2 {position:relative;}
h2 span {position:absolute; right:0; top:0;}
h2 span select {margin:0 0 0 3px;}
</style>
