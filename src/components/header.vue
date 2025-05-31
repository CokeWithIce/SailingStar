<template>
	<el-header class="header">
		<el-row class="row">
			<el-col :span="6">
				<div class="container">
					<img src="/public/logo.png" height="50" />
					<span class="title">启航星文化传媒工作室</span>
				</div>
			</el-col>
			<el-row :span="18">
				<div class="menu">
					<span>大型文演</span>
					<span>公司纪录片</span>
					<span>文艺设计</span>
					<span>线下展览</span>
					<span>联系我们</span>
				</div>
			</el-row>
		</el-row>
	</el-header>
</template>

<script setup>
import { ElContainer } from 'element-plus';
import { ref } from 'vue';
const activeIndex=ref(1);
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		height: 30px;

		.row {
			width: 1200px;
			margin: 0px auto;
			height:30px;
		}
		.menu{
			display: flex;
			justify-self: center;
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