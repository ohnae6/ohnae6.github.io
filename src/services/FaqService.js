import api from "@/utils/ApiHeaders";
import apiUrl from "@/utils/ApiUrl";

class FaqService {
  async deleteFaq({ FAQ_NUMBER }) {
    const res = await api.post(apiUrl.faq.deleteFaq, { FAQ_NUMBER });
    return res.data;
  }
  async getFaqList({}) {
    const res = await api.post(apiUrl.faq.getFaqList, {});
    return res.data;
  }
  async setFaq({ QUESTION, ANSWER, PRIORITY }) {
    const res = await api.post(apiUrl.faq.setFaq, { QUESTION, ANSWER, PRIORITY });
    return res.data;
  }
  async updateFaq({ FAQ_NUMBER, QUESTION, ANSWER, PRIORITY }) {
    const res = await api.post(apiUrl.faq.updateFaq, { FAQ_NUMBER, QUESTION, ANSWER, PRIORITY });
    return res.data;
  }
}
export default new FaqService();