import { createRouter, createWebHistory } from 'vue-router'

const routeOptions = [
  { path: "/",            name: "HomeView" },
  { path: "/table",     name: "MyTable" },
  { path: "/test",     name: "MyTest" },
  { path: "/finaltable",     name: "FinalTable" },
]

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () => import(`../views/${route.name}.vue`)
  }
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router