<template>
  <AppHeader/>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <div class="w-full flex">
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }, 

  data() {
    return {
      fname: "",
      lname: "",

    }
  },
  mounted(){
    setInterval(()=> {this.count++}, 1000);
  }
}
</script>







