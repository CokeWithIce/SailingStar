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
                    <div class="image" :style="{backgroundImage:`url(${item.path})`}" @click="largeImage(item)">
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog :title="currentName" v-model="bigPic" width="1200">
                <img :src="currentImage" style="width:100%;"/>
        </el-dialog>
    </div>

</template>
<script setup>
import {ref, reactive } from 'vue';
import {property} from"/src/property/property.js";
// 遮罩层开关
const bigPic=ref(false);
// 遮罩层背景图片
const currentImage=ref("");
// 遮罩层图片名称
const currentName=ref("");
// 当前页面所有展示元素集合
const videoList=reactive(property.defaultImages.map((i)=>{
    i.name=i.path.split("\/").slice(-1)[0].replace(".jpg","");
    return i;
}));
// 点击打开大图片。
function largeImage(obj){
    bigPic.value=true;
    currentImage.value=obj.path;
    currentName.value=obj.name;
}
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
        >div{
            width:100%;
            height:150px;
            box-sizing: border-box;
            padding:0px;
            margin:0px;
            .image{
                width:100%;
                height:150px;
                background-repeat: no-repeat;
                background-size: contain;
                position:relative;
                cursor: pointer;
                p{
                    position:absolute;
                    bottom:0px;
                    right:0px;
                    left:0px;
                    height:30px;
                    line-height: 30px;
                    background:rgba(0,0,0,.7);
                    color:comm.$primary_color;
                    margin:0px;
                    padding:0px;
                    text-align: center;
                }
            }
            
        }
    }
}
</style>