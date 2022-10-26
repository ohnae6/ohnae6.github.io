import api from "@/utils/ApiHeaders";
import apiUrl from "@/utils/ApiUrl";

class NoticeService {
  async deleteNotice({ NOTICE_NUMBER }) {
    const res = await api.post(apiUrl.notice.deleteNotice, { NOTICE_NUMBER });
    return res.data;
  }
  async getNotice({ NOTICE_NUMBER }) {
    const res = await api.post(apiUrl.notice.getNotice, { NOTICE_NUMBER });
    return res.data;
  }
  async getNoticeList({  }) {
    const res = await api.post(apiUrl.notice.getNoticeList, {  });
    return res.data;
  }
  async setNotice({ SUBJECT, CONTENT }) {
    const res = await api.post(apiUrl.notice.setNotice, { SUBJECT, CONTENT });
    return res.data;
  }
  async updateNotice({ NOTICE_NUMBER, SUBJECT, CONTENT }) {
    const res = await api.post(apiUrl.notice.updateNotice, { NOTICE_NUMBER, SUBJECT, CONTENT });
    return res.data;
  }
}
export default new NoticeService();