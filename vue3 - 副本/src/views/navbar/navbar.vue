<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-item">首页</router-link>
      <router-link to="/resource" class="nav-item">畲歌资源库</router-link>
      <router-link to="/history" class="nav-item">历史传承</router-link>
      <router-link to="/art" class="nav-item">艺术价值</router-link>
      <router-link to="/about" class="nav-item">关于我们</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background-color: #1a4780;
  padding: 20px 0;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 40px;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.3s;
}

.nav-item:hover {
  opacity: 0.8;
}
</style>
