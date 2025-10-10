<template>
  <div class="container history-container">
    <h2>畲族民歌的历史传承</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">古代时期</div>
        <div class="timeline-content">
          <h3>起源与发展</h3>
          <p>畲族民歌起源于远古劳动与祭祀活动，最初以劳动号子、祭祀歌谣形式存在，随畲族迁徙逐渐形成独特的民歌体系。</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">近代时期</div>
        <div class="timeline-content">
          <h3>传承与演变</h3>
          <p>近代畲族民歌保留传统核心，同时吸收汉族等民族音乐元素，内容扩展至生活、爱情、斗争等领域，形式更丰富。</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">现代时期</div>
        <div class="timeline-content">
          <h3>保护与创新</h3>
          <p>新时代下，畲族民歌被系统整理保护，年轻音乐人尝试将现代元素与传统结合，通过数字平台等新方式创新传承。</p>
          <img src="../../assets/images/a4.png" alt="现代畲族民歌传承" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "History",
};
</script>

<style scoped>
.container {
  background-color: white;
  padding: 20px;
  margin: 20px auto;
  max-width: 1200px;
}
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: #1a56db;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
.timeline-item {
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
}
.timeline-item:nth-child(odd) {
  left: 0;
}
.timeline-item:nth-child(even) {
  left: 50%;
}
.timeline-date {
  background-color: #1a56db;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  display: inline-block;
}
.timeline-content {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 6px;
  margin-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.timeline-content h3 {
  color: #1a56db;
  margin-bottom: 10px;
}
.timeline-content p {
  line-height: 1.6;
}
.timeline-content img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 10px;
}
</style>