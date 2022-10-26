
const ext = '.php';

export default {
  // auth
  auth : {
    getLogin : '/kaisa/user/getLogin' + ext
  },
  // faq
  faq : {
    deleteFaq : '/chloris/faq/deleteFaq' + ext,
    getFaqList : '/chloris/faq/getFaqList' + ext,
    setFaq : '/chloris/faq/setFaq' + ext,
    updateFaq : '/chloris/faq/updateFaq' + ext
    },
  // notice
  notice : {
    deleteNotice : '/chloris/notice/deleteNotice' + ext,
    getNotice : '/chloris/notice/getNotice' + ext,
    getNoticeList : '/chloris/notice/getNoticeList' + ext,
    setNotice : '/chloris/notice/setNotice' + ext,
    updateNotice : '/chloris/notice/updateNotice' + ext
  },
  // qna
  qna : {
    deleteQna : '/chloris/qna/deleteQna' + ext,
    deleteQnaReply : '/chloris/qna/deleteQnaReply' + ext,
    getQna : '/chloris/qna/getQna' + ext,
    getQnaList : '/chloris/qna/getQnaList' + ext,
    getQnaPwdCheck : '/chloris/qna/getQnaPwdCheck' + ext,
    getQnaReplyList : '/chloris/qna/getQnaReplyList' + ext,
    setQna : '/chloris/qna/setQna' + ext,
    setQnaReply : '/chloris/qna/setQnaReply' + ext
  },
  // reservation
  reservation : {
    deleteReservation : '/chloris/reservation/deleteReservation' + ext,
    getReservationList : '/chloris/reservation/getReservationList' + ext,
    setReservation : '/chloris/reservation/setReservation' + ext,
    updateReservation : '/chloris/reservation/updateReservation' + ext
  },
  // room
  room : {
    getRoomList : '/chloris/room/getRoomList' + ext,
    setRoom : '/chloris/room/setRoom' + ext,
    updateRoom : '/chloris/room/updateRoom' + ext
  },
  // holiday
  holiday : {
    getHolidayList : '/chloris/holiday/getHolidayList' + ext,
    setHoliday : '/chloris/holiday/setHoliday' + ext,
    updateHoliday : '/chloris/holiday/updateHoliday' + ext
  }
};
