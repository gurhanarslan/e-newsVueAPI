<template>
  <div class="container">
      <div class="card text-center mt-4"  v-for="item in getNews">
  <div class="card-header" style="background-color: rgb(255, 218, 218)">
  Yazar : {{item.newsAuthor}} / {{item.newsDate}}
  </div>
  <div class="card-body">
    <h5 class="card-title">{{item.newsTitle}}</h5>
    <p class="card-text">{{item.newsMiniDesc}}</p>
    <router-link tag="button" :to="'news/'+item.id" class="btn text-white" style="background-color: rgb(223, 118, 118)">Devamını Oku..</router-link>
  </div>
  <div class="card-footer text-muted" style="background-color: rgb(255, 218, 218)">
   {{item.NewsReadingTime}} Dakikalık Okuma Süresi / {{item.NewsComment}} Yorum {{item.newsLike}} Beğeni
  </div>
</div>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['getNews'])
    }
}
</script>

<style>

</style>