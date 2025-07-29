<template>
    <div class="container100">
        <div class="endPic">
            <div class="mask"></div>
        </div>
        <div class="content">-
            <div class="text">
                <p>&nbsp</p>
                <p>&nbsp</p>

                <p>有任何疑问？请拨打电话，或私信官方邮箱，我们随时为您解答。</p>
                <p>电话：18630873550</p>
                <p>邮箱：xiaoxuehua@163.com</p>
                <P>地址：天津市红桥区双环屯街道碧春园1-1705</P>
            </div>
            <div class="video">
                <img src="/public/images/addUs.jpg" width="400" />
            </div>
        </div>
    </div>
</template>
<script setup>
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

    .mask {
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, .7);
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
        flex: 1;
    }

    .text {
        padding: 20px 10px;
        text-indent: 2em;
        color: comm.$primary_color;
        font-size: 18px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        line-height: 30px;
        font-weight: bolder;

    }

    .video {
        display: grid;
        gap: 10px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: 150px;
        overflow: auto;
        padding: 50px 20px;
        box-sizing: border-box;
        height: 80vh;

        video {
            width: 100%;
            height: 150px;
            box-sizing: border-box;
            padding: 0px;
            margin: 0px;
        }
    }
}
</style>