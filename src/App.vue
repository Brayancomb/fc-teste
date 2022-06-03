<template class="geral">
  <v-app style="background-color:#FFE766"> 
    <v-container style="background-color:#FFE766">
      <v-main>
          <router-view path="$router.key"/>
      </v-main>
      
    </v-container>
  </v-app>  
</template>
  

<script>



export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
  created(){
  }
};
</script>
