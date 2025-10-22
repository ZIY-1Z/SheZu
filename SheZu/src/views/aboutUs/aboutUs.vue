<template>
  <div class="container about-container">
    <h2>{{ $t('aboutUs.title') }}</h2>
    <div class="about-content">
      <p>{{ $t('aboutUs.content1') }}</p>
      <p>{{ $t('aboutUs.content2') }}</p>
      <p>{{ $t('aboutUs.content3') }}</p>
      <div class="about-img">
        <!-- 尝试修改图片路径，根据实际项目结构调整 -->
        <img src="../../assets/images/a1.jpg" :alt="$t('aboutUs.imgAlt')" />
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
  background-color: rgb(239, 226, 239); 
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

/* 为图片添加样式，确保图片正确显示 */
.about-img {
  margin-top: 20px;
}

.about-img img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>
