const store = () => import('@/store/store');

const Header = () => import('@/views/layout/Header.vue');
const Footer = () => import('@/views/layout/Footer.vue');
const AdminHeader = () => import('@/views/layout/AdminHeader.vue');
const AdminFooter = () => import('@/views/layout/AdminFooter.vue');

const Main = () => import('@/views/Main.vue');
const Reservation = () => import('@/views/Reservation.vue');
const Qna = () => import('@/views/Qna.vue');
const Notice = () => import('@/views/Notice.vue');
const About = () => import('@/views/About.vue');

const AdminLogin = () => import('@/views/admin/AdminLogin.vue');
const AdminReservation = () => import('@/views/admin/AdminReservation.vue');
const AdminQna = () => import('@/views/admin/AdminQna.vue');
const AdminNotice = () => import('@/views/admin/AdminNotice.vue')
const AdminFaq = () => import('@/views/admin/AdminFaq.vue')
const AdminRoom = () => import('@/views/admin/AdminRoom.vue');
const AdminHoliday = () => import('@/views/admin/AdminHoliday.vue');

const Error = () => import('@/views/error/Error.vue');
const NotFound = () => import('@/views/error/NotFound.vue');

export const AuthRouters = [
  {
    path: '/',
    name: 'Main',
    isAuth: false,
    components: {
      Header: Header,
      Footer: Footer,
      Contents: Main,
    },
  },
  {
    path: '/reservation',
    name: 'Reservation',
    isAuth: false,
    components: {
      Header: Header,
      Footer: Footer,
      Contents: Reservation,
    },
  },
  {
    path: '/qna',
    name: 'Qna',
    isAuth: false,
    components: {
      Header: Header,
      Footer: Footer,
      Contents: Qna,
    },
  },
  {
    path: '/notice',
    name: 'Notice',
    isAuth: false,
    components: {
      Header: Header,
      Footer: Footer,
      Contents: Notice,
    },
  },
  {
    path: '/about',
    name: 'About',
    isAuth: false,
    components: {
      Header: Header,
      Footer: Footer,
      Contents: About,
    },
  },
  // admin
  {
    path: '/admin',
    name: 'AdminLogin',
    components: {
      Contents: AdminLogin,
    },
  },
  {
    path: '/admin/reservation',
    name: 'AdminReservation',
    components: {
      Header: AdminHeader,
      Footer: AdminFooter,
      Contents: AdminReservation,
    },
    beforeEnter: (to, from, next) => {
      if(sessionStorage.getItem('auth')) {
        next();
      } else {
          alert('권한이 없습니다.');
          next({ name: from.name });
      }
    }
  },
  {
    path: '/admin/qna',
    name: 'AdminQna',
    components: {
      Header: AdminHeader,
      Footer: AdminFooter,
      Contents: AdminQna,
    },
    beforeEnter: (to, from, next) => {
      if(sessionStorage.getItem('auth')) {
        next();
      } else {
          alert('권한이 없습니다.');
          next({ name: from.name });
      }
    }
  },
  {
    path: '/admin/notice',
    name: 'AdminNotice',
    components: {
      Header: AdminHeader,
      Footer: AdminFooter,
      Contents: AdminNotice,
    },
    beforeEnter: (to, from, next) => {
      if(sessionStorage.getItem('auth')) {
        next();
      } else {
          alert('권한이 없습니다.');
          next({ name: from.name });
      }
    }
  },
  {
    path: '/admin/faq',
    name: 'AdminFaq',
    components: {
      Header: AdminHeader,
      Footer: AdminFooter,
      Contents: AdminFaq,
    },
    beforeEnter: (to, from, next) => {
      if(sessionStorage.getItem('auth')) {
        next();
      } else {
          alert('권한이 없습니다.');
          next({ name: from.name });
      }
    }
  },
  {
    path: '/admin/notice',
    name: 'AdminNotice',
    components: {
      Header: AdminHeader,
      Footer: AdminFooter,
      Contents: AdminNotice,
    },
    beforeEnter: (to, from, next) => {
      if(sessionStorage.getItem('auth')) {
        next();
      } else {
          alert('권한이 없습니다.');
          next({ name: from.name });
      }
    }
  },
  {
    path: '/admin/room',
    name: 'AdminRoom',
    components: {
      Header: AdminHeader,
      Footer: AdminFooter,
      Contents: AdminRoom,
    },
    beforeEnter: (to, from, next) => {
      if(sessionStorage.getItem('auth')) {
        next();
      } else {
          alert('권한이 없습니다.');
          next({ name: from.name });
      }
    }
  },
  {
    path: '/admin/holiday',
    name: 'AdminHoliday',
    components: {
      Header: AdminHeader,
      Footer: AdminFooter,
      Contents: AdminHoliday,
    },
    beforeEnter: (to, from, next) => {
      if(sessionStorage.getItem('auth')) {
        next();
      } else {
          alert('권한이 없습니다.');
          next({ name: from.name });
      }
    }
  },
  //error
  {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'NotFound' },
  },
  {
    path: '/error',
    name: 'Error',
    components: {
      Contents: Error,
    },
  },
  {
    path: '/notFound',
    name: 'NotFound',
    components: {
      Contents: NotFound,
    },
  },
];