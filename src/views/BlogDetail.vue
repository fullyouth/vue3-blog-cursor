<template>
  <div class="blog-detail">
    <div class="container">
      <div v-if="post" class="post-content">
        <div class="post-header">
          <h1 class="post-title">{{ post.title }}</h1>
          <div class="post-meta">
            <span class="author">作者: {{ post.author }}</span>
            <span class="date">{{ formatDate(post.date) }}</span>
            <span class="read-time">{{ post.readTime }} 分钟阅读</span>
          </div>
          <div class="post-tags">
            <span 
              v-for="tag in post.tags" 
              :key="tag" 
              class="tag"
              @click="filterByTag(tag)"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        
        <div class="post-body">
          <div class="markdown-content" v-html="renderedContent"></div>
        </div>
        
        <div class="post-footer">
          <div class="post-navigation">
            <router-link 
              v-if="previousPost" 
              :to="`/blog/${previousPost.id}`" 
              class="nav-link prev"
            >
              ← {{ previousPost.title }}
            </router-link>
            <router-link 
              v-if="nextPost" 
              :to="`/blog/${nextPost.id}`" 
              class="nav-link next"
            >
              {{ nextPost.title }} →
            </router-link>
          </div>
          
          <div class="back-to-blog">
            <router-link to="/blog" class="btn btn-secondary">
              返回博客列表
            </router-link>
          </div>
        </div>
      </div>
      
      <div v-else class="not-found">
        <h2>文章未找到</h2>
        <p>抱歉，您访问的文章不存在。</p>
        <router-link to="/blog" class="btn btn-primary">
          返回博客列表
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { marked } from 'marked'
import dayjs from 'dayjs'
import { useBlogStore } from '@/stores/blog'

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()

const post = computed(() => {
  return blogStore.getPostById(route.params.id)
})

const renderedContent = computed(() => {
  if (post.value) {
    return marked(post.value.content)
  }
  return ''
})

const previousPost = computed(() => {
  if (!post.value) return null
  const currentIndex = blogStore.posts.findIndex(p => p.id === post.value.id)
  return currentIndex > 0 ? blogStore.posts[currentIndex - 1] : null
})

const nextPost = computed(() => {
  if (!post.value) return null
  const currentIndex = blogStore.posts.findIndex(p => p.id === post.value.id)
  return currentIndex < blogStore.posts.length - 1 ? blogStore.posts[currentIndex + 1] : null
})

const formatDate = (date) => {
  return dayjs(date).format('YYYY年MM月DD日')
}

const filterByTag = (tag) => {
  router.push(`/blog?tag=${tag}`)
}

onMounted(() => {
  // 配置marked选项
  marked.setOptions({
    highlight: function(code, lang) {
      return code
    },
    breaks: true
  })
})
</script>

<style scoped>
.blog-detail {
  padding: 2rem 0;
}

.post-content {
  max-width: 800px;
  margin: 0 auto;
}

.post-header {
  margin-bottom: 3rem;
  text-align: center;
}

.post-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.post-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.875rem;
  flex-wrap: wrap;
}

.post-tags {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: #f0f0f0;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.tag:hover {
  background: #007bff;
  color: white;
}

.post-body {
  margin-bottom: 3rem;
}

.markdown-content {
  line-height: 1.8;
  color: #333;
}

.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3),
.markdown-content :deep(h4),
.markdown-content :deep(h5),
.markdown-content :deep(h6) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.markdown-content :deep(h1) {
  font-size: 2rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
}

.markdown-content :deep(h2) {
  font-size: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.25rem;
}

.markdown-content :deep(p) {
  margin-bottom: 1rem;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.markdown-content :deep(li) {
  margin-bottom: 0.5rem;
}

.markdown-content :deep(blockquote) {
  border-left: 4px solid #007bff;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #666;
  font-style: italic;
}

.markdown-content :deep(code) {
  background: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
}

.markdown-content :deep(pre) {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  margin: 1rem 0;
}

.markdown-content :deep(pre code) {
  background: none;
  padding: 0;
}

.post-footer {
  border-top: 1px solid #eee;
  padding-top: 2rem;
}

.post-navigation {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-link {
  color: #007bff;
  text-decoration: none;
  max-width: 45%;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #0056b3;
}

.nav-link.prev {
  text-align: left;
}

.nav-link.next {
  text-align: right;
}

.back-to-blog {
  text-align: center;
}

.not-found {
  text-align: center;
  padding: 3rem;
}

.not-found h2 {
  color: #333;
  margin-bottom: 1rem;
}

.not-found p {
  color: #666;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .post-title {
    font-size: 2rem;
  }
  
  .post-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .post-navigation {
    flex-direction: column;
  }
  
  .nav-link {
    max-width: 100%;
    text-align: center;
  }
}
</style> 