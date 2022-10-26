import api from "@/utils/ApiHeaders";
import apiUrl from "@/utils/ApiUrl";

class QnaService {
  async deleteQna({ QNA_NUMBER }) {
    const res = await api.post(apiUrl.qna.deleteQna, { QNA_NUMBER });
    return res.data;
  }
  async deleteQnaReply({ QNA_NUMBER }) {
    const res = await api.post(apiUrl.qna.deleteQnaReply, { QNA_NUMBER });
    return res.data;
  }
  async getQna({ QNA_NUMBER }) {
    const res = await api.post(apiUrl.qna.getQna, { QNA_NUMBER });
    return res.data;
  }
  async getQnaList({ searchYear }) {
    const res = await api.post(apiUrl.qna.getQnaList, { searchYear });
    return res.data;
  }
  async getQnaPwdCheck({ QNA_NUMBER, PASSWORD }) {
    const res = await api.post(apiUrl.qna.getQnaPwdCheck, { QNA_NUMBER, PASSWORD });
    return res.data;
  }
  async getQnaReplyList({ QNA_NUMBER }) {
    const res = await api.post(apiUrl.qna.getQnaReplyList, { QNA_NUMBER });
    return res.data;
  }
  async setQna({ ROOM_DATE, MEMBER_NAME, MEMBER_PHONE, MEMBER_EMAIL, PASSWORD, SUBJECT, CONTENT }) {
    const res = await api.post(apiUrl.qna.setQna, { ROOM_DATE, MEMBER_NAME, MEMBER_PHONE, MEMBER_EMAIL, PASSWORD, SUBJECT, CONTENT });
    return res.data;
  }
  async setQnaReply({ QNA_NUMBER, MEMBER_NAME, REPLY_CONTENT }) { // 댓글달기 (팝업)
    const res = await api.post(apiUrl.qna.setQnaReply, { QNA_NUMBER, MEMBER_NAME, REPLY_CONTENT });
    return res.data;
  }
}
export default new QnaService();