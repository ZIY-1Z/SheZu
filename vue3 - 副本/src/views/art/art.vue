<template>
  <div class="container art-container">
    <h2>畲族民歌的艺术价值</h2>
    <div class="art-cards">
      <div class="art-card">
        <h3>独特音乐形式</h3>
        <p>畲族民歌以民族五声调式为基础，旋律优美流畅、节奏明快活泼，兼具叙事与抒情性。从劳动号子到抒情短曲，都能通过旋律传递畲族人民的情感与生活场景。</p>
        <img src="../../assets/images/a2.png" alt="畲族民歌音乐形式" />
      </div>
      <div class="art-card">
        <h3>丰富表现手法</h3>
        <p>歌词运用比喻、拟人、夸张等修辞，生动形象且富有诗意；演唱技巧上，假声、颤音等手法让歌曲更具感染力，是民族音乐艺术的珍贵样本。</p>
        <img src="../../assets/images/a3.png" alt="畲族民歌表现手法" />
      </div>
      <div class="art-card">
        <h3>文化艺术瑰宝</h3>
        <p>畲族民歌融合了畲族的历史、民俗、宗教等内容，不仅是音乐艺术的体现，更是研究畲族文化的重要载体，具有极高的艺术与学术研究价值。</p>
        <img src="../../assets/images/a4.png" alt="畲族民歌文化瑰宝" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Art",
};
</script>

<style scoped>
.container {
  background-color: white;
  padding: 20px;
  margin: 20px auto;
  max-width: 1200px;
}
.art-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.art-card {
  flex: 1 1 300px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.art-card h3 {
  color: #1a56db;
  margin-bottom: 10px;
}
.art-card p {
  line-height: 1.6;
  margin-bottom: 15px;
}
.art-card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>
