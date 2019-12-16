import Vue from 'vue'
const state= {
    news:[]
}
const getters= {
    getNews(){
        return state.news.reverse()
    },
    getNewsOne(){
        return key=> state.news.filter(response=>{
            return response.id==key
        })
    }
}
const mutations= {
    saveNewsProject(state,payload){
         state.news.push(payload)
         console.log(state.news)
    }
}
const actions= {
    instantNews({commit},payload){
        Vue.http.get('https://vue-blog-bae64.firebaseio.com/news.json',payload)
        .then(response=>{
            let data = response.body
            for(let key in data){
                data[key].id = key;
                commit('saveNewsProject',data[key])
            }
        })
   
    },
    saveNews({commit},payload){
        Vue.http.post('https://vue-blog-bae64.firebaseio.com/news.json',payload)
        .then(response=>{
            payload.id=response.data.name
            commit('saveNewsProject',payload)
        })
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}