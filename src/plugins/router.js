import { createRouter, createWebHashHistory } from "vue-router";
import { Main, PlaceInfo } from "@/views";


const routes = [
	{ path: '', name: 'main', component: Main },
	{ path: '/place/:id', name: 'place', component: PlaceInfo },
]


const router = createRouter({
	routes,
	history: createWebHashHistory()
})


export default router;