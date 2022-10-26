import api from "@/utils/ApiHeaders";
import apiUrl from "@/utils/ApiUrl";

class ReservationService {
  async deleteReservation({ RESERVATION_NUMBER }) {
    const res = await api.post(apiUrl.reservation.deleteReservation, { RESERVATION_NUMBER });
    return res.data;
  }
  async getReservationList({ searchYear, searchMonth }) {
    const res = await api.post(apiUrl.reservation.getReservationList, { searchYear, searchMonth });
    return res.data;
  }
  /**
   * 예약저장
   */
  async setReservation({ 
    RESERVATION_DATE,
    ROOM_NUMBER,
    MEMBER_NAME,
    MEMBER_PHONE,
    MEMBER_EMAIL,
    PASSWORD,
    DESCRIPTION,
    ADD_COUNT_1,
    ADD_COUNT_2,
    ADD_COUNT_3,
    STATUS_CODE,
    PRICE
   }) {
    const res = await api.post(apiUrl.reservation.setReservation, { 
      RESERVATION_DATE,
      ROOM_NUMBER,
      MEMBER_NAME,
      MEMBER_PHONE,
      MEMBER_EMAIL,
      PASSWORD,
      DESCRIPTION,
      ADD_COUNT_1,
      ADD_COUNT_2,
      ADD_COUNT_3,
      STATUS_CODE,
      PRICE
     });
    return res.data;
  }
  /**
   * 예약정보수정 (팝업)
   */
  async updateReservation({
    RESERVATION_NUMBER,
    RESERVATION_DATE,
    ROOM_NUMBER,
    MEMBER_NAME,
    MEMBER_PHONE,
    MEMBER_EMAIL,
    PASSWORD,
    DESCRIPTION,
    ADD_COUNT_1,
    ADD_COUNT_2,
    ADD_COUNT_3,
    STATUS_CODE,
    PRICE
   }) {
    const res = await api.post(apiUrl.reservation.updateReservation, { 
      RESERVATION_NUMBER,
      RESERVATION_DATE,
      ROOM_NUMBER,
      MEMBER_NAME,
      MEMBER_PHONE,
      MEMBER_EMAIL,
      PASSWORD,
      DESCRIPTION,
      ADD_COUNT_1,
      ADD_COUNT_2,
      ADD_COUNT_3,
      STATUS_CODE,
      PRICE
     });
    return res.data;
  }
}
export default new ReservationService();