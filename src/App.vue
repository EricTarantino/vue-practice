<template>
  <AppHeader/>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <div class="w-full flex">
    <DcHeros/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import DcHeros from  './components/DcHeros.vue'
export default {
  components: {
    AppHeader, DcHeros
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







