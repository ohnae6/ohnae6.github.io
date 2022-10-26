import api from "@/utils/ApiHeaders";
import apiUrl from "@/utils/ApiUrl";

class RoomService {
  async getRoomList({  }) {
    const res = await api.post(apiUrl.room.getRoomList, {  });
    return res.data;
  }
  /**
   * 방저장
   */
  async setRoom({ 
    ROOM_NAME,
    ROOM_TYPE_CODE,
    ROOM_M2,
    MIN_PERSONNEL,
    MAX_PERSONNEL,
    PRICE_1,
    PRICE_2,
    PRICE_3,
    PRICE_4,
    PRICE_5,
    PRICE_6,
    PRICE_7,
    PRICE_8,
    PRICE_9,
    PRICE_10,
    PRICE_11,
    PRICE_12,
    PRICE_ADD_1,
    PRICE_ADD_2,
    PRICE_ADD_3,
    DESCRIPTION,
    PRIORITY
   }) {
    const res = await api.post(apiUrl.room.setRoom, { 
      ROOM_NAME,
      ROOM_TYPE_CODE,
      ROOM_M2,
      MIN_PERSONNEL,
      MAX_PERSONNEL,
      PRICE_1,
      PRICE_2,
      PRICE_3,
      PRICE_4,
      PRICE_5,
      PRICE_6,
      PRICE_7,
      PRICE_8,
      PRICE_9,
      PRICE_10,
      PRICE_11,
      PRICE_12,
      PRICE_ADD_1,
      PRICE_ADD_2,
      PRICE_ADD_3,
      DESCRIPTION,
      PRIORITY
     });
    return res.data;
  }
  /**
   * 방수정
   */
  async updateRoom({ 
    ROOM_NUMBER,
    ROOM_NAME,
    ROOM_TYPE_CODE,
    ROOM_M2,
    MIN_PERSONNEL,
    MAX_PERSONNEL,
    PRICE_1,
    PRICE_2,
    PRICE_3,
    PRICE_4,
    PRICE_5,
    PRICE_6,
    PRICE_7,
    PRICE_8,
    PRICE_9,
    PRICE_10,
    PRICE_11,
    PRICE_12,
    PRICE_ADD_1,
    PRICE_ADD_2,
    PRICE_ADD_3,
    DESCRIPTION
   }) {
    const res = await api.post(apiUrl.room.updateRoom, { 
      ROOM_NUMBER,
      ROOM_NAME,
      ROOM_TYPE_CODE,
      ROOM_M2,
      MIN_PERSONNEL,
      MAX_PERSONNEL,
      PRICE_1,
      PRICE_2,
      PRICE_3,
      PRICE_4,
      PRICE_5,
      PRICE_6,
      PRICE_7,
      PRICE_8,
      PRICE_9,
      PRICE_10,
      PRICE_11,
      PRICE_12,
      PRICE_ADD_1,
      PRICE_ADD_2,
      PRICE_ADD_3,
      DESCRIPTION
     });
    return res.data;
  }
}

export default new RoomService();