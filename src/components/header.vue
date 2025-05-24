<template>
	<el-header class="header">
		<el-row class="row">
			<el-col :span="24" >
				<img src="../assets/logo.png" height="30" />
				<text>adfasdf</text>
			</el-col>
		</el-row>
	</el-header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		height: 30px;

		.row {
			width: 1200px;
			margin: 0px auto;
			height:30px;
			text {
				line-height: 30px;
				height: 30px;
				font-size: 30px;
				font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
				padding-left:10px;
			}
		}

	}
</style>