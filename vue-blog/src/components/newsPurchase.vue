<template>
  <div class="container">
      <div class="col-12 col-md-6 mt-5 offset-3 shadow border rounded">
          <div class="text-center mt-4"><h3>News Create Processes</h3></div>
          
          <hr>
          <div class="form-group">
              <label for="newsTitle">News Title</label>
              <input v-model="news.newsTitle" type="text" class="form-control">
          </div>
            <div class="form-group">
              <label for="newsTitle">News Author</label>
              <input v-model="news.newsAuthor" type="text" class="form-control">
          </div>
            <div class="form-group">
              <label for="newsTitle">News Mini-Description</label>
              <textarea v-model="news.newsMiniDesc" cols="10" rows="3" class="form-control"></textarea>
          </div>
            <div class="form-group">
              <label for="newsTitle">News Description</label>
              <textarea v-model="news.newsDesc" cols="30" rows="10" class="form-control"></textarea>
          </div>
            <div class="form-group">
              <label for="newsTitle">News Tags</label>
              <input v-model="news.newsTags" type="text" class="form-control">
          </div>
          <div class="form-group text-right">
              <button @click="saveNews" class="btn btn-primary">Create</button>
          </div>
          <br><br>
          <br><br>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            news:{
                newsTitle:null,
                newsAuthor:null,
                newsMiniDesc:"",
                newsTags:null,
                newsDesc:"",
                newsDate:null,
                newsLike:0,
                NewsComment:0,
                NewsReadingTime:null
            }
        }
    },
    methods:{
saveNews(){
        //date purchase
    let date=new Date();
    let month=date.getMonth()+1;
    let day= date.getDate();
    let year= date.getFullYear();
    let DateNow= day+'/'+month+'/'+year;
    this.news.newsDate=DateNow;
        //reading time purchase
    let minReadingTime=1000;
    let time = Math.ceil(this.news.newsDesc.length/minReadingTime)
    this.news.NewsReadingTime=time
    this.$store.dispatch('saveNews', this.news)

}
    }
}
</script>

<style>

</style>