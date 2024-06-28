<template>
  <v-card max-width="100%" class="mx-auto banner">
    <v-carousel cycle :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-square"
      height="auto">
      <v-carousel-item v-for="(i) in 5  " :key="i" :transition="fade - transition">

      </v-carousel-item>
    </v-carousel> 
  </v-card>

  

</template>

<script>
export default {
  name: 'Home',
  components: {
  }, 
  data () {
      return {
        dialog: false,
      }
    },

}
</script>
<style scoped >
.button {
  width: 31.7rem;
  height: 6.7rem;
  font-size: 3.2rem;
}




</style>