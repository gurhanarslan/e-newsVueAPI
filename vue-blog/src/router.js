import Vue from 'vue'
import VueRouter from 'vue-router'
import newsPurchase from './components/newsPurchase'
import news from './components/news'
import newsDetails from './components/newsDetails'

export const routes =[
    {path:'/',component:news,name:'news'},
    {path:'/newsProcesses',component:newsPurchase,name:'newsPurchase'},
    {path:'/news/:id',component:newsDetails,name:'newsDetails'}
    
]

Vue.use(VueRouter);

export const router = new VueRouter({
    routes,
    mode:"history"
})
