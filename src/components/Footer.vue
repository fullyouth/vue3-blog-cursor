<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">
            <span class="footer-icon">🚀</span>
            Vue3 博客
          </h3>
          <p class="footer-description">分享Vue3、前端技术和开发心得</p>
        </div>
        <div class="footer-section">
          <h4 class="footer-subtitle">快速链接</h4>
          <ul class="footer-links">
            <li><router-link to="/">🏠 首页</router-link></li>
            <li><router-link to="/blog">📝 博客</router-link></li>
            <li><router-link to="/about">ℹ️ 关于</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="footer-subtitle">技术栈</h4>
          <ul class="footer-tech">
            <li>⚡ Vue3</li>
            <li>🚀 Vite</li>
            <li>📦 Pinia</li>
            <li>🛣️ Vue Router</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Vue3 博客. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.footer {
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
  border-top: 1px solid rgba(0, 212, 255, 0.2);
  box-shadow: 0 -8px 32px rgba(0, 212, 255, 0.1);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-title {
  margin-bottom: 1rem;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-icon {
  font-size: 1.8rem;
  animation: pulse 2s infinite;
  filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.8));
}

.footer-subtitle {
  margin-bottom: 1rem;
  color: #fff;
  font-size: 1.1rem;
  border-bottom: 2px solid rgba(0, 212, 255, 0.3);
  padding-bottom: 0.5rem;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

.footer-links,
.footer-tech {
  list-style: none;
  padding: 0;
}

.footer-links li,
.footer-tech li {
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
}

.footer-links li:hover,
.footer-tech li:hover {
  transform: translateX(5px);
}

.footer-links li a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-links li a:hover {
  color: var(--neon-blue);
  text-decoration: none;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

.footer-tech li {
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-tech li:hover {
  color: var(--neon-pink);
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}

.footer-bottom {
  border-top: 1px solid rgba(0, 212, 255, 0.2);
  padding-top: 1rem;
  text-align: center;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-links li:hover,
  .footer-tech li:hover {
    transform: translateY(-2px);
  }
}
</style> 