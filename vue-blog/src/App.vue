<template>
<div>
  <div class="text-center">## TASARIM İLE UĞRAŞMADIM BURADAKİ AMACIM API'YE DATA EKLEMEK,TÜM DATAYI ÇEKMEK VE HABERİN ÖZEL DATASINI ÇEKMEK <br>
  Projeyi Install edip incelediyseniz Beğen butonuna basar mısınız :)</div>
    <app-header></app-header>
  <transition enter-active-class="animated fadeIn" mode="out-in" leave-active-class="animated fadeOut">
      <router-view></router-view>
  </transition>
    <div class="mt-5"></div>
    <app-footer></app-footer>

</div>
</template>

<script>
import header from './components/shared/header'
import footer from './components/shared/footer'
export default {
 components:{
   appHeader :header,
  appFooter: footer,
 },
 created(){
   this.$store.dispatch('instantNews')
 }
}
</script>

<style>

</style>
