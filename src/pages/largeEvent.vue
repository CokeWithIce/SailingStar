<template>
    <div class="container100">

        <header></header>
        <div class="endPic"></div>
        <div class="content">
            <div class="text">
                <p>我们专注工会及企业内部演出，以 “凝聚共识” 为核心，提供定制服务。​</p>
                <p>涵盖企业年会、工会表彰、中老年文艺汇演及体制内报告演出等。企业年会上，业内知名人士分享结合员工才艺，强化团队感；工会活动中，劳模事迹艺术化呈现，传递正能量。针对中老年群体，编排贴合其审美的合唱、戏曲联演；报告演出则注重流程庄重性与内容清晰传递。​</p>
                <p>执行上，善用企业礼堂等场地，轻量化舞美兼顾品质与成本。高效调度保障各类活动顺畅，让每一场相聚都有意义。</p>
            </div>
            <div class="video">
                <div v-for="(index, item) in videoList" key="index">
                    <video>

                    </video>
                </div>
            </div>
        </div>
    </div>
    <el-dialog ref="movie">

    </el-dialog>
</template>
<script setup>
import { reactive } from 'vue';

const videoList=reactive([
    {
        path:"/public/mp4/bigmall.mp4",
        name:'演示视频一',
    },{
        path:"/public/mp4/testVideo.mp4",
        name:'演示视频二',
    }
]);
</script>
<style lang="scss" scoped>
@use "/public/css/comm.scss" as comm;
@import url("/public/css/comm.css");

.endPic {
    width: 100vw;
    height: 100vh;
    background-image: url("/public/images/bg-tjeye.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: .5;
}

.content {
    left: 50vw;
    margin-left: calc(comm.$auto_width/-2);
    position: fixed;
    top: 10vh;
    bottom: 10vh;
    width: comm.$auto_width;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    >div {
        flex: 1;
        height: 80vh;
    }

    div:nth-child(2) {
        flex: 3;
    }
    .text{
        padding:20px 10px;
        text-indent: 2em;
        color:comm.$primary_color;
        font-size:18px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        line-height:30px;
        font-weight: bolder;

    }
    .video {
        display: grid;
        gap: 10px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: 150px;
        overflow: auto;
        padding:50px 20px;
        box-sizing: border-box;
        height: 80vh;
    }
}
</style>