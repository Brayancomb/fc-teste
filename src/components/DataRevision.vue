<template>
  <main>
    <v-btn icon href="/payment" x-large>
        <v-icon x-large>mdi-chevron-left</v-icon>
    </v-btn>
    <v-container
        style="background-color:white; border-radius:50px">
          
        <v-row 
            class="text-center" style="padding-left:50px;">
            <v-col cols="6">
            <div style="font-family: 'Comfortaa', cursive; font-size:xxx-large; color: #483698; font-weight: bold;">
            Revisão de cadastro
            </div>
            <v-row class="text-center pt-4">
                <v-row class="infoMom" style="margin-left:0px; margin-left: 0px; text-align-last: left;">
                    <v-col class="col-12" >
                        <div class="pb-3">
                            <div style="font-family: open sans; font-weight: bold;">
                                Nome completo
                            </div>
                            <div>
                            {{ information.nome }}
                            </div>
                        </div>
                        <div class="pb-5">
                            <div style="font-family: open sans; font-weight: bold;">
                                CPF
                            </div>
                            <div>
                                {{ information.cpf }}
                            </div>
                        </div> 
                        <div class="pb-5">
                            <div style="font-family: open sans; font-weight: bold;">
                                Número de celular ou telefone
                            </div>
                            <div>
                                {{ information.phone }}
                            </div>
                        </div> 
                        <div class="pb-5">
                            <div style="font-family: open sans; font-weight: bold;">
                                Estado/Cidade
                            </div>
                            <div>
                                {{ information.estadoSelected.nome }} / {{ information.cidadeSelected.nome }}
                            </div>
                        </div>
                        <div class="pb-5">
                            <div style="font-family: open sans; font-weight: bold;">
                                Especialidade principal
                            </div>
                            <div>
                                {{ atendimento.especialidadeSelected }}
                            </div>
                        </div>
                        <div class="pb-5">
                            <div style="font-family: open sans; font-weight: bold;">
                                Preço da consulta
                            </div>
                            <div>
                                R$ {{ atendimento.valor }}
                            </div>
                        </div> 
                        <div class="pb-5">
                            <div style="font-family: open sans; font-weight: bold;">
                                Formas de pagamento da consulta
                            </div>
                            <div class="column">
                               <div v-if="atendimento.type_pagamento">
                                Cartão de crédito - Parcelamento em {{parcelas}}x sem juros
                               </div>
                               <div v-if="atendimento.type_pagamentoPix">
                                Pix
                               </div>
                               <div v-if="atendimento.type_pagamentoMoney">
                                Dinheiro                                
                               </div>
                            </div>
                        </div>       
                    </v-col>
                </v-row>                
                <v-col class="col-12">
                    <v-btn  
                    rounded
                    width="80%" 
                    color="yellow" 
                    style="color:#483698; font-family: 'Comfortaa', cursive; font-size: 100%; font-weight: bold;" href="/revision">
                        CADASTRAR PROFISSIONAL
                    </v-btn>
                    <v-btn text color="#483698" rounded style="margin-top:15px;" @click="goInit">
                    Editar Cadastro
                    </v-btn>                
                </v-col>
            </v-row>
            
            </v-col>
            <v-col cols="6" style="align-self: center;" >
            <v-img
            src="../assets/images/image03.png"
            ></v-img>
            </v-col>
        </v-row>
    </v-container>
  </main>
</template>

<script>


export default {
    name: 'DataRevision',
    created(){
      this.atendimento =  this.$store.getters.Atendimento;
      this.information = this.$store.getters.InformationProfissional;
      console.log(this.atendimento, this.information)
    },
    data(){
      return{
        atendimento:{
            especialidadeSelected: "",
            valor: "",
            type_pagamento: "",
            type_pagamentoPix: "",
            type_pagamentoMoney: "",
            parcelas: "",
        },
        information: {
            nome: "",
            cpf: "",
            phone: "",
            estadoSelected: {nome: ""},
            cidadeSelected: {nome: ""},
        },
      }
    },
    methods: {
        goInit(){
            this.$router.push("/")
        }  
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');

.row {
    margin-left: 0;
}
</style>