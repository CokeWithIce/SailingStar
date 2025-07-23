<template>
    <div class="container100">
        <div class="endPic">
            <div class="mask"></div>
        </div>
        <div class="content">-
            <div class="text">
               <p>我们以光影为墨，构图为框，在照片写真领域雕琢每一份独特。</p>
               <p>无论是商业大片的张力、个人写真的灵动，还是活动瞬间的鲜活，都能精准捕捉。</p>
               <p>用光线勾勒轮廓，用构图定格情绪，让每一张照片都成为时光里的永恒注脚，藏着未曾言说的心动与故事。​</p>
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
    background-image: url("/public/images/bg_cifangzi.jpg");
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