import {
	createRouter,
	createWebHistory
} from 'vue-router';
import indexVue from '../pages/index.vue';
import largeEvent from "../pages/largeEvent.vue";
const routes = [{
		path: '/',
		name: '首页',
		meta:{
			title:"首页"
		},
		component: indexVue
	},
	{
		path:'/largeEvent',
		name:"活动",
		component:largeEvent
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