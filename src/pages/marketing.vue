<template>
    <div class="container100">
        <div class="endPic">  
            <div class="mask">
                <p>敬请期待</p>
            </div>
        </div>
    </div>
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
    background-image: url("/public/images/bg_jingangqiao.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding:0px;
    margin:0px;
    border:none;
    .mask{
        width: 100vw;
        height: 100vh;
        background:rgba(0,0,0,.7);
        p{
            background:none;
            height:35px;
            line-height: 35px;
            font-size:24px;
            padding-top:40vh;
            text-align: center;
            color:comm.$primary_color;
            margin:0px;
        }
    }

}

</style>