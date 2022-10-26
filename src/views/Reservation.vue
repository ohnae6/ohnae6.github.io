<template>
  <div id="reservation">
    <h2>Reservation</h2>
    <h2>
        {{ year }}년 {{ month }}월 <!-- 현재 달력의 년, 월 표시 -->
      </h2>
      <table class="table has-text-centered is-fullwidth">
        <thead>
          <th v-for="day in weekArr" :key="day">{{ day }}</th>
        </thead>
        <tbody>
          <tr v-for="(date, idx) in dateArr" :key="idx">
            <td v-for="(day, jdx) in date" :key="jdx">
              {{ day.day }}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  name: 'Reservation',
  components: {
  },
  setup(props, context) {
    return {}
  },
  data() {
    return {
      yearArr: this.$code.yearArr,
      monthArr: this.$code.monthArr,
      weekArr: this.$code.weekArr,
      yearSelected: moment().format('YYYY'),
      dateArr: [],
      year: 0,
      month: 0
    }
  },
  created() {
    const date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.calendarData();
  },
  mounted() {
  },
  methods: {
    // 달력 start
    calendarData() {
      const [
        monthFirstDay,
        monthLastDate,
      ] = this.getFirstDayLastDate(this.year, this.month);
      this.dateArr = this.getMonthOfDays(
        monthFirstDay,
        monthLastDate,
      );
    },
    getFirstDayLastDate(year, month) {
      const firstDay = new Date(year, month - 1, 1).getDay(); // 이번 달 시작 요일
      const lastDate = new Date(year, month, 0).getDate(); // 이번 달 마지막 날짜
      return [firstDay, lastDate];
    },
    getMonthOfDays(
      monthFirstDay,
      monthLastDate,
    ) {
      let day = 1;
      const dateArr = [];
      let weekOfDays = [];
      while (day <= monthLastDate) {
        if (day === 1) {
          for (let j = 0; j < monthFirstDay; j += 1) {
            weekOfDays.push({day: ''});
          }
        }
        weekOfDays.push({day: day});
        if (weekOfDays.length === 7) {
          dateArr.push(weekOfDays);
          weekOfDays = []; // 일주일 채우면 초기화
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
    // 달력 end
  },
};
</script>
<style scoped>
#reservation {width:100%;}
#reservation h2 {display:block;}
</style>
