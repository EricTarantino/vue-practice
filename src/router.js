import {createRouter, createWebHistory}from 'vue-router';

import Home from './page/Home'
import DcHeros from './page/DcHeros'
import Calendar from './page/Calendar'

const routes = [
    {path:'/', component: Home}, 
    {path:'/dc-heros', component: DcHeros},
    {path:'/calendar', component: Calendar}, 
]

const router = createRouter({
    history: createWebHistory(), 
    routes
});

export default router;