<template>
  <div id="adminHoliday" class="admin">
   <h2>
     휴일설정
     <b>변경시 주의하세요.</b>
   </h2>
    <form v-on:submit.prevent="setHoliday()">
      <div class="searchWrap">
        <table class="row">
          <tr>
            <th>년도</th>
            <td>
              <select v-model="year" v-on:change.prevent="clandarChange()">
                <option v-for="item in yearArr" :value="item.value" v-bind:key="item.value">
                  {{ item.text }}
                </option>
              </select>
              년
              <select v-model="month" v-on:change.prevent="clandarChange()">
                <option v-for="item in monthArr" :value="item.value" v-bind:key="item.value">
                  {{ item.text }}
                </option>
              </select>
              월
            </td>
          </tr>
          <tr>
            <th>준성수기</th>
            <td>
              <input type="text" class="small" v-model="dateArr1.startDate" v-on:change.prevent="clandarChange()"> 일 ~
              <input type="text" class="small" v-model="dateArr1.endDate" v-on:change.prevent="clandarChange()"> 일
            </td>
          </tr>
          <tr>
            <th>성수기</th>
            <td>
              <input type="text" class="small" v-model="dateArr2.startDate" v-on:change.prevent="clandarChange()"> 일 ~
              <input type="text" class="small" v-model="dateArr2.endDate" v-on:change.prevent="clandarChange()"> 일
            </td>
          </tr>
          <tr>
            <th>극성수기</th>
            <td>
              <input type="text" class="small" v-model="dateArr3.startDate" v-on:change.prevent="clandarChange()"> 일 ~
              <input type="text" class="small" v-model="dateArr3.endDate" v-on:change.prevent="clandarChange()"> 일
            </td>
          </tr>
        </table>
      </div>
      
      <div id="calendar">
        <h3>
          {{ year }}년 {{ month }}월 <!-- 현재 달력의 년, 월 표시 -->
        </h3>
        <table>
          <thead>
            <th v-for="week in weekArr" :key="week" v-bind:class="{
                'sun': week.value == '0',
                'fri': week.value == '5',
                'sat': week.value == '6'
                }">{{ week.text }}</th>
          </thead>
          <tbody>
            <tr v-for="(date, idx) in dateArr" :key="idx">
              <td v-for="(day, jdx) in date" :key="jdx" v-bind:class="{
                'holidayFront': day.holidayCode == '2',
                'holiday': day.holidayCode == '3',
                'sun': day.week == '0',
                'fri': day.week == '5',
                'sat': day.week == '6'
                }">
                <strong>{{ day.day }}</strong>
                <!-- table in start -->
                <table class="row" v-show="day.day">
                  <tr>
                    <th>시즌유형</th>
                    <td>
                      <select v-model="day.season">
                        <option v-for="season in seasonType" :value="season.value" v-bind:key="season.value">
                          {{ season.text }}
                        </option>
                        년
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>휴일코드</th>
                    <td>
                      <select v-model="day.holidayCode">
                        <option v-for="holiday in holidayCode" :value="holiday.value" v-bind:key="holiday.value">
                          {{ holiday.text }}
                        </option>
                        년
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>휴일명</th>
                    <td>
                      <input type="text" class="small" v-model="day.holidayName" />
                    </td>
                  </tr>
                  <tr>
                    <th>객실1가격</th>
                    <td>
                      <input type="text" class="small" v-model="day.price1" />
                    </td>
                  </tr>
                  <tr>
                    <th>객실2가격</th>
                    <td>
                      <input type="text" class="small" v-model="day.price2" />
                    </td>
                  </tr>
                  <tr>
                    <th>객실3가격</th>
                    <td>
                      <input type="text" class="small" v-model="day.price3" />
                    </td>
                  </tr>
                </table>
                <!--// table in end -->
              </td>
            </tr>
          </tbody>
        </table>
        <div class="btnWrap">
          <button type="button" @click="setHoliday(index)">휴일정보 저장</button>
        </div>
      </div>
    </form>

  </div>
</template>
<script>
import HolidayService from '@/services/HolidayService';
import moment from 'moment';

export default {
  name: 'AdminHoliday',
  components: {
  },
  setup(props, context) {
    return {}
  },
  data() {
    return {
      items: [],
      yearArr: this.$code.yearArr,
      monthArr: this.$code.monthArr,
      dateArr: [],
      year: moment().format('YYYY'),
      month: moment().format('MM'),
      dateArr1: this.$code.dateArr1, // 준성수기
      dateArr2: this.$code.dateArr2, // 성수기
      dateArr3: this.$code.dateArr3, // 극성수기
      holidayArr: this.$code.holidayArr,
      weekArr: this.$code.weekArr,
      seasonType: this.$code.seasonType,
      holidayCode: this.$code.holidayCode,
    }
  },
  created() {
    this.calendarData();   
  },
  updated() {
    
  },
  computed: {
  },
  mounted() {
    this.calendarData();   
  },
  methods: {
    clandarChange(){
      this.calendarData();   
    },
    addZero(n) {
        return n < 10 ? '0' + n : n;
    },
    changeSeason() {
    },
    changeHoliday() {
    },
    getHolidayList() {
      /* HolidayService.getHolidayList({ year: this.year, year: this.year }).then(resp => {
        this.items = resp.items;
      }, error => {
        console.log(error);
      }); */
    },
    setHoliday() {
      let dates = [];
      this.dateArr.forEach(function(o){
        o.forEach(function(obj){
          if(obj.day) {
            dates.push(obj);
          }
        });
      });
      /* HolidayService.setHoliday({ year: this.year, year: this.year }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      }); */
    },
    updateHoliday(item) {
      /* HolidayService.updateHoliday({ year: item.year, year: item.year, day: item.day }).then(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      }); */
    },
    // 달력 start
    calendarData() {
      const [ firstDay, lastDate ] = this.getFirstDayLastDate(this.year, this.month);
      this.dateArr = this.getMonthOfDays(firstDay, lastDate);
    },
    getFirstDayLastDate(year, month) {
      const firstDay = new Date(year, parseInt(month) - 1, 1).getDay(); // 이번 달 시작 요일
      const lastDate = new Date(year, month, 0).getDate(); // 이번 달 마지막 날짜
      return [firstDay, lastDate];
    },
    getMonthOfDays(firstDay, lastDate) {
      let day = 1;
      const dateArr = [];
      let weekOfDays = [];
      while (day <= lastDate) {
        let holidayCode = '1';
        let holidayName = '';
        let date = moment(new Date(this.year, parseInt(this.month) - 1, day)).format('YYYY-MM-DD');
        let dateArr1StartDate = moment(this.year + '-' + this.dateArr1.startDate, 'YYYY-MM-DD'); // 준성수기
        let dateArr1EndDate = moment(this.year + '-' + this.dateArr1.endDate, 'YYYY-MM-DD'); // 준성수기
        let dateArr2StartDate = moment(this.year + '-' + this.dateArr2.startDate, 'YYYY-MM-DD'); // 성수기
        let dateArr2EndDate = moment(this.year + '-' + this.dateArr2.endDate, 'YYYY-MM-DD'); // 성수기
        let dateArr3StartDate = moment(this.year + '-' + this.dateArr3.startDate, 'YYYY-MM-DD'); // 극성수기
        let dateArr3EndDate = moment(this.year + '-' + this.dateArr3.endDate, 'YYYY-MM-DD'); // 극성수기
        let week = new Date(date).getDay();
        
        let seasonCode = 1; // 비수기 
        if(moment(date).isBetween(dateArr1StartDate,dateArr1EndDate, 'days', true)){ // 준성수기
          seasonCode = 2;
        }
        if(moment(date).isBetween(dateArr2StartDate,dateArr2EndDate, 'days', true)){  // 성수기
          seasonCode = 3;
        }
        if(moment(date).isBetween(dateArr3StartDate,dateArr3EndDate, 'days', true)){ // 극성수기
          seasonCode = 4;
        }
        this.holidayArr.forEach(o => {
          if(o.value == moment(date).format('YYYY-MM-DD')) {
            holidayCode = '3';
            holidayName = o.text;
            return;
          } else if(moment(o.value).subtract(1, 'days').format('YYYY-MM-DD') == moment(date).format('YYYY-MM-DD')) {
            holidayCode = '2';
            // holidayName = o.text; // 휴일전날
            return;
          }
        });
        if (day === 1) {
          for (let j = 0; j < firstDay; j += 1) {
            //console.log(date, this.year + '-' + this.dateArr1.startDate);
            //console.log(date > new Date(this.year + '-' + this.dateArr1.startDate)());
            weekOfDays.push({
              day : '',
              date : moment(date).format('YYYY-MM-DD'),
              week: week,
              holidayCode: holidayCode,
              holidayName: holidayName,
              season: seasonCode
            });
          }
        }
        weekOfDays.push({
          day: day,
          date : moment(date).format('YYYY-MM-DD'),
          week: week,
          holidayCode: holidayCode,
          holidayName: holidayName,
          season: seasonCode
        });
        if (weekOfDays.length === 7) {  // 일주일 채우면
          dateArr.push(weekOfDays);
          weekOfDays = []; // 초기화
        }
        day += 1;
      }
      const len = weekOfDays.length;
      if (len > 0 && len < 7) {
        for (let k = 1; k <= 7 - len; k += 1) {
          weekOfDays.push(k);
        }
      }
      if (weekOfDays.length > 0) dateArr.push(weekOfDays); // 남은 날짜 추가
      return dateArr;
    },
  },
};
</script>
<style scoped>
#adminHoliday {width:100%;}

#calendar {width:100%;}
#calendar table th,
#calendar table td {padding:10px;}
#calendar table th,
#calendar table td td {padding:3px;}
#calendar table td td input {width:100%;}
#calendar table th strong,
#calendar table td strong {font-size:20px; display:inline-block; padding-bottom:10px;}
#calendar table th.fri,
#calendar table td.fri {color:blue;}
#calendar table th.sat,
#calendar table td.sat {color:#ff0000;}
#calendar table th.sun,
#calendar table td.sun {color:#ff0000;}
#calendar table th.holiday,
#calendar table td.holiday {color:#ff0000;}
#calendar table th.holidayFront,
#calendar table td.holidayFront {color:blue;}
</style>
