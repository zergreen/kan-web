<template>
  <div>
    <MyNavbar/>
    <router-view/>
  </div>
</template>

<script>
import MyNavbar from './components/MyNavbar.vue'
export default {
  components: { 
    MyNavbar,
  },
  name: 'App'
}

</script>

<style scoped>

</style>