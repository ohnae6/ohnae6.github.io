import { createWebHistory, createRouter } from 'vue-router';
import { AuthRouters } from './router.auth';
import store from '@/store/store';

const router = createRouter({
  mode: 'history',
  routes: [
      ...AuthRouters
  ],
  history: createWebHistory(),
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition;
      } else {
          return { x: 0, y: 0 };
      }
  },
});

router.onError((error) => {
  console.warn(error);
  // router.replace({ name: 'Error' });
});

router.beforeEach((to, from, next) => {
  // console.log(store.state.auth);
  if (isReserveQueryStringState(to, from)) {
      next({ name: to.name, params: to.params, query: from.query });
  }
  next();
});

router.afterEach((to, from) => {
  try {
      //console.log(process.env.NODE_ENV); //development
  } catch (e) {
      console.warn('loaded failed.');
  }
});

function hasQueryStrings (route) {
  return !!Object.keys(route.query).length;
}

function isReserveQueryStringState (to, from) {
  const startComponentName = to.name;
  const destinationComponentName = from.name;
  const isMoveSameComponent = startComponentName === destinationComponentName;

  if (isMoveSameComponent && hasQueryStrings(from) && !hasQueryStrings(to)) {
      return true;
  }

  return false;
}

export default router;
