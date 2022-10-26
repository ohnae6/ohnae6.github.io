<template>
  <div id="adminRoom" class="admin">
    <h2>
      객실설정
      <b>수정전에 정보를 백업해놓으세요.</b>
    </h2>
    <div class="roomList" v-for="(item) in this.items" :key="item.ROOM_NUMBER">
      <form v-on:submit.prevent="updateRoom(item)">
        <table class="row">
          <tr>
            <th class="required">객실번호</th>
            <td>{{ item.ROOM_NUMBER }}</td>
            <th>객실명</th>
            <td><input type="text" name="ROOM_NAME" v-model="item.ROOM_NAME" required="required" /></td>
            <th>유형</th>
            <td><input type="text" data-only-number="true" name="ROOM_TYPE_CODE" v-model="item.ROOM_TYPE_CODE" required="required" /></td>
          </tr>
          <tr>
            <th>평수</th>
            <td><input type="text" maxlength="3" data-only-number="true" name="ROOM_M2" v-model="item.ROOM_M2" required="required" /> 평</td>
            <th>객실 기준 인원</th>
            <td><input type="text" maxlength="3" data-only-number="true" name="MIN_PERSONNEL" v-model="item.MIN_PERSONNEL" required="required" /> 명</td>
            <th>객실 최대 인원</th>
            <td><input type="text" maxlength="3" data-only-number="true" name="MAX_PERSONNEL" v-model="item.MAX_PERSONNEL" required="required" /> 명</td>
          </tr>
          <tr>
            <th>비수기 주중 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_1" v-model="item.PRICE_1" required="required" /> 원</td>
            <th>비수기 금요일 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_2" v-model="item.PRICE_2" required="required" /> 원</td>
            <th>비수기 주말 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_3" v-model="item.PRICE_3" required="required" /> 원</td>
          </tr>
          <tr>
            <th>준성수기 주중 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_4" v-model="item.PRICE_4" required="required" /> 원</td>
            <th>준성수기 금요일 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_5" v-model="item.PRICE_5" required="required" /> 원</td>
            <th>준성수기 주말 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_6" v-model="item.PRICE_6" required="required" /> 원</td>
          </tr>
          <tr>
            <th>성수기 주중 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_7" v-model="item.PRICE_7" required="required" /> 원</td>
            <th>성수기 금요일 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_8" v-model="item.PRICE_8" required="required" /> 원</td>
            <th>성수기 주말 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_9" v-model="item.PRICE_9" required="required" /> 원</td>
          </tr>
          <tr>
            <th>극성수기 주중 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_10" v-model="item.PRICE_10" required="required" /> 원</td>
            <th>극성수기 금요일 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_11" v-model="item.PRICE_11" required="required" /> 원</td>
            <th>극성수기 주말 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_12" v-model="item.PRICE_12" required="required" /> 원</td>
          </tr>
          <tr>
            <th>인원 추가 요금</th>
            <td colspan="5"><input type="text" maxlength="7" data-only-number="true" name="PRICE_ADD_1" v-model="item.PRICE_ADD_1" required="required" /> 원 (기준 인원 초과시 1인당 추가 요금)</td>
          </tr>
          <tr>
            <th>바베큐 추가 요금</th>
            <td colspan="5"><input type="text" maxlength="7" data-only-number="true" name="PRICE_ADD_2" v-model="item.PRICE_ADD_2" required="required" /> 원 </td>
          </tr>
          <tr>
            <th>온수 추가 요금</th>
            <td colspan="5"><input type="text" maxlength="7" data-only-number="true" name="PRICE_ADD_3" v-model="item.PRICE_ADD_3" required="required" /> 원</td>
          </tr>
          <tr>
            <th>설명</th>
            <td colspan="5"><textarea type="text" maxlength="100" name="DESCRIPTION" v-model="item.DESCRIPTION" /></td>
          </tr>
        </table>
        <div class="btnWrap">
          <button type="submit">{{ item.ROOM_NAME }} - 객실 수정</button>
        </div>
      </form>
    </div>
    <!-- 생성이 자주 있지 않으므로 숨김 -->
    <div class="room" style="display:none;">
      <h2>객실 생성</h2>
      <form v-on:submit.prevent="setRoom()">
        <table class="row">
          <tr>
            <th>객실명</th>
            <td><input type="text" name="ROOM_NAME" v-model="this.ROOM_NAME" required="required" /></td>
          </tr>
          <tr>
            <th>유형</th>
            <td><input type="text" data-only-number="true" name="ROOM_TYPE_CODE" v-model="this.ROOM_TYPE_CODE" required="required" /></td>
          </tr>
          <tr>
            <th>평수</th>
            <td><input type="text" maxlength="3" data-only-number="true" name="ROOM_M2" v-model="this.ROOM_M2" required="required" /> 평</td>
          </tr>
          <tr>
            <th>객실 기준 인원</th>
            <td><input type="text" maxlength="3" data-only-number="true" name="MIN_PERSONNEL" v-model="this.MIN_PERSONNEL" required="required" /> 명</td>
          </tr>
          <tr>
            <th>객실 최대 인원</th>
            <td><input type="text" maxlength="3" data-only-number="true" name="MAX_PERSONNEL" v-model="this.MAX_PERSONNEL" required="required" /> 명</td>
          </tr>
          <tr>
            <th>비수기 주중 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_1" v-model="this.PRICE_1" required="required" /> 원</td>
          </tr>
          <tr>
            <th>비수기 금요일 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_2" v-model="this.PRICE_2" required="required" /> 원</td>
          </tr>
          <tr>
            <th>비수기 주말 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_3" v-model="this.PRICE_3" required="required" /> 원</td>
          </tr>
          <tr>
            <th>준성수기 주중 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_4" v-model="this.PRICE_4" required="required" /> 원</td>
          </tr>
          <tr>
            <th>준성수기 금요일 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_5" v-model="this.PRICE_5" required="required" /> 원</td>
          </tr>
          <tr>
            <th>준성수기 주말 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_6" v-model="this.PRICE_6" required="required" /> 원</td>
          </tr>
          <tr>
            <th>성수기 주중 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_7" v-model="this.PRICE_7" required="required" /> 원</td>
          </tr>
          <tr>
            <th>성수기 금요일 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_8" v-model="this.PRICE_8" required="required" /> 원</td>
          </tr>
          <tr>
            <th>성수기 주말 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_9" v-model="this.PRICE_9" required="required" /> 원</td>
          </tr>
          <tr>
            <th>극성수기 주중 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_10" v-model="this.PRICE_10" required="required" /> 원</td>
          </tr>
          <tr>
            <th>극성수기 금요일 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_11" v-model="this.PRICE_11" required="required" /> 원</td>
          </tr>
          <tr>
            <th>극성수기 주말 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_12" v-model="this.PRICE_12" required="required" /> 원</td>
          </tr>
          <tr>
            <th>기준 인원 초과시 1인당 추가 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_ADD_1" v-model="this.PRICE_ADD_1" required="required" /> 원</td>
          </tr>
          <tr>
            <th>바베큐 추가 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_ADD_2" v-model="this.PRICE_ADD_2" required="required" /> 원</td>
          </tr>
          <tr>
            <th>온수 추가 요금</th>
            <td><input type="text" maxlength="7" data-only-number="true" name="PRICE_ADD_3" v-model="this.PRICE_ADD_3" required="required" /> 원</td>
          </tr>
          <tr>
            <th>노출우선순위</th>
            <td><input type="text" maxlength="2" data-only-number="true" name="PRIORITY" v-model="this.PRIORITY" /></td>
          </tr>
          <tr>
            <th>설명</th>
            <td><textarea type="text" maxlength="100" name="DESCRIPTION" v-model="this.DESCRIPTION" /></td>
          </tr>
        </table>
        <div class="btnWrap">
          <button type="submit">객실 생성</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import RoomService from '@/services/RoomService';

export default {
  name: 'AdminRoom',
  components: {
  },
  setup(props, context) {
    return {}
  },
  data() {
    return {
      items: [],
      ROOM_NAME: null,
      ROOM_TYPE_CODE: '1',
      ROOM_M2: '12',
      MIN_PERSONNEL: '2',
      MAX_PERSONNEL: '6',
      PRICE_1: 300000,
      PRICE_2: 350000,
      PRICE_3: 380000,
      PRICE_4: 400000,
      PRICE_5: 450000,
      PRICE_6: 500000,
      PRICE_7: 500000,
      PRICE_8: 550000,
      PRICE_9: 550000,
      PRICE_10: 600000,
      PRICE_11: 650000,
      PRICE_12: 650000,
      PRICE_ADD_1: 0,
      PRICE_ADD_2: 0,
      PRICE_ADD_3: 0,
      DESCRIPTION: '퀸베드,42TV,냉장고,에어컨,화장대,쿡탑,전기밥솥,취사도구,세면도구(샴푸,린스,비누,치약) 수건',
      PRIORITY: '1'
    }
  },
  computed: {
  },
  mounted() {
    this.getRoomList();
  },
  methods: {
    getRoomList() {
      RoomService.getRoomList({ QNA_NUMBER: this.QNA_NUMBER }).then(resp => {
        this.items = resp.items;
      }, error => {
        console.log(error);
      });
    },
    setRoom() {
      RoomService.setRoom({ 
        ROOM_NAME: this.ROOM_NAME,
        ROOM_TYPE_CODE: this.ROOM_TYPE_CODE,
        ROOM_M2: this.ROOM_M2,
        MIN_PERSONNEL: this.MIN_PERSONNEL,
        MAX_PERSONNEL: this.MAX_PERSONNEL,
        PRICE_1: this.PRICE_1,
        PRICE_2: this.PRICE_2,
        PRICE_3: this.PRICE_3,
        PRICE_4: this.PRICE_4,
        PRICE_5: this.PRICE_5,
        PRICE_6: this.PRICE_6,
        PRICE_7: this.PRICE_7,
        PRICE_8: this.PRICE_8,
        PRICE_9: this.PRICE_9,
        PRICE_10: this.PRICE_10,
        PRICE_11: this.PRICE_11,
        PRICE_12: this.PRICE_12,
        PRICE_ADD_1: this.PRICE_ADD_1,
        PRICE_ADD_2: this.PRICE_ADD_2,
        PRICE_ADD_3: this.PRICE_ADD_3,
        DESCRIPTION: this.DESCRIPTION,
        PRIORITY: this.PRIORITY
       }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    },
    updateRoom(item) {
      RoomService.updateRoom({ 
        ROOM_NUMBER: item.ROOM_NUMBER,
        ROOM_NAME: item.ROOM_NAME,
        ROOM_TYPE_CODE: item.ROOM_TYPE_CODE,
        ROOM_M2: item.ROOM_M2,
        MIN_PERSONNEL: item.MIN_PERSONNEL,
        MAX_PERSONNEL: item.MAX_PERSONNEL,
        PRICE_1: item.PRICE_1,
        PRICE_2: item.PRICE_2,
        PRICE_3: item.PRICE_3,
        PRICE_4: item.PRICE_4,
        PRICE_5: item.PRICE_5,
        PRICE_6: item.PRICE_6,
        PRICE_7: item.PRICE_7,
        PRICE_8: item.PRICE_8,
        PRICE_9: item.PRICE_9,
        PRICE_10: item.PRICE_10,
        PRICE_11: item.PRICE_11,
        PRICE_12: item.PRICE_12,
        PRICE_ADD_1: item.PRICE_ADD_1,
        PRICE_ADD_2: item.PRICE_ADD_2,
        PRICE_ADD_3: item.PRICE_ADD_3,
        DESCRIPTION: item.DESCRIPTION
       }).then(resp => {
        alert(resp.message);
        //location.reload();
      }, error => {
        console.log(error);
      });
    },
  },
};
</script>
<style scoped>
#adminRoom {width:100%;}
.roomList {width:100%;}
.room {width:100%;}
</style>
