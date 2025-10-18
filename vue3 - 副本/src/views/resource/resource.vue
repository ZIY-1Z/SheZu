<template>
  <div class="container resource-container">
    <h2>畲族视频资源库</h2>
    <!-- 搜索栏 -->
    <div class="search-bar">
      <input
        type="text"
        v-model="searchKeyword"
        placeholder="搜索畲族视频（标题/类别等）"
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
          劳动场景
        </button>
        <button
          @click="filterCategory('love')"
          :class="{ active: currentCategory === 'love' }"
        >
          爱情故事
        </button>
        <button
          @click="filterCategory('ritual')"
          :class="{ active: currentCategory === 'ritual' }"
        >
          自然生活
        </button>
        <button
          @click="filterCategory('narrative')"
          :class="{ active: currentCategory === 'narrative' }"
        >
          叙事传说
        </button>
      </div>
    </div>

    <!-- 滚动简介显示区域 -->
    <div class="scroll-desc-container" v-if="showScrollDesc">
      <div class="scroll-content" :style="{ transform: `translateX(${scrollPosition}px)` }">
        {{ formattedDesc }}
      </div>
    </div>

    <!-- 资源列表 -->
    <div class="resource-list">
      <div class="resource-item" v-for="(item, index) in filteredResources" :key="index">
        <h4>{{ item.title }}</h4>
        <p class="resource-category">类别：{{ item.categoryText }}</p>
        <!-- 视频播放时触发简介滚动 -->
        <video 
          controls 
          :src="item.videoUrl" 
          class="video-player"
          @play="startScrollDesc(index, item.description)"
          @pause="pauseScrollDesc"
          @ended="stopScrollDesc"
        >
          您的浏览器不支持视频播放
        </video>
        <p class="resource-desc">{{ item.description }}</p>
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
  name: "VideoResource",
  data() {
    return {
      searchKeyword: "",
      currentCategory: "all",
      resources: [
        // 劳动场景（3个）
        {
          title: "《采茶歌》",
          category: "labor",
          categoryText: "劳动场景",
          description: "记录畲族人民传统采茶过程的珍贵视频，展现了独特的采茶技艺和劳动氛围。畲族采茶有其独特的手法，通常采用单指折采，讲究“一芽一叶”或“一芽二叶”，既能保证茶叶品质，又不损伤茶树。",
          videoUrl: require("../../assets/images/s1.mp4"), 
        },
        {
          title: "《织带歌》",
          category: "labor",
          categoryText: "劳动场景",
          description: "展示畲族传统织布技艺的全过程，从纺线到成品的精美呈现。畲族织布以苎麻为主要原料，经过剥麻、绩麻、纺线、染线、织布等多道工序，全程手工完成。",
          videoUrl: require("../../assets/images/s2.mp4"),
        },
        {
          title: "《畲山茶歌》",
          category: "labor",
          categoryText: "劳动场景",
          description: "记录畲族人民在稻田劳作的日常，体现了与自然和谐共处的生活智慧。畲族传统耕作遵循“看天看地”的原则，不使用化肥农药，采用轮作、休耕等方式保持土壤肥力。",
          videoUrl: require("../../assets/images/s6.mp4"),
        },
        // 爱情故事（2个）
        {
          title: "《凤凰誓》",
          category: "love",
          categoryText: "爱情故事",
          description: "畲族青年男女通过对歌表达爱慕之情的传统习俗，歌声悠扬动人。畲族对歌有固定的曲调但无固定歌词，男女双方即兴创作，通过歌声问答传递情意。",
          videoUrl: require("../../assets/images/s4.mp4"),
        },
        {
          title: "《凤凰与山客》",
          category: "life",
          categoryText: "自然生活",
          description: "记录畲族传统婚礼的全过程，展现独特的婚恋习俗和文化内涵。畲族婚礼讲究“明媒正娶”，包含提亲、定亲、迎娶等多个环节，每个环节都有特定的仪式和歌谣。",
          videoUrl: require("../../assets/images/s5.mp4"),
        },
        // 仪式庆典（2个）
        {
          title: "《畲村飞出幸福歌》",
          category: "ritual",
          categoryText: "热情好客",
          description: "畲族年度祭祖大典的完整记录，展现了对祖先的崇敬和传统文化的传承。祭祖大典通常在农历正月举行，全族男女老少聚集在祠堂，由族长主持仪式。",
          videoUrl: require("../../assets/images/s7.mp4"),
        },
        {
          title: "《畲家山水遥》",
          category: "ritual",
          categoryText: "热情好客",
          description: "记录畲族人民庆祝新年的传统活动，包括歌舞表演和特色美食制作。畲族新年从除夕开始，持续到正月十五，期间有“打糍粑”“贴春联”“拜年”等习俗。",
          videoUrl: require("../../assets/images/s8.mp4"),
        },
        // 叙事传说（2个）
        {
          title: "《高皇歌》",
          category: "narrative",
          categoryText: "叙事传说",
          description: "通过动画形式生动展现畲族起源的古老传说，传承民族文化记忆。传说畲族是“盘瓠”的后代，远古时期盘瓠帮助皇帝平定外患，娶公主为妻，繁衍后代形成畲族。",
          videoUrl: require("../../assets/images/s4.mp4"),
        },
        {
          title: "畲族迁徙历史",
          category: "narrative",
          categoryText: "叙事传说",
          description: "记录畲族漫长的迁徙历史，展现民族坚韧不拔的精神。畲族最初生活在黄河流域，后因战乱等原因逐步南迁，最终定居在福建、浙江、广东等地的山区。",
          videoUrl: require("../../assets/images/s1.mp4"),
        }
      ],
      // 滚动简介相关变量
      showScrollDesc: false,       // 是否显示滚动简介
      currentDesc: "",             // 当前视频的完整简介
      formattedDesc: "",           // 格式化后的滚动文本（补全重复用于无缝滚动）
      scrollPosition: 0,           // 滚动位置
      scrollInterval: null,        // 滚动定时器
      activeVideoIndex: -1,        // 当前激活的视频索引
      scrollSpeed: 2,              // 滚动速度（像素/帧）
      visibleChars: 15             // 每次显示的字符数
    };
  },
  computed: {
    filteredResources() {
      let result = this.resources;
      if (this.currentCategory !== "all") {
        result = result.filter((item) => item.category === this.currentCategory);
      }
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
    // 计算滚动容器的宽度（根据显示字符数动态调整）
    scrollContainerWidth() {
      // 每个汉字约占16px宽度，15字约240px，加边距
      return `${this.visibleChars * 16 + 40}px`;
    }
  },
  methods: {
    // 开始滚动简介
    startScrollDesc(index, description) {
      // 若切换视频，先清除之前的滚动
      if (this.activeVideoIndex !== index) {
        this.stopScrollDesc();
      }
      this.activeVideoIndex = index;
      this.currentDesc = description;
      this.showScrollDesc = true;

      // 格式化文本：如果文本过短，重复拼接使其能滚动；否则正常使用
      this.formattedDesc = this.currentDesc.length > this.visibleChars 
        ? `${this.currentDesc}   ${this.currentDesc}`  // 中间加空格分隔
        : this.currentDesc;

      // 启动滚动定时器（每30ms滚动一次）
      this.scrollInterval = setInterval(() => {
        const textWidth = this.formattedDesc.length * 16; // 文本总宽度（估算）
        const halfWidth = textWidth / 2; // 一半宽度（滚动到此处重置，实现无缝）

        // 滚动到一半时重置位置，形成循环
        if (this.scrollPosition <= -halfWidth) {
          this.scrollPosition = 0;
        } else {
          this.scrollPosition -= this.scrollSpeed;
        }
      }, 30);
    },

    // 暂停滚动
    pauseScrollDesc() {
      if (this.scrollInterval) {
        clearInterval(this.scrollInterval);
        this.scrollInterval = null;
      }
    },

    // 停止滚动并重置
    stopScrollDesc() {
      this.pauseScrollDesc();
      this.scrollPosition = 0;
      this.showScrollDesc = false;
      this.activeVideoIndex = -1;
    },

    // 切换分类时停止滚动
    filterCategory(category) {
      this.currentCategory = category;
      this.searchKeyword = "";
      this.stopScrollDesc();
    },

    // 搜索时停止滚动
    searchResource() {
      this.stopScrollDesc();
    }
  },
  // 组件卸载时清除定时器
  beforeUnmount() {
    this.stopScrollDesc();
  }
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

/* 滚动简介样式 */
.scroll-desc-container {
  width: 100%;
  height: 50px;
  margin: 20px 0;
  padding: 0 20px;
  background: linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%);
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(26, 86, 219, 0.1);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}
.scroll-content {
  white-space: nowrap; /* 禁止文本换行 */
  font-size: 16px;
  color: #1a56db;
  font-weight: 500;
  transition: transform 0.03s linear; /* 平滑滚动动画 */
  position: absolute;
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
  display: flex;
  flex-direction: column;
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
.video-player {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
}
.resource-desc {
  line-height: 1.6;
  margin-bottom: 10px;
  flex-grow: 1;
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