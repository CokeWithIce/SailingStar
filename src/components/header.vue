<template>
	<div>
	<el-header class="header" v-show="showHeader">
		<el-row class="row">
			<el-col :span="24">
				<el-menu :default-active="activeIndex" text-color="rgb(64, 158, 255)" background-color="rgba(255,255,255,.0)" :ellipsis="false" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item >
						<div class="container">
							<img src="/public/logo.png" height="50"/>
							<span class="title">启航星文化传媒工作室</span>
						</div>
					</el-menu-item>
					
					<el-menu-item index="1">大型文演</el-menu-item>
					<el-menu-item index="2">文艺设计</el-menu-item>

					<el-menu-item index="3">线下展览</el-menu-item>
					<el-menu-item index="4">联系我们</el-menu-item>
					<el-menu-item @click="showHeaderF()">隐藏导航</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
	</el-header>
	<div class="show" v-show="!showHeader" @click="showHeaderF()">
		<el-icon size="30"><Menu /></el-icon>
	</div>
	</div>
</template>

<script setup>
import { ElContainer } from 'element-plus';
import { ref } from 'vue';
const props=defineProps({
	
})
const showHeader=ref(true);
const activeIndex = ref(0);
function handleSelect(i){
	switch(activeIndex){
		case 1:
			// this.$route.push()
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		default:
			break;
	}
}
function showHeaderF(){
	showHeader.value=!showHeader.value;
}
</script>

<style lang="scss" scoped>
@use "/public/css/comm.scss" as comm;

.header {
	width: 100%;
	height: 53px;
	padding:0px;
	.container {
		height: 50px;
	}
	transition: all 1s;
	background:rgba(255,255,255,.7);
	position: fixed;
	top:0px;
	left:0px;
	right:0px;
	border-bottom:3px solid comm.$primary_color;
	.row {
		width: comm.$auto_width;
		margin: 0px auto;
		height: comm.$header_height;
	}

	.el-menu--horizontal {
		--el-menu-horizontal-height: 50px;
		color:comm.$primary_color;
	}

	.el-menu--horizontal>.el-menu-item:nth-child(1) {
		margin-right: auto;
	}
}
.show{
	position: fixed;
	top:0px;
	height:30px;
	width:30px;
	right:10vw;
	padding:2px;
	border-radius: 2px;
	background:rgba(255,255,255,.7)
}
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	.title{
		color:comm.$primary_color;
		font-size:22px;
		font:"微软雅黑"；
	}
}
</style>