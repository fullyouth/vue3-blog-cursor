import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBlogStore = defineStore('blog', () => {
  const posts = ref([
    {
      id: 1,
      title: 'Vue3 组合式API入门指南',
      excerpt: 'Vue3的组合式API为我们提供了更灵活的逻辑复用方式，本文将详细介绍其使用方法...',
      content: `# Vue3 组合式API入门指南

Vue3的组合式API为我们提供了更灵活的逻辑复用方式，本文将详细介绍其使用方法。

## 什么是组合式API？

组合式API是Vue3中新增的一种编写组件逻辑的方式，它允许我们使用导入的API函数来编写组件逻辑。

## 基本用法

\`\`\`javascript
import { ref, reactive, computed, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    
    function increment() {
      count.value++
    }
    
    onMounted(() => {
      console.log('组件已挂载')
    })
    
    return {
      count,
      doubleCount,
      increment
    }
  }
}
\`\`\`

## 优势

1. 更好的逻辑复用
2. 更好的类型推导
3. 更小的打包体积

希望这篇文章对你有所帮助！`,
      author: '张三',
      date: '2024-01-15',
      tags: ['Vue3', '前端', '教程'],
      readTime: 5
    },
    {
      id: 2,
      title: 'Vite构建工具详解',
      excerpt: 'Vite是一个现代化的前端构建工具，它提供了极快的开发服务器启动和热更新...',
      content: `# Vite构建工具详解

Vite是一个现代化的前端构建工具，它提供了极快的开发服务器启动和热更新。

## 为什么选择Vite？

Vite具有以下优势：

- 极快的冷启动
- 即时的热模块替换
- 真正的按需加载
- 丰富的功能

## 基本配置

\`\`\`javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  }
})
\`\`\`

## 插件系统

Vite拥有丰富的插件生态系统，可以满足各种开发需求。`,
      author: '李四',
      date: '2024-01-10',
      tags: ['Vite', '构建工具', '前端'],
      readTime: 8
    },
    {
      id: 3,
      title: 'Pinia状态管理最佳实践',
      excerpt: 'Pinia是Vue3官方推荐的状态管理库，它提供了简单直观的API...',
      content: `# Pinia状态管理最佳实践

Pinia是Vue3官方推荐的状态管理库，它提供了简单直观的API。

## 安装和配置

\`\`\`bash
npm install pinia
\`\`\`

## 创建Store

\`\`\`javascript
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
\`\`\`

## 在组件中使用

\`\`\`javascript
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()
    return { counter }
  }
}
\`\`\``,
      author: '王五',
      date: '2024-01-05',
      tags: ['Pinia', '状态管理', 'Vue3'],
      readTime: 6
    }
  ])

  const getPostById = computed(() => {
    return (id) => posts.value.find(post => post.id === parseInt(id))
  })

  const getPostsByTag = computed(() => {
    return (tag) => posts.value.filter(post => post.tags.includes(tag))
  })

  const getAllTags = computed(() => {
    const tags = new Set()
    posts.value.forEach(post => {
      post.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags)
  })

  return {
    posts,
    getPostById,
    getPostsByTag,
    getAllTags
  }
}) 