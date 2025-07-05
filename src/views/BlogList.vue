<template>
  <div class="blog-list">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">博客文章</h1>
        <p class="page-subtitle">分享Vue3、前端技术和开发心得</p>
      </div>

      <div class="filters">
        <div class="filter-section">
          <label class="filter-label">按标签筛选:</label>
          <div class="filter-tags">
            <span 
              class="filter-tag"
              :class="{ active: selectedTag === tag }"
              v-for="tag in allTags" 
              :key="tag"
              @click="selectTag(tag)"
            >
              {{ tag }}
            </span>
            <span 
              v-if="selectedTag"
              class="filter-tag clear-filter"
              @click="clearFilter"
            >
              清除筛选
            </span>
          </div>
        </div>
      </div>

      <div v-if="filteredPosts.length === 0" class="no-posts">
        <p>没有找到相关文章</p>
        <button @click="clearFilter" class="btn btn-primary">查看所有文章</button>
      </div>

      <div v-else class="posts-grid">
        <BlogCard 
          v-for="post in filteredPosts" 
          :key="post.id" 
          :post="post" 
        />
      </div>

      <div v-if="filteredPosts.length > 0" class="posts-stats">
        <p>共找到 {{ filteredPosts.length }} 篇文章</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBlogStore } from '@/stores/blog'
import BlogCard from '@/components/BlogCard.vue'

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()

const selectedTag = ref('')

const allTags = computed(() => {
  return blogStore.getAllTags
})

const filteredPosts = computed(() => {
  if (selectedTag.value) {
    return blogStore.getPostsByTag(selectedTag.value)
  }
  return blogStore.posts
})

const selectTag = (tag) => {
  selectedTag.value = selectedTag.value === tag ? '' : tag
  updateURL()
}

const clearFilter = () => {
  selectedTag.value = ''
  updateURL()
}

const updateURL = () => {
  const query = selectedTag.value ? { tag: selectedTag.value } : {}
  router.push({ path: '/blog', query })
}

onMounted(() => {
  // 从URL参数中恢复筛选状态
  if (route.query.tag) {
    selectedTag.value = route.query.tag
  }
})
</script>

<style scoped>
.blog-list {
  padding: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  color: #666;
  font-size: 1.1rem;
}

.filters {
  margin-bottom: 3rem;
}

.filter-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-label {
  font-weight: 500;
  color: #333;
  white-space: nowrap;
}

.filter-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-tag {
  background: #f0f0f0;
  color: #666;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.875rem;
}

.filter-tag:hover {
  background: #007bff;
  color: white;
}

.filter-tag.active {
  background: #007bff;
  color: white;
}

.clear-filter {
  background: #dc3545;
  color: white;
}

.clear-filter:hover {
  background: #c82333;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.no-posts {
  text-align: center;
  padding: 3rem;
  color: #666;
}

.no-posts p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.posts-stats {
  text-align: center;
  color: #666;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .filter-section {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style> 