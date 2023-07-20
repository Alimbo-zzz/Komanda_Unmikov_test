import { createRouter, createWebHistory } from "vue-router";
import { Main, PlaceInfo } from "@/views";


const routes = [
	{ path: '', name: 'main', component: Main },
	{ path: '/place/:id', name: 'place', component: PlaceInfo },
]


const router = createRouter({
	routes,
	history: createWebHistory()
})


export default router;