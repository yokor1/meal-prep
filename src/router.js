import Vue from 'vue';
import Router from 'vue-router';

import AppHome from './views/AppHome';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/AppAbout.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('./views/AppSignUp.vue')
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import('./views/AppSignIn.vue')
        }
    ]
});

/*
routes: [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "./views/About.vue")
  }
]
*/
