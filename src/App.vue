<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default{
  name:"app",
  components:{},
  methods:{
    ...mapActions(["fetchAccessToken"]),
    created(){
      this.fetchAccessToken()
    }
  }
}

</script>

<style>

</style>
