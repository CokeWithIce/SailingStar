import {
	createRouter,
	createWebHistory
} from 'vue-router';
import indexVue from '../pages/index.vue';
const routes = [{
		path: '/',
		name: 'Home',
		component: indexVue
	},
	{
		path: "/:pathMath(.*)*",
		name: "/:pathMath(.*)*",
		component: indexVue,
		meta: {
			title: "未找到页面"
		}
	}
];

export const router = createRouter({
	history: createWebHistory(),
	routes
});
router.beforeEach((form, to, next) => {
	next();
})