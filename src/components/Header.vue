<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <h1 class="logo-text">
              <span class="logo-icon">🚀</span>
              Vue3 博客
            </h1>
          </router-link>
        </div>
        <nav class="nav">
          <router-link to="/" class="nav-link">
            <span class="nav-icon">🏠</span>
            首页
          </router-link>
          <router-link to="/blog" class="nav-link">
            <span class="nav-icon">📝</span>
            博客
          </router-link>
          <router-link to="/about" class="nav-link">
            <span class="nav-icon">ℹ️</span>
            关于
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.header {
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.2);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
}

.logo-icon {
  font-size: 2rem;
  animation: pulse 2s infinite;
  filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.8));
}

.logo a {
  text-decoration: none;
  color: inherit;
}

.logo:hover .logo-text {
  transform: scale(1.05);
  text-shadow: 0 0 30px rgba(0, 212, 255, 0.8);
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 212, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
}

.nav-link:hover {
  background: rgba(0, 212, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
  color: white;
  border-color: rgba(0, 212, 255, 0.4);
}

.nav-link.router-link-active {
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-pink));
  color: white;
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.3);
}

.nav-icon {
  font-size: 1.2rem;
  filter: drop-shadow(0 0 5px rgba(0, 212, 255, 0.5));
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
  
  .nav {
    gap: 1rem;
  }
  
  .nav-link {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
}
</style> 