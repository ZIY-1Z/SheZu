<template>
  <div class="container about-container">
    <h2>关于我们</h2>
    <div class="about-content">
      <p>畲族歌曲数字博物馆致力于保护、传承畲族民歌这一非物质文化遗产。畲族民歌承载着畲族人民的历史记忆、生活智慧与情感表达，是民族文化的璀璨明珠。</p>
      <p>我们的团队由畲族文化研究者、音乐爱好者与技术人员组成，希望通过数字化手段，让畲族民歌被更多人看见、喜爱，推动非遗文化在新时代创新发展。</p>
      <p>宗旨：抢救民族记忆，传承文化精髓，以数字方式留存畲族民歌的独特魅力。</p>
      <div class="about-img">
        <img src="../../assets/images/a1.jpg" alt="畲族文化活动" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.container {
  background-color: white;
  padding: 20px;
  margin: 20px auto;
  max-width: 1200px;
}
.about-content {
  line-height: 1.8;
  font-size: 16px;
}
.about-content p {
  margin-bottom: 15px;
}
.about-img {
  margin-top: 20px;
  text-align: center;
}
.about-img img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>