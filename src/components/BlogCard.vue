<template>
  <article class="blog-card fade-in-up">
    <div class="blog-card-content">
      <div class="blog-header">
        <h2 class="blog-title">
          <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
        </h2>
        <div class="blog-meta">
          <span class="meta-item">
            <span class="meta-icon">👤</span>
            {{ post.author }}
          </span>
          <span class="meta-item">
            <span class="meta-icon">📅</span>
            {{ formatDate(post.date) }}
          </span>
          <span class="meta-item">
            <span class="meta-icon">⏱️</span>
            {{ post.readTime }} 分钟阅读
          </span>
        </div>
      </div>
      
      <p class="blog-excerpt">{{ post.excerpt }}</p>
      
      <div class="blog-tags">
        <span 
          v-for="tag in post.tags" 
          :key="tag" 
          class="tag"
          @click="filterByTag(tag)"
        >
          <span class="tag-icon">🏷️</span>
          {{ tag }}
        </span>
      </div>
      
      <div class="blog-footer">
        <router-link :to="`/blog/${post.id}`" class="read-more">
          阅读全文
          <span class="arrow">→</span>
        </router-link>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const formatDate = (date) => {
  return dayjs(date).format('YYYY年MM月DD日')
}

const filterByTag = (tag) => {
  router.push(`/blog?tag=${tag}`)
}
</script>

<style scoped>
.blog-card {
  background: var(--bg-card);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
  overflow: hidden;
  border: 1px solid rgba(0, 212, 255, 0.2);
  position: relative;
  backdrop-filter: blur(10px);
}

.blog-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-pink));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.blog-card:hover::before {
  transform: scaleX(1);
}

.blog-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 212, 255, 0.3);
  border-color: rgba(0, 212, 255, 0.4);
}

.blog-card-content {
  padding: 2rem;
}

.blog-header {
  margin-bottom: 1.5rem;
}

.blog-title {
  margin-bottom: 1rem;
}

.blog-title a {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
}

.blog-title a:hover {
  background: linear-gradient(135deg, var(--neon-pink), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform: translateX(5px);
  text-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
}

.blog-meta {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.3s ease;
}

.meta-item:hover {
  color: var(--neon-blue);
  transform: translateY(-1px);
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

.meta-icon {
  font-size: 1rem;
  filter: drop-shadow(0 0 5px rgba(0, 212, 255, 0.5));
}

.blog-excerpt {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.95rem;
}

.blog-tags {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.tag {
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-pink));
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.4);
}

.tag-icon {
  font-size: 0.9rem;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
}

.blog-footer {
  border-top: 1px solid rgba(0, 212, 255, 0.2);
  padding-top: 1rem;
}

.read-more {
  color: var(--neon-blue);
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.read-more:hover {
  color: var(--neon-pink);
  transform: translateX(5px);
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}

.arrow {
  transition: transform 0.3s ease;
}

.read-more:hover .arrow {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .blog-card-content {
    padding: 1.5rem;
  }
  
  .blog-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .blog-title a {
    font-size: 1.2rem;
  }
}
</style> 