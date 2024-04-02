import { createRouter, createWebHistory } from 'vue-router'
import ClientView from '@/views/client/ClientView.vue'
import ProjectView from '@/views/project/ProjectView.vue'
import TaskManagerViev from '@/views/task-manager/TaskManagerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ProjectView
    },
    {
      path: '/client',
      name: 'Client',
      component: ClientView
    },
    {
      path: '/task-manager',
      name: 'Task Manager',
      component: TaskManagerViev
    },

  ]
})

export default router
