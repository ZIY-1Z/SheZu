<template>
  <div class="container resource-container">
    <h2>畲歌资源库</h2>
    <!-- 搜索栏 -->
    <div class="search-bar">
      <input
        type="text"
        v-model="searchKeyword"
        placeholder="搜索畲族民歌（歌名/类别等）"
      />
      <button @click="searchResource">搜索</button>
    </div>
    <!-- 分类筛选 -->
    <div class="resource-categories">
      <h3>资源分类</h3>
      <div class="category-buttons">
        <button
          @click="filterCategory('all')"
          :class="{ active: currentCategory === 'all' }"
        >
          全部
        </button>
        <button
          @click="filterCategory('labor')"
          :class="{ active: currentCategory === 'labor' }"
        >
          劳动歌曲
        </button>
        <button
          @click="filterCategory('love')"
          :class="{ active: currentCategory === 'love' }"
        >
          爱情歌曲
        </button>
        <button
          @click="filterCategory('ritual')"
          :class="{ active: currentCategory === 'ritual' }"
        >
          仪式歌曲
        </button>
        <button
          @click="filterCategory('narrative')"
          :class="{ active: currentCategory === 'narrative' }"
        >
          叙事长歌
        </button>
      </div>
    </div>
    <!-- 资源列表 -->
    <div class="resource-list">
      <div class="resource-item" v-for="(item, index) in filteredResources" :key="index">
        <h4>{{ item.title }}</h4>
        <p class="resource-category">类别：{{ item.categoryText }}</p>
        <p class="resource-desc">{{ item.description }}</p>
        <audio controls :src="item.audioUrl"></audio>
        <div class="resource-actions">
          <button>下载</button>
          <button>收藏</button>
        </div>
      </div>
      <p v-if="filteredResources.length === 0">暂无相关资源，请更换搜索条件~</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resource",
  data() {
    return {
      searchKeyword: "", // 搜索关键词
      currentCategory: "all", // 当前分类（all/ labor/ love/ ritual/ narrative）
      resources: [
        {
          title: "《采茶歌》",
          category: "labor",
          categoryText: "劳动歌曲",
          description: "描绘畲族采茶劳动场景与欢快心情的传统民歌。",
          audioUrl: require("../../assets/images/ss1.mp3"), 
        },
        {
          title: "《山歌唱给有情人》",
          category: "love",
          categoryText: "爱情歌曲",
          description: "表达畲族青年男女纯真爱情的经典情歌，旋律优美。",
          audioUrl: require("../../assets/images/ss2.mp3"),
        },
        {
          title: "《祭祖歌》",
          category: "ritual",
          categoryText: "仪式歌曲",
          description: "畲族祭祀祖先时演唱的庄重仪式歌曲，承载文化信仰。",
          audioUrl: require("../../assets/images/ss3.mp3"),
        },
        {
          title: "《高皇歌》",
          category: "narrative",
          categoryText: "叙事长歌",
          description: "讲述畲族起源与迁徙历史的史诗级长歌，文化价值极高。",
          audioUrl: require("../../assets/images/ss4.mp3"),
        },
      ],
    };
  },
  computed: {
    // 筛选资源（分类 + 搜索）
    filteredResources() {
      let result = this.resources;
      // 分类过滤
      if (this.currentCategory !== "all") {
        result = result.filter((item) => item.category === this.currentCategory);
      }
      // 搜索过滤
      if (this.searchKeyword) {
        const keyword = this.searchKeyword.toLowerCase();
        result = result.filter(
          (item) =>
            item.title.toLowerCase().includes(keyword) ||
            item.description.toLowerCase().includes(keyword) ||
            item.categoryText.toLowerCase().includes(keyword)
        );
      }
      return result;
    },
  },
  methods: {
    // 切换分类
    filterCategory(category) {
      this.currentCategory = category;
      this.searchKeyword = ""; // 切换分类时清空搜索
    },
    // 搜索（可扩展为调用后端接口，此处本地过滤）
    searchResource() {
      // 若需异步请求，可在此添加 axios 等逻辑
    },
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  padding: 20px;
  margin: 20px auto;
  max-width: 1200px;
}
.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.search-bar input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.search-bar button {
  padding: 8px 15px;
  background-color: #1a56db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.resource-categories {
  margin-bottom: 20px;
}
.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.category-buttons button {
  padding: 6px 12px;
  border: 1px solid #1a56db;
  background-color: white;
  color: #1a56db;
  border-radius: 4px;
  cursor: pointer;
}
.category-buttons button.active {
  background-color: #1a56db;
  color: white;
}
.resource-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.resource-item {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.resource-item h4 {
  color: #1a56db;
  margin-bottom: 8px;
}
.resource-category {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}
.resource-desc {
  line-height: 1.6;
  margin-bottom: 10px;
}
audio {
  width: 100%;
  margin-bottom: 10px;
}
.resource-actions button {
  padding: 5px 10px;
  margin-right: 5px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
}
.resource-actions button:hover {
  background-color: #f0f0f0;
}
</style>