import api from "@/utils/ApiHeaders";
import apiUrl from "@/utils/ApiUrl";

class HolidayService {
  async getHolidayList({ year, month }) {
    const res = await api.post(apiUrl.holiday.getHolidayList, { year, month });
    return res.data;
  }
  async setHoliday({ year, month }) {
    const res = await api.post(apiUrl.holiday.setHoliday, { year, month });
    return res.data;
  }
  async updateHoliday({ year, month }) {
    const res = await api.post(apiUrl.holiday.updateHoliday, { year, month });
    return res.data;
  }
}

export default new HolidayService();