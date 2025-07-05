# Vue3 博客项目

一个基于 Vue3 + Vite 构建的现代化博客系统。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Vue Router 4** - Vue.js 官方路由管理器
- **Pinia** - Vue 3 的状态管理库
- **Marked** - Markdown 解析器
- **Day.js** - 轻量级日期处理库

## 功能特性

- 📝 博客文章展示
- 🏷️ 标签分类系统
- 📱 响应式设计
- 🔍 文章搜索和筛选
- 📄 Markdown 内容渲染
- 🎨 现代化 UI 设计

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
vue3-blog/
├── public/                 # 静态资源
├── src/
│   ├── components/         # 公共组件
│   │   ├── Header.vue     # 头部导航
│   │   ├── Footer.vue     # 底部信息
│   │   └── BlogCard.vue   # 博客卡片
│   ├── views/             # 页面组件
│   │   ├── Home.vue       # 首页
│   │   ├── BlogList.vue   # 博客列表
│   │   ├── BlogDetail.vue # 博客详情
│   │   ├── About.vue      # 关于页面
│   │   └── NotFound.vue   # 404页面
│   ├── stores/            # 状态管理
│   │   └── blog.js        # 博客数据
│   ├── router/            # 路由配置
│   │   └── index.js       # 路由定义
│   ├── App.vue            # 根组件
│   ├── main.js            # 入口文件
│   └── style.css          # 全局样式
├── index.html             # HTML 模板
├── vite.config.js         # Vite 配置
├── package.json           # 项目配置
└── README.md              # 项目说明
```

## 路由配置

- `/` - 首页
- `/blog` - 博客列表
- `/blog/:id` - 博客详情
- `/about` - 关于页面
- `/*` - 404 页面

## 开发说明

### 添加新文章

在 `src/stores/blog.js` 中的 `posts` 数组中添加新的文章对象：

```javascript
{
  id: 4,
  title: '文章标题',
  excerpt: '文章摘要...',
  content: `# Markdown 内容

这里是文章的 Markdown 内容...`,
  author: '作者名',
  date: '2024-01-20',
  tags: ['标签1', '标签2'],
  readTime: 5
}
```

### 自定义样式

- 全局样式在 `src/style.css` 中定义
- 组件样式使用 `<style scoped>` 进行局部作用域
- 支持响应式设计，移动端适配

## 部署

### 构建

```bash
npm run build
```

构建完成后，`dist` 目录包含可部署的静态文件。

### 部署到静态服务器

将 `dist` 目录的内容上传到任何静态文件服务器即可。

## 许可证

MIT License 