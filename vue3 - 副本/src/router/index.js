import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index/index.vue'
import Resource from '@/views/resource/resource.vue'
import Art from '@/views/art/art.vue'
import History from '@/views/history/history.vue'
import AboutUs from '@/views/aboutUs/aboutUs.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/art',
        name: 'Art',
        component: Art
    },
    {
        path: '/history',
        name: 'History',
        component: History
    },
    {
        path: '/resource',
        name: 'Resource',
        component: Resource
    },
    {
        path: '/aboutUs',
        name: 'AboutUs',
        component: AboutUs
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
