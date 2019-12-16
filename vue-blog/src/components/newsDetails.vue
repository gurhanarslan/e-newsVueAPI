<template>
  <div>
    <div class="card" v-for="item in news"> 
      <div class="card-header text-center"><h2>{{item.newsTitle}}</h2></div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p class="text-muted">{{item.newsDesc}}</p>
          <footer class="small text-muted text-right">
           {{item.NewsReadingTime}} Dakikalık Okuma Süresi / {{item.newsDate}}
            <cite title="Beğeni Yorum Sayısı">{{item.newsLike}} Beğeni / {{item.NewsComment}} Yorum</cite>
          </footer>
        {{item.newsTags}}

            </blockquote>
      </div>
    </div>


  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
      news: []
    };
  },
  computed: {
    
  },
  created() {
    this.news = this.$store.getters.getNewsOne(this.id);
    console.log("createddetails");
  },
      
};
</script>

<style>
</style>