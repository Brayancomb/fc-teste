<template>
    <main>
        <v-btn icon href="/" x-large>
        <v-icon x-large>mdi-chevron-left</v-icon>
        </v-btn>
        <v-container
        style="background-color:white; border-radius:50px">
        <v-row justify="center">
            <v-col cols="3">
                <div>
                    <v-img src="../assets/images/image04.png"></v-img>
                </div>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="10" class="text-center">     
                <div 
                style="font-family: 'Comfortaa', cursive; font-size:xxx-large; color: #483698">
                Cadastro Realizado com Sucesso
                </div>
                <div style="font-family: 'Comfortaa', cursive; font-size:large; color: #483698">
                Aguarde nossa resposta na caixa de email cadastrada
                </div> 
            </v-col>
            <v-col cols="5">
                <v-btn  
                  rounded 
                  color="#483698" 
                  style="width:100%; color:white; font-family: 'Comfortaa', cursive; font-size: larger;" @click="goInit">
                    Inicio
                </v-btn>
            </v-col>     
        </v-row>          
  </v-container>
    </main>
</template>


<script>


export default {
    name: 'Finalization',

    methods:{
      goInit(){
            this.$router.push("/")
        }    
    }
}
</script>

