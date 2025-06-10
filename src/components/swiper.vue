<template>
  <div class="wrapper">
    <div class="container">
      <video ref="videoRef" class="video" autoplay muted loop :src="videoSrc" controls
        :poster="posterImage" @timeupdate="updateProgress" @loadedmetadata="updateDuration"></video>
      <div ref="showDiv" class="showDiv">
        <div class="textContent">
        <h1>启航星视频</h1>
        <div>
          点亮创意之光，记录每段旅程的闪耀瞬间与故事启航。
        </div>
        <el-button class="btn" type="primary" size="large" >了解更多</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const videoRef = ref(null);
const showDiv = ref(null);
const videoSrc = ref('/mp4/bigmall.mp4');
const posterImage = ref('https://picsum.photos/800/450?random=1');
const currentTime = ref('00:00');
const duration = ref('00:00');
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
let captureInterval = null;
const updateProgress = () => {
  const video = videoRef.value;
  currentTime.value = formatTime(video.currentTime);
};

const updateDuration = () => {
  const video = videoRef.value;
  duration.value = formatTime(video.duration);
};

// 控制方法
const playVideo = () => {
  videoRef.value.play();
};

const pauseVideo = () => {
  videoRef.value.pause();
};
function startCapture() {
  if (!videoRef.value && !showDiv.value) {
    return;
  }
  captureInterval = setInterval(() => {
    canvas.width = videoRef.value.videoWidth;
    canvas.height = videoRef.value.videoHeight;
    ctx.drawImage(videoRef.value, 0, 0, canvas.width, canvas.height);
    const iu = canvas.toDataURL('image/jpeg');
    showDiv.value.style.backgroundImage = `url(${iu})`;
  }, 25)
}
onMounted(() => {
  // 视频元数据加载完成后开始截图
  videoRef.value.addEventListener('loadedmetadata', startCapture);

  // 视频加载错误处理
  videoRef.value.addEventListener('error', (err) => {
    console.error('视频加载错误:', err);
  });
});

onUnmounted(() => {
  // 清理资源
  if (captureInterval) clearInterval(captureInterval);
  if (videoRef.value) {
    videoRef.value.pause();
    videoRef.value.removeEventListener('loadedmetadata', startCapture);
  }
});
</script>
<style lang="scss" scoped>
@use "/public/css/comm.scss" as comm;

.wrapper {
  width: 100%;
  background:linear-gradient(
      to right, 
      comm.$primary_color 0%,               /* 左侧全黑 */
      comm.$primary_color 20%, /* 渐变为深灰 */
      #fff 50%,              /* 中间主题色 */
      comm.$primary_color 80%, /* 渐变为深灰 */
      comm.$primary_color 100%              /* 右侧全黑 */
    );

  .container {
    width: comm.$auto_width;
    margin: 0px auto;

    .video {
      width:1px; 
      height:1px;
      position:fixed;
      left:1px;right:1px;
    }

    .showDiv {
      background-repeat: no-repeat;
      background-position: center;
      height: 700px;
      transition: background-image 0.05s linear;
      background-size: 100% 100%;
      padding:1px;
      .textContent{
        width:350px;
        height:300px;
        border: 1px solid rgba(255,255,255,.6);;
        background:rgba(255,255,255,.6);
        border-radius: 20px;;
        padding:50px;
        margin-top:100px;
        margin-left:50px;
        h1{
          margin-top:30px;
          color:#fff;
        }
        div{
          margin-top:50px;
          color:#fff;
          font-size: 20px;
        }
        .btn{
          margin-top:50px;
          font-size:20px;
        }
      }
      
    }
  }
}
</style>