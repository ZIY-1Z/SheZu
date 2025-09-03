<template>
    <div class="container">
        <!-- 页眉 -->
      <div class="header">
            <div class="logo"><img src="../../assets/images/logo.png" width="266" height="79"></div>
            <div class="search-box">
                <input type="text" placeholder="搜索...">
                <button>搜索</button>
            </div>
        </div>


        <!-- 导航条 -->
        <div class="nav">
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">畲歌资源库</a></li>
                <li><a href="#">历史传承</a></li>
                <li><a href="#">艺术价值</a></li>
                <li><a href="#">关于我们</a></li>
            </ul>
        </div>

        <!-- Banner -->
        <div class="banner">
            <!-- 代码 开始 -->
            <div class="carousel-container" id="carousel-container">
                <img class="carousel-image" src="../../assets/images/111.png" alt="Image 1"> 
                <div class="carousel-arrow left" id="left-arrow">&#8249;</div>
                <div class="carousel-arrow right" id="right-arrow">&#8250;</div>
            </div>
            <!-- 代码 结束 -->
            <div class="banner-text">
                <h2>畲族数字博物馆- 非遗文化的传承与创新</h2>
                <p>抢救-留存民族记忆，打造精致生活，传承文化精髓</p>
            </div>
        </div>

        <!-- 水平线 --><!-- 欢迎语 -->
        <div class="welcome">
            <h2>欢迎来到畲族歌曲数字博物馆</h2>
            <p>畲族民歌是畲族文化的璀璨明珠，承载着畲族的历史记忆、生活智慧与情感表达。然而，随着时代变迁，浙江畲族聚居区的民歌手抄本面临老化、损毁，音像资料也因存储介质等问题有丢失风险。</p>
            <p>畲歌数字博物馆致力于对这些珍贵文化遗产进行抢救性采集与数字化保护，通过构建系统、丰富的数字化资源库，打造沉浸式展示与体验平台，让畲族文化在数字时代焕发新的生命力。</p>
        </div>

        <!-- 水平线 --><!-- 非遗文化介绍 -->
        <div class="heritage">
            <div class="heritage-content">
                <div class="heritage-image">
                  <img src="../../assets/images/11.png" alt="非遗文化">
              </div>
                <div class="heritage-text">
                    <h2>非遗文化 - 畲族民歌</h2>
                    <p>畲族民歌作为中国非物质文化遗产的重要代表，承载着畲族悠久的历史与文化。它不只是一种传统音乐形式，更是畲族文化传承的鲜活载体</p>
                    <p>畲族民歌的创作与演唱源远流长，从劳作号子、爱情倾诉到民俗仪式，每一种表达都凝聚了畲族人民的生活智慧与情感。这种艺术形式不仅体现了畲族独特的文化魅力，也展现了他们对生活的热爱与对美好未来的向往。</p>
                    <p>畲族民歌以其独特的旋律、生动的歌词和真挚的情感而闻名。它不仅具有重要的文化价值，更具有极高的艺术欣赏和研究价值。</p>
                </div>
            </div>
        </div>

        <!-- 水平线 -->
        <div class="divider"></div>

        <!-- 工艺流程 -->
        <div class="process">
            <h2>传统工艺流程</h2>
            <div class="process-steps">
                <div class="step">
                    <img src="../../assets/images/1.png" alt="选料">
                    <h3>精选原料</h3>
                    <p>选用优质瓷土，确保原料的纯度和质量，这是制作高品质白瓷的基础。</p>
              </div>
                <div class="step">
                    <img src="../../assets/images/2.png" alt="制坯">
                    <h3>精心制坯</h3>
                    <p>通过手工或机械方式将瓷土塑造成型，每一件坯体都经过严格的质量检查。</p>
              </div>
                <div class="step">
                    <img src="../../assets/images/3.png" alt="施釉">
                    <h3>精细施釉</h3>
                    <p>采用传统工艺施釉，确保釉面均匀光滑，为后续烧制打下良好基础。</p>
              </div>
                <div class="step">
                    <img src="../../assets/images/4.png" alt="烧制">
                    <h3>高温烧制</h3>
                    <p>在高温窑炉中烧制，精确控制温度和时间，确保成品的质地和釉色达到最佳状态。</p>
              </div>
            </div>
        </div>

        <!-- 水平线 -->
        <div class="divider"></div>

        <!-- 白瓷艺术 -->
        <div class="art">
            <h2>白瓷艺术珍品</h2>
            <div class="art-grid">
                <div class="art-card">
                    <img src="../../assets/images/w1.png" alt="青花瓷瓶">
                    <div class="art-card-content">
                    <h3>青花瓷瓶</h3>
                        <p>青花瓷瓶以其独特的青花图案和优雅的造型而闻名，是德化白瓷的经典之作。</p>
                    </div>
                </div>
                <div class="art-card">
                    <img src="../../assets/images/w2.png" alt="白瓷茶具">
                    <div class="art-card-content">
                    <h3>白瓷茶具</h3>
                        <p>白瓷茶具以其洁白如玉的质地和精湛的工艺，成为茶道爱好者的首选。</p>
                    </div>
                </div>
                <div class="art-card">
                    <img src="../../assets/images/w3.png" alt="白瓷雕塑">
                    <div class="art-card-content">
                    <h3>白瓷雕塑</h3>
                        <p>白瓷雕塑以其细腻的质感和生动的造型，展现了德化白瓷的艺术魅力。</p>
                    </div>
                </div>
                <div class="art-card">
                    <img src="../../assets/images/w5.png" alt="白瓷花瓶">
                    <div class="art-card-content">
                    <h3>白瓷花瓶</h3>
                        <p>白瓷花瓶以其简约而优雅的设计，成为家居装饰的绝佳选择。</p>
                    </div>
                </div>
                <div class="art-card">
                    <img src="../../assets/images/w6.png" alt="白瓷餐具">
                    <div class="art-card-content">
                    <h3>白瓷餐具</h3>
                        <p>白瓷餐具以其实用性和美观性，为您的餐桌增添一份高雅。</p>
                    </div>
                </div>
                <div class="art-card">
                    <img src="../../assets/images/w4.png" alt="白瓷花瓶">
                    <div class="art-card-content">
                    <h3>白瓷装饰</h3>
                        <p>白瓷装饰以其简约而优雅的设计，成为家居装饰的绝佳选择。</p>
                    </div>
                </div>
            </div>
            
        </div>

        <!-- 页脚 -->
        <div class="footer">
            <p>&copy; 2025 德化白瓷 版权所有</p>
        </div>
    </div>
</template>
<script>

</script>

<style scoped>


        .container {
            width: 1400px;
            margin: 0 auto;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        /* 页眉样式 */
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px;
            background-color: #fff;
        }

        .logo {
            font-size: 42px;
            font-weight: bold;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
            color: #1a4780; /* 深蓝色 */
            height: 79px;
        }

        .search-box {
            display: flex;
            align-items: center;
        }

        .search-box input {
            padding: 12px 16px;
            border: 1px solid #ddd;
            border-radius: 8px;
            width: 250px;
            font-size: 16px;
        }

        .search-box button {
            padding: 12px 16px;
            background-color: #1a4780;
            color: white;
            border: none;
            border-radius: 8px;
            margin-left: 8px;
            cursor: pointer;
            font-weight: bold;
        }

        /* 导航条样式 */
        .nav {
            background-color: #1a4780;
            padding: 20px 0;
            text-align: center;
        }

        .nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
        }

        .nav li {
            margin: 0 20px;
        }

        .nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            padding: 12px 16px;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav a:hover {
            background-color: #2c6cb1;
            border-radius: 8px;
            transform: translateY(-3px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .nav a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background-color: white;
            transition: all 0.3s ease;
        }

        .nav a:hover::after {
            width: 80%;
            left: 10%;
        }

        /* Banner样式 */
        .banner {
            position: relative;
            height: 500px;
            overflow: hidden;
        }

        .banner img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .banner-text {
            position: absolute;
            top: 45%;
            left: 45%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
        }

        .banner-text h2 {
            font-size: 48px;
            margin-bottom: 25px;
            animation: fadeInUp 1.5s ease;
        }

        .banner-text p {
            font-size: 22px;
            max-width: 800px;
            animation: fadeInUp 1.5s ease 0.3s forwards;
            opacity: 0;
        }

        /* 欢迎语样式 */
        .welcome {
            text-align: center;
            background-color: #f0f8ff;
            padding-top: 5px;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 5px;
        }

        .welcome h2 {
            color: #1a4780;
            margin-bottom: 30px;
            font-size: 36px;
        }

        .welcome p {
            max-width: 1000px;
            margin: 0 auto;
            line-height: 1.9;
            font-size: 18px;
        }

        /* 非遗文化介绍 */
        .heritage {
            background-color: #fff;
            padding-top: 10px;
            padding-right: 30px;
            padding-bottom: 10px;
            padding-left: 30px;
        }

        .heritage-content {
            display: flex;
            max-width: 1200px;
            margin: 0 auto;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }

        .heritage-image {
            flex: 1;
        }

        .heritage-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .heritage-text {
            flex: 1;
            padding: 40px;
            background-color: #f0f8ff;
        }

        .heritage-text h2 {
            color: #1a4780;
            margin-bottom: 30px;
            font-size: 36px;
        }

        .heritage-text p {
            line-height: 1.9;
            font-size: 18px;
            margin-bottom: 20px;
        }

        /* 工艺流程 */
        .process {
            padding: 60px 30px;
            background-color: #f0f8ff;
            text-align: center;
        }

        .process h2 {
            color: #1a4780;
            margin-bottom: 40px;
            font-size: 36px;
        }

        .process-steps {
            display: flex;
            justify-content: space-around;
            max-width: 1200px;
            margin: 0 auto;
        }

        .step {
            flex: 1;
            padding: 20px;
            margin: 0 15px;
        }

        .step img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .step h3 {
            color: #1a4780;
            margin-top: 20px;
            margin-bottom: 15px;
            font-size: 24px;
        }

        .step p {
            line-height: 1.6;
            font-size: 16px;
        }

        .popup {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }
            
        .popup-content {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 500px;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
            
        .close-btn {
            cursor: pointer;
            float: right;
            position: absolute;
            right: 10px;
            top: 0px;
            font-size: 32px;
        }

        /* 白瓷艺术 */
        .art {
            background-color: #fff;
            padding-top: 10px;
            padding-right: 30px;
            padding-bottom: 10px;
            padding-left: 30px;
        }

        .art h2 {
            text-align: center;
            color: #1a4780;
            margin-bottom: 40px;
            font-size: 36px;
        }

        .art-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .art-card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .art-card:hover {
            transform: translateY(-10px);
        }

        .art-card img {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }

        .art-card-content {
            padding: 25px;
        }

        .art-card h3 {
            color: #1a4780;
            margin-bottom: 15px;
            font-size: 24px;
        }

        .art-card p {
            line-height: 1.6;
            margin-bottom: 20px;
            font-size: 16px;
        }

        /* 水平线样式 */
        .divider {
            height: 1px;
            background-color: #ddd;
            margin: 40px 0;
        }

        /* 动画效果 */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* 页脚样式 */
        .footer {
            background-color: #1a4780;
            color: white;
            padding: 20px 30px;
            text-align: center;
        }


    .carousel-container {
        position: relative;
        width: 1400px;
        height: 500px;
        margin: 0 auto;
        overflow: hidden;
    }
  
  .carousel-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: opacity 0.5s ease-in-out;
  }
  
  .carousel-image.active {
	opacity: 1;
  }
  
  .carousel-arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 40px;
	height: 40px;
	background-color: rgba(0, 0, 0, 0.5);
	color: #fff;
	font-size: 24px;
	text-align: center;
	line-height: 40px;
	cursor: pointer;
  }
  
  .carousel-arrow.left {
	left: 10px;
  }
  
  .carousel-arrow.right {
	right: 10px;
  }


.banner1{
	width: 1400px;
	height: 500px;
	margin: 30px 0;
}
.banner1 img{
	width: 1400px;
	height: 500px;
	transition: all 0.6s;
	cursor: pointer;
}
.banner1 img:hover{
	transform: translateX(-6px);
}


    /* 新闻资讯样式 */
        .xwzx-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .xwzx-title {
            text-align: center;
            margin-bottom: 30px;
        }

        .xwzx-title h2 {
            color: #1a4780;
            font-size: 36px;
            margin-bottom: 10px;
        }

        .xwzx-title p {
            color: #666;
            font-size: 16px;
        }

        .xwzx-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .xwzx-item {
            border-bottom: 1px solid #eee;
            padding: 20px 0;
            transition: background-color 0.3s ease;
        }

        .xwzx-item:hover {
            background-color: #f9f9f9;
        }

        .xwzx-item:last-child {
            border-bottom: none;
        }

        .xwzx-item-content {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .xwzx-item-left {
            flex: 1;
        }

        .xwzx-item-right {
            text-align: right;
        }

        .xwzx-item-title {
            font-size: 22px;
            color: #1a4780;
            margin-bottom: 10px;
            font-weight: bold;
        }

        .xwzx-item-date {
            color: #999;
            font-size: 14px;
            margin-bottom: 10px;
        }

        .xwzx-item-text {
            color: #333;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .xwzx-item-btn {
            display: inline-block;
            padding: 8px 16px;
            background-color: #1a4780;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            transition: background-color 0.3s ease;
        }

        .xwzx-item-btn:hover {
            background-color: #2c6cb1;
        }
		
		
		/* 非遗文化样式 */
        .fywh-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .fywh-title {
            text-align: center;
            margin-bottom: 30px;
        }

        .fywh-title h2 {
            color: #1a4780;
            font-size: 36px;
            margin-bottom: 10px;
            position: relative;
            display: inline-block;
        }

        .fywh-title h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 3px;
            background-color: #1a4780;
        }

        .fywh-title p {
            color: #666;
            font-size: 16px;
        }

        .fywh-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 40px;
        }

        .fywh-section {
            flex: 0 0 48%;
            margin-bottom: 40px;
            background-color: #f9f9f9;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .fywh-section:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .fywh-section-content {
            padding: 30px;
        }

        .fywh-section h3 {
            color: #1a4780;
            font-size: 24px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }

        /* 横向未来展望样式 */
        .future-horizontal {
            display: flex;
            margin: 40px 0;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .future-horizontal-img {
            flex: 1;
            min-width: 40%;
        }

        .future-horizontal-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .future-horizontal-content {
            flex: 1;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .future-horizontal-date {
            color: #3a8bff;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .future-horizontal h3 {
            color: #1a4780;
            font-size: 28px;
            margin-bottom: 20px;
        }

        .future-horizontal p {
            font-size: 16px;
            line-height: 1.6;
            color: #333;
        }

        .fywh-section p {
            color: #333;
            line-height: 1.8;
            margin-bottom: 15px;
        }

        .fywh-section img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 10px;
        }

        .fywh-section-icon {
            font-size: 36px;
            color: #1a4780;
            margin-bottom: 20px;
        }

        .fywh-section-btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #1a4780;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            margin-top: 20px;
        }

        .fywh-section-btn:hover {
            background-color: #2c6cb1;
        }

        .fywh-gallery {
            margin-top: 40px;
        }

        .fywh-gallery-title {
            text-align: center;
            margin-bottom: 30px;
        }

        .fywh-gallery-title h3 {
            color: #1a4780;
            font-size: 28px;
        }

        .fywh-gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

        .fywh-gallery-item {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
        }

        .fywh-gallery-item:hover {
            transform: translateY(-5px);
        }

        .fywh-gallery-item img {
            width: 100%;
            height: 270px;
            object-fit: cover;
        }

        .fywh-gallery-item-content {
            padding: 15px;
            background-color: #f9f9f9;
            text-align: center;
        }

        .fywh-gallery-item h4 {
            color: #1a4780;
            font-size: 18px;
            margin-bottom: 10px;
        }

        .fywh-gallery-item p {
            color: #666;
            font-size: 14px;
        }



/* 产品介绍样式 */
        .cpjs-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .cpjs-title {
            text-align: center;
            margin-bottom: 30px;
        }

        .cpjs-title h2 {
            color: #1a4780;
            font-size: 36px;
            margin-bottom: 10px;
            position: relative;
            display: inline-block;
        }

        .cpjs-title h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 3px;
            background-color: #1a4780;
        }

        .cpjs-title p {
            color: #666;
            font-size: 16px;
        }

        .cpjs-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
            margin-top: 40px;
        }

        .cpjs-item {
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
        }

        .cpjs-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .cpjs-item-img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 10px 10px 0 0;
        }

        .cpjs-item-content {
            padding: 20px;
        }

        .cpjs-item-title {
            color: #1a4780;
            font-size: 20px;
            margin-bottom: 10px;
            font-weight: bold;
        }

        .cpjs-item-text {
            color: #666;
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .cpjs-item-btn {
            display: inline-block;
            padding: 8px 16px;
            background-color: #1a4780;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .cpjs-item-btn:hover {
            background-color: #2c6cb1;
        }
		
		
	/* 工艺流程样式 */
        .gylc-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .gylc-title {
            text-align: center;
            margin-bottom: 40px;
        }

        .gylc-title h2 {
            color: #1a4780;
            font-size: 36px;
            margin-bottom: 10px;
            position: relative;
            display: inline-block;
        }

        .gylc-title h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 3px;
            background-color: #1a4780;
        }

        .gylc-title p {
            color: #666;
            font-size: 16px;
        }

        .gylc-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 40px;
        }

        .gylc-card {
            background-color: #f9f9f9;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
            padding-bottom: 20px;
            position: relative;
        }

        .gylc-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .gylc-card-icon {
            font-size: 48px;
            color: #1a4780;
            margin: 20px 0;
        }

        .gylc-card-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px 10px 0 0;
        }

        .gylc-card-content {
            padding: 0 20px;
        }

        .gylc-card h3 {
            color: #1a4780;
            font-size: 22px;
            margin-bottom: 15px;
        }

        .gylc-card p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .gylc-card-btn {
            display: inline-block;
            padding: 8px 16px;
            background-color: #1a4780;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .gylc-card-btn:hover {
            background-color: #2c6cb1;
        }

        .gylc-number {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: #1a4780;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
		
		
		
		/* 历史传承样式 */
        .lscc-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .lscc-title {
            text-align: center;
            margin-bottom: 40px;
        }

        .lscc-title h2 {
            color: #1a4780;
            font-size: 36px;
            margin-bottom: 10px;
            position: relative;
            display: inline-block;
        }

        .lscc-title h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 3px;
            background-color: #1a4780;
        }

        .lscc-title p {
            color: #666;
            font-size: 16px;
        }

        .lscc-content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }

        .lscc-card {
            background-color: #f9f9f9;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
        }

        .lscc-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .lscc-card-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .lscc-card-content {
            padding: 20px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }

        .lscc-card-date {
            background-color: #1a4780;
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 14px;
            margin-bottom: 15px;
            display: inline-block;
        }

        .lscc-card h3 {
            color: #1a4780;
            font-size: 22px;
            margin-bottom: 15px;
        }

        .lscc-card p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 0;
            flex-grow: 1;
        }
		
		
		/* 艺术价值样式 */
        .ysjz-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 60px 30px;
            background-color: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .ysjz-title {
            text-align: center;
            margin-bottom: 60px;
            position: relative;
        }

        .ysjz-title h2 {
            color: #1a4780;
            font-size: 42px;
            margin-bottom: 15px;
            display: inline-block;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .ysjz-title h2::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 4px;
            background-color: #1a4780;
        }

        .ysjz-title p {
            color: #666;
            font-size: 18px;
            max-width: 800px;
            margin: 0 auto;
        }

        .ysjz-content {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto auto;
            gap: 30px;
        }

        .ysjz-card {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f0 100%);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            position: relative;
            padding: 20px;
        }

        .ysjz-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .ysjz-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, #1a4780, #4a8fd6);
        }

        .ysjz-card-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .ysjz-card-icon {
            font-size: 42px;
            color: #1a4780;
            margin-bottom: 20px;
            text-align: center;
        }

        .ysjz-card h3 {
            color: #1a4780;
            font-size: 24px;
            margin-bottom: 15px;
            text-align: center;
        }

        .ysjz-card p {
            color: #555;
            line-height: 1.7;
            margin-bottom: 20px;
            font-size: 16px;
        }

        .ysjz-card-footer {
            background: linear-gradient(135deg, #1a4780, #4a8fd6);
            color: white;
            padding: 12px 15px;
            border-radius: 8px;
            font-style: italic;
            margin-top: auto;
            text-align: center;
        }

        .ysjz-card-1 {
            grid-row: span 2;
        }

        .ysjz-card-1 .ysjz-card-img {
            height: 400px;
        }

        .ysjz-card-1 .ysjz-card-icon {
            font-size: 54px;
            margin-bottom: 25px;
        }

        .ysjz-card-1 h3 {
            font-size: 28px;
            margin-bottom: 20px;
        }

        .ysjz-card-1 p {
            font-size: 18px;
            line-height: 1.8;
        }

        .ysjz-card-1 .ysjz-card-footer {
            padding: 15px 20px;
        }
		
		
		/* 相关活动样式 */
        .xghd-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 60px 30px;
            background-color: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .xghd-title {
            text-align: center;
            margin-bottom: 60px;
            position: relative;
        }

        .xghd-title h2 {
            color: #1a4780;
            font-size: 42px;
            margin-bottom: 15px;
            display: inline-block;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .xghd-title h2::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 4px;
            background-color: #1a4780;
        }

        .xghd-title p {
            color: #666;
            font-size: 18px;
            max-width: 800px;
            margin: 0 auto;
        }

        .xghd-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .xghd-item {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f0 100%);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
        }

        .xghd-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .xghd-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 5px;
            height: 100%;
            background: linear-gradient(180deg, #1a4780, #4a8fd6);
        }

        .xghd-item-icon {
            background-color: #1a4780;
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            margin: 0 20px;
        }

        .xghd-item-content {
            flex-grow: 1;
            padding: 20px;
        }

        .xghd-item-title {
            color: #1a4780;
            font-size: 24px;
            margin-bottom: 10px;
        }

        .xghd-item-meta {
            display: flex;
            margin-bottom: 15px;
        }

        .xghd-item-date, .xghd-item-time {
            color: #666;
            font-size: 14px;
            margin-right: 20px;
            display: flex;
            align-items: center;
        }

        .xghd-item-date i, .xghd-item-time i {
            margin-right: 5px;
        }

        .xghd-item-desc {
            color: #555;
            line-height: 1.7;
            margin-bottom: 15px;
            font-size: 16px;
        }

        .xghd-item-btn {
            display: inline-block;
            padding: 8px 16px;
            background: linear-gradient(90deg, #1a4780, #4a8fd6);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .xghd-item-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
		
		
		/* 人才招聘样式 */
        .rczp-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 60px 30px;
            background-color: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .rczp-title {
            text-align: center;
            margin-bottom: 60px;
            position: relative;
        }

        .rczp-title h2 {
            color: #1a4780;
            font-size: 42px;
            margin-bottom: 15px;
            display: inline-block;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .rczp-title h2::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 4px;
            background-color: #1a4780;
        }

        .rczp-title p {
            color: #666;
            font-size: 18px;
            max-width: 800px;
            margin: 0 auto;
        }

        .rczp-content {
            display: flex;
            justify-content: space-between;
            gap: 40px;
        }

        .rczp-jobs {
            flex: 1;
        }

        .rczp-job-card {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f0 100%);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-bottom: 30px;
            padding: 25px;
        }

        .rczp-job-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .rczp-job-card h3 {
            color: #1a4780;
            font-size: 24px;
            margin-bottom: 15px;
        }

        .rczp-job-card p {
            color: #555;
            line-height: 1.7;
            margin-bottom: 20px;
            font-size: 16px;
        }

        .rczp-job-card ul {
            list-style-type: disc;
            padding-left: 20px;
            margin-bottom: 20px;
        }

        .rczp-job-card li {
            color: #555;
            line-height: 1.7;
            margin-bottom: 10px;
            font-size: 16px;
        }

        .rczp-job-card-btn {
            display: inline-block;
            padding: 10px 20px;
            background: linear-gradient(90deg, #1a4780, #4a8fd6);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .rczp-job-card-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .rczp-application {
            flex: 1;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f0 100%);
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .rczp-application h3 {
            color: #1a4780;
            font-size: 24px;
            margin-bottom: 25px;
            text-align: center;
        }

        .rczp-form-group {
            margin-bottom: 20px;
        }

        .rczp-form-group label {
            display: block;
            margin-bottom: 8px;
            color: #1a4780;
            font-weight: bold;
        }

        .rczp-form-group input,
        .rczp-form-group textarea,
        .rczp-form-group select {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }

        .rczp-form-group input:focus,
        .rczp-form-group textarea:focus,
        .rczp-form-group select:focus {
            border-color: #1a4780;
            outline: none;
        }

        .rczp-form-group textarea {
            height: 120px;
            resize: vertical;
        }

        .rczp-submit-btn {
            display: block;
            width: 100%;
            padding: 12px;
            background: linear-gradient(90deg, #1a4780, #4a8fd6);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .rczp-submit-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }


        /* 关于我们样式 */
        .gywm-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 60px 30px;
            background-color: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .gywm-title {
            text-align: center;
            margin-bottom: 60px;
            position: relative;
        }

        .gywm-title h2 {
            color: #1a4780;
            font-size: 42px;
            margin-bottom: 15px;
            display: inline-block;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .gywm-title h2::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 4px;
            background-color: #1a4780;
        }

        .gywm-title p {
            color: #666;
            font-size: 18px;
            max-width: 800px;
            margin: 0 auto;
        }

        .gywm-content {
            display: flex;
            gap: 40px;
            margin-bottom: 60px;
        }

        .gywm-about {
            flex: 1;
        }

        .gywm-about h3 {
            color: #1a4780;
            font-size: 28px;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 10px;
        }

        .gywm-about h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 3px;
            background-color: #1a4780;
        }

        .gywm-about p {
            color: #555;
            line-height: 1.8;
            margin-bottom: 20px;
            font-size: 16px;
        }

        .gywm-about-list {
            list-style: none;
            padding: 0;
            margin: 20px 0;
        }

        .gywm-about-list li {
            margin-bottom: 15px;
            padding-left: 25px;
            position: relative;
        }

        .gywm-about-list li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #1a4780;
            font-size: 20px;
        }

        .gywm-contact {
            flex: 1;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f0 100%);
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .gywm-contact h3 {
            color: #1a4780;
            font-size: 24px;
            margin-bottom: 25px;
            text-align: center;
        }

        .gywm-form-group {
            margin-bottom: 20px;
        }

        .gywm-form-group label {
            display: block;
            margin-bottom: 8px;
            color: #1a4780;
            font-weight: bold;
        }

        .gywm-form-group input,
        .gywm-form-group textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }

        .gywm-form-group input:focus,
        .gywm-form-group textarea:focus {
            border-color: #1a4780;
            outline: none;
        }

        .gywm-form-group textarea {
            height: 150px;
            resize: vertical;
        }

        .gywm-submit-btn {
            display: block;
            width: 100%;
            padding: 12px;
            background: linear-gradient(90deg, #1a4780, #4a8fd6);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gywm-submit-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .gywm-gallery {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

        .gywm-gallery-item {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .gywm-gallery-item:hover {
            transform: translateY(-5px);
        }

        .gywm-gallery-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .gywm-figcaption{
            text-align: center;
            line-height: 20px;
        }
</style>
