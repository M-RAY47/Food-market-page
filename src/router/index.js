import { createRouter, createWebHistory } from 'vue-router'
import Home from '../vews/Home.vue'


const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
  {
    path: '/P',
    name: 'Product'
  }
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router