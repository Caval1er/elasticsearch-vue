import Vue from 'vue'
import Vuex from 'vuex'
import {getNews} from 'network/news'
import {getPictures} from 'network/picture'
Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    newsData:[],
    keyword:"",
    pictureData:[],
    navStatus:0
  },
  mutations:{
    getNewsData(state,res){
      state.newsData=res;
    },
    updateKeyword(state,payload){
      state.keyword=payload;
    },
    getPicturesData(state,res){
      state.pictureData=res
      console.log(state.pictureData.data);
    },
    updateNavStatus(state,payload){
      state.navStatus=payload;
      console.log(state.navStatus);
    } 
  },
  actions:{
    agetNewsData(context,payload){
      return new Promise((resolve)=>{
        getNews(payload.key,payload.page).then(res=>{
        context.commit('getNewsData',res)
        resolve(res);
      })
      })
    },
    agetPicturesData(context,payload){
      return new Promise((resolve)=>{
        getPictures(payload.key,payload.page).then(res=>{
        context.commit('getPicturesData',res)
        resolve(res);
      })
      })
    }
  }
})

export default store