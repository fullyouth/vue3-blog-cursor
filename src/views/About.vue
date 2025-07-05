<template>
  <div class="about">
    <div class="container">
      <div class="about-content">
        <div class="about-header">
          <h1 class="about-title">关于我们</h1>
          <p class="about-subtitle">分享Vue3、前端技术和开发心得</p>
        </div>
        
        <div class="about-sections">
          <section class="about-section">
            <h2>我们的使命</h2>
            <p>
              我们致力于分享最新的前端技术知识，特别是Vue3生态系统的最佳实践。
              通过这个博客平台，我们希望帮助开发者更好地理解和应用现代前端技术。
            </p>
          </section>
          
          <section class="about-section">
            <h2>技术栈</h2>
            <div class="tech-stack">
              <div class="tech-item">
                <h3>Vue3</h3>
                <p>使用组合式API构建现代化的用户界面</p>
              </div>
              <div class="tech-item">
                <h3>Vite</h3>
                <p>极速的前端构建工具，提供快速的开发体验</p>
              </div>
              <div class="tech-item">
                <h3>Pinia</h3>
                <p>Vue3官方推荐的状态管理库</p>
              </div>
              <div class="tech-item">
                <h3>Vue Router</h3>
                <p>Vue.js官方路由管理器</p>
              </div>
            </div>
          </section>
          
          <section class="about-section">
            <h2>博客特色</h2>
            <ul class="features-list">
              <li>📝 高质量的技术文章</li>
              <li>🎯 实用的代码示例</li>
              <li>🚀 最新的技术动态</li>
              <li>💡 深入的技术解析</li>
              <li>🔍 标签分类系统</li>
              <li>📱 响应式设计</li>
            </ul>
          </section>
          
          <section class="about-section">
            <h2>联系我们</h2>
            <p>
              如果您有任何问题、建议或想要投稿，欢迎通过以下方式联系我们：
            </p>
            <div class="contact-info">
              <div class="contact-item">
                <strong>邮箱：</strong>
                <a href="mailto:contact@vue3blog.com">contact@vue3blog.com</a>
              </div>
              <div class="contact-item">
                <strong>GitHub：</strong>
                <a href="https://github.com/vue3blog" target="_blank">github.com/vue3blog</a>
              </div>
            </div>
          </section>
        </div>
        
        <div class="back-to-home">
          <router-link to="/" class="btn btn-primary">
            返回首页
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.about {
  padding: 2rem 0;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.about-subtitle {
  color: #666;
  font-size: 1.1rem;
}

.about-sections {
  margin-bottom: 3rem;
}

.about-section {
  margin-bottom: 3rem;
}

.about-section h2 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #007bff;
  padding-bottom: 0.5rem;
}

.about-section p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.tech-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.tech-item h3 {
  color: #007bff;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.tech-item p {
  color: #666;
  font-size: 0.875rem;
  margin: 0;
}

.features-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.features-list li {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  font-weight: 500;
}

.contact-info {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.contact-item {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-item strong {
  color: #333;
  min-width: 80px;
}

.contact-item a {
  color: #007bff;
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

.back-to-home {
  text-align: center;
}

@media (max-width: 768px) {
  .about-title {
    font-size: 2rem;
  }
  
  .tech-stack {
    grid-template-columns: 1fr;
  }
  
  .features-list {
    grid-template-columns: 1fr;
  }
  
  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style> 