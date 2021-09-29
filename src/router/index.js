import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite.vue'
import Podcast from '../pages/Podcast.vue'
import Mine from '../pages/Mine.vue'
import Attention from '../pages/Attention.vue'
Vue.use(VueRouter)

export default  new VueRouter({
    //所有路由
    routes:[
        {
            path:'/msite',
            component:MSite
        },
        {
            path:'/podcast',
            component:Podcast
        },
        {
            path:'/mine',
            component:Mine
        },
        {
            path:'/attention',
            component:Attention
        },
        {
            path:'/',
            redirect:'msite'
        }
    ]
})