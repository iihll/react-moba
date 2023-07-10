import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/login", name: '登录', component: "@/pages/Login/index", isPublic: true },
    {
      path: "/",
      component: "@/pages/Main/index",
      wrappers: [
        '@/wrappers/auth',
      ],
      routes: [
        { path: '/', redirect: '/welcome' },
        { path: "/welcome", component: "@/pages/Welcome/index" },

        // { path: '/categories/create', component: 'CategoryEdit' },
        // { path: '/categories/edit/:id', component: 'CategoryEdit', props: true },
        { path: '/categories/list', component: '@/pages/CategoryList/index' },

        // { path: '/items/create', component: 'ItemEdit' },
        // { path: '/items/edit/:id', component: 'ItemEdit', props: true },
        { path: '/items/list', component: '@/pages/ItemList/index' },

        // { path: '/heroes/create', component: 'HeroEdit' },
        // { path: '/heroes/edit/:id', component: 'HeroEdit', props: true },
        { path: '/heroes/list', component: '@/pages/HeroList/index' },

        // { path: '/articles/create', component: 'ArticleEdit' },
        // { path: '/articles/edit/:id', component: 'ArticleEdit', props: true },
        { path: '/articles/list', component: '@/pages/ArticleList/index' },

        // { path: '/ads/create', component: 'AdEdit' },
        // { path: '/ads/edit/:id', component: 'AdList', props: true },
        { path: '/ads/list', component: '@/pages/AdList/index' },

        // { path: '/admin_users/create', component: 'AdminUserEdit' },
        // { path: '/admin_users/edit/:id', component: 'AdminUserEdit', props: true },
        { path: '/admin_users/list', component: '@/pages/AdminUserList/index' }
      ],
    },
  ],
  proxy: {
    '/admin/api': {
      'target': 'http://localhost:3000/',
      'changeOrigin': true
    },
  },
  npmClient: "pnpm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
