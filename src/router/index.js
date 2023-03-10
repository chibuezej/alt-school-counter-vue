
import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Counter from '../views/Counter.vue'
import NotFound from '../views/NotFound.vue'

const routes =[
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/counter", component: Counter},
    {path: "/:pathMatch(.*)*", component: NotFound}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router; 