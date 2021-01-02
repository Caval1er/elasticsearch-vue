import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import('views/Home/Home'),
    meta:{path:'/home'}
  },
  {
    path:'/news',
    component:()=>import('views/News/News'),
    meta:{path:'/news'}
  },
  {
    path:'/picture',
    component:()=>import('views/Picture/Picture'),
    meta:{path:'/picture'}
  }
]

const router=new VueRouter({
  routes,
  mode:'history'
})
router.beforeEach((to,from,next)=>{
  if(to.path.indexOf('/home')!==-1){
    console.log(to.path);
    document.body.style.backgroundImage=`url(${"https://wallpaper.infinitynewtab.com/wallpaper/2960.jpg"})`;
  }else{
    document.body.style.backgroundImage='url("")';
    document.body.style.backgroundColor="#f5f5f7";
  }
  next();
})

export default router