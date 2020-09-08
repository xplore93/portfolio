import Home    from '@/views/Home'
import Projects   from '@/views/Projects'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/projects',
            component: Projects
        }
    ],
    linkActiveClass: "active",
    mode: "history"
})