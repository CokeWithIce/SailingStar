<template>
    <div class="container100">
        <div class="endPic">
            <div class="mask"></div>
        </div>
        <div class="content">
            <div class="text">
               <p>在时光的长河里，启航星文化传媒用镜头打捞那些值得被铭记的故事。</p>
               <p>我们深耕纪录片领域，执着于挖掘故事内核，以细腻镜头语言，展现生活百态里的感动，记录世间万象中的深意。</p>
               <p>从人物传奇到时代印记，让每一段真实都在光影中永恒绽放，用影像镌刻时光的温度与力量。</p>
            </div>
            <div class="video">
                <div v-for="item in videoList" key="index">
                    <video :ref="'videoRef'+index"  class="video" muted loop :src="item.path" controls></video>
                </div>
            </div>
        </div>
    </div>
    <el-dialog ref="movie">

    </el-dialog>
</template>
<script setup>
import {ref, reactive } from 'vue';
const videoList=reactive([
    {
        path:"/public/mp4/bigmall.mp4",
        name:'演示视频一',
    },{
        path:"/public/mp4/testVideo.mp4",
        name:'演示视频二',
    },
]);
</script>
<style lang="scss" scoped>
@use "/public/css/comm.scss" as comm;
@import url("/public/css/comm.css");

.endPic {
    width: 100vw;
    height: 100vh;
    background-image: url("/public/images/bg_shijizhong.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    .mask{
        width: 100vw;
        height: 100vh;
        background:rgba(0,0,0,.7);
    }

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
        video{
            width:100%;
            height:150px;
            box-sizing: border-box;
            padding:0px;
            margin:0px;
        }
    }
}
</style>