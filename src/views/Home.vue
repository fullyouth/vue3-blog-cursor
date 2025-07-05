<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-particles"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title fade-in-up">
          <span class="hero-icon">🚀</span>
          欢迎来到 Vue3 博客
        </h1>
        <p class="hero-subtitle slide-in-left">
          分享Vue3、前端技术和开发心得
        </p>
        <div class="hero-actions slide-in-right">
          <router-link to="/blog" class="btn btn-primary pulse">
            <span class="btn-icon">📝</span>
            浏览博客
          </router-link>
          <router-link to="/about" class="btn btn-secondary">
            <span class="btn-icon">ℹ️</span>
            了解更多
          </router-link>
        </div>
      </div>
    </section>

    <section class="featured-posts">
      <div class="container">
        <h2 class="section-title fade-in-up">
          <span class="title-icon">⭐</span>
          最新文章
        </h2>
        <div class="posts-grid">
          <BlogCard 
            v-for="(post, index) in featuredPosts" 
            :key="post.id" 
            :post="post"
            :style="{ animationDelay: `${index * 0.2}s` }"
          />
        </div>
        <div class="text-center mt-20 fade-in-up">
          <router-link to="/blog" class="btn btn-primary">
            <span class="btn-icon">📚</span>
            查看所有文章
          </router-link>
        </div>
      </div>
    </section>

    <section class="tags-section">
      <div class="container">
        <h2 class="section-title fade-in-up">
          <span class="title-icon">🏷️</span>
          热门标签
        </h2>
        <div class="tags-grid">
          <span 
            v-for="(tag, index) in allTags" 
            :key="tag" 
            class="tag-large"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="filterByTag(tag)"
          >
            <span class="tag-icon">#</span>
            {{ tag }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useBlogStore } from '@/stores/blog'
import BlogCard from '@/components/BlogCard.vue'

const router = useRouter()
const blogStore = useBlogStore()

const featuredPosts = computed(() => {
  return blogStore.posts.slice(0, 3)
})

const allTags = computed(() => {
  return blogStore.getAllTags
})

const filterByTag = (tag) => {
  router.push(`/blog?tag=${tag}`)
}
</script>

<style scoped>
.hero {
  position: relative;
  color: white;
  padding: 6rem 0;
  text-align: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  z-index: -2;
}

.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.hero-icon {
  font-size: 4rem;
  animation: pulse 2s infinite;
}

.hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  font-weight: 300;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-icon {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
}

.btn-secondary {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
  transform: translateY(-3px);
}

.featured-posts {
  padding: 5rem 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title-icon {
  font-size: 2.5rem;
  animation: pulse 2s infinite;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.tags-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
}

.tags-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.tag-large {
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-primary);
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.tag-large::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  transition: left 0.5s;
}

.tag-large:hover::before {
  left: 100%;
}

.tag-large:hover {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
}

.tag-icon {
  font-size: 1.2rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .hero-icon {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .tag-large {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}
</style> 