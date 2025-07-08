<template>
  <div class="wrapper">
    <div class="container">
      <video ref="videoRef" class="video" autoplay muted loop :src="videoSrc" controls :poster="posterImage"
        @timeupdate="updateProgress" @loadedmetadata="updateDuration"></video>
      <div ref="showDiv" class="showDiv" @click="toggleShowContent()">
        <div class="textContent" v-show="showContent">
          <h1>启航星视频</h1>
          <div>
            <p>光影交织的创意海洋中，启航星文化传媒工作室闪耀着独特光芒。我们专注于用镜头捕捉美好，以创意雕琢视觉盛宴。​</p>
            <p>舞台上，大舞台演出摄像业务，我们凭借专业设备与精湛技术，从多角度精准记录每一个精彩瞬间，让舞台的魅力与激情通过影像得以永恒留存。</p>
            <p>对于纪录片，我们深入挖掘故事内核，用细腻镜头讲述那些触动人心的故事，展现生活百态与世间万象。</p>
            <p>在照片拍摄领域，无论是商业大片、个人写真，还是活动跟拍，我们都能巧妙运用光线与构图，定格最动人的画面。</p>
            <p>而平面设计方面，我们以创意为笔，用色彩和图形为客户打造极具吸引力的视觉形象，从海报、宣传册到品牌视觉识别系统，每一项设计都独具匠心，助力客户在市场中脱颖而出。</p>
            <p>启航星文化传媒工作室，期待为您开启视觉艺术新征程 。</p>
            </div>
          <el-button class="btn"  type="primary" size="large" @click.stop="toggleShowContent()">隐藏此层</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const showContent=ref(true);
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
function toggleShowContent(){
  debugger;
  showContent.value=!showContent.value;
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
  background: linear-gradient(to right,
      black 0%,
      /* 左侧全黑 */
      comm.$gray_color 20%,
      /* 渐变为深灰 */
      #fff 50%,
      /* 中间主题色 */
      comm.$gray_color 80%,
      /* 渐变为深灰 */
      black 100%
      /* 右侧全黑 */
    );

  .container {
    // width: comm.$auto_width;
    width:100%;
    min-width:1280px;
    margin: 0px auto;

    .video {
      width: 1px;
      height: 1px;
      position: fixed;
      left: 1px;
      right: 1px;
    }

    .showDiv {
      background-repeat: no-repeat;
      background-position: center;
      min-width:1280px;
      // height: calc(100vw * 3 / 4);
      min-height: 900px;
      transition: background-image 0.05s linear;
      background-size: 100% 100%;
      padding: 1px;

      .textContent {
        width: comm.$auto_width;
        margin:100px auto 0px;
        height: 500px;
        border: 1px solid rgba(180, 180, 180, .8);
        background: rgba(255, 255, 255, .8);
        border-radius: 20px;
        padding: 50px;

        h1 {
          margin-top: 15px;
          color: comm.$primary_color;
          font-size:40px;
        }

        div {
          p{
            text-indent: 2em;
          }
          margin-top: 50px;
          color: comm.$primary_color;
          font-size: 20px;
        }

        .btn {
          font-size: 20px;
        }
      }

    }
  }
}
</style>