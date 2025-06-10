<template>
	<el-header class="header">
		<el-row class="row">
			<el-col :span="6">
				<div class="container">
					<img src="/public/logo.png" height="50" />
					<span class="title">启航星文化传媒工作室</span>
				</div>
			</el-col>
			<el-col :span="18">
				<div class="menu">
					<span>大型文演</span>
					<span>公司纪录片</span>
					<span>文艺设计</span>
					<span>线下展览</span>
					<span>联系我们</span>
				</div>
			</el-col>
		</el-row>
	</el-header>
</template>

<script setup>
import { ElContainer } from 'element-plus';
import { ref } from 'vue';
const activeIndex=ref(1);
</script>

<style lang="scss" scoped>
@use "/public/css/comm.scss" as comm;
	.header {
		width: 100%;
		height: comm.$header_height;

		.row {
			width: comm.$auto_width;
			margin: 0px auto;
			height:comm.$header_height;
		}
		.menu{
			width:60%;
			margin-left:40%;
			display: flex;
			justify-self: center;
			height: comm.$header_height;
			line-height:comm.$header_height;
			text-align:center;
		}
		.menu>span{
			flex:1;
		}
	}
	.container{
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>