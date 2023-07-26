import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '@/router';
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    console.log('要跳转的页面:', to.fullPath);
    console.log('从哪个页面跳转:', from.fullPath);
    next();
});
export default router
