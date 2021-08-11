import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FavoriteList from "../views/FavoriteList";

const routes = [
  {
    path: '/:id_track?/:id_artist?/:id_album?',
    name: 'Home',
    component: Home
  },
  {
    path: '/Favorites',
    name: 'FavoriteList',
    component: FavoriteList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
