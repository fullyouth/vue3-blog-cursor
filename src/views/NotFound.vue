<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1 class="error-title">页面未找到</h1>
        <p class="error-message">
          抱歉，您访问的页面不存在或已被移动。
        </p>
        <div class="error-actions">
          <router-link to="/" class="btn btn-primary">
            返回首页
          </router-link>
          <router-link to="/blog" class="btn btn-secondary">
            浏览博客
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
.not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.not-found-content {
  text-align: center;
  max-width: 500px;
}

.error-code {
  font-size: 6rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 1rem;
  line-height: 1;
}

.error-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.error-message {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .error-code {
    font-size: 4rem;
  }
  
  .error-title {
    font-size: 1.5rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style> 