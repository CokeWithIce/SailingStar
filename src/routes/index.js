import {
	createRouter,
	createWebHistory
} from 'vue-router';
import indexVue from '../pages/index.vue';
import largeEvent from "../pages/largeEvent.vue";
import documentary from"../pages/documentary.vue";
import photo from "../pages/photo.vue";
import offlineExhibition from"../pages/offlineExhibition.vue";
import marketing from"../pages/marketing.vue";
import contactUs from"../pages/contactUs.vue";

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
		name:"大型活动",
		component:largeEvent
	},
	{
		path:'/documentary',
		name:'纪录片',
		component:documentary,
	},
	{
		path:'/photo',
		name:'照片写真',
		component:photo,
	},
	{
		path:'/offlineExhibition',
		name:'线下展览',
		component:offlineExhibition,
	},
	{
		path:'/marketing',
		name:'市场营销',
		component:marketing,
	},
	{
		path:'/contactUs',
		name:'联系我们',
		component:contactUs,
	},
	{
		path: "/:pathMath(.*)*",
		name: "首页",
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
router.beforeEach((to, from, next) => {
	if(to.name){
		document.title=to.name;
	}
	next();
});