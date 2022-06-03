<template>
    <main>
        <v-btn icon href="/" x-large>
        <v-icon x-large>mdi-chevron-left</v-icon>
        </v-btn>
        <v-container
        style="background-color:white; border-radius:50px">
          <div 
            style="font-family: 'Comfortaa', cursive; font-size:xxx-large; color: #483698; padding-top:10px; padding-left:50px">
            Sobre o atendimento
          </div>
          <div 
            style="font-family: 'Comfortaa', cursive; font-size:x-large; padding-left:50px; margin-bottom:10px">
            Detalhes do atendimento
          </div>
    <v-row 
      class="text-center" style="padding-left:50px">
        <v-col 
          cols="6">
          <v-form>
            <v-row 
              id="formulario">
              <v-col 
                class="col-12 form-group">
                <div style="font-family: 'Comfortaa', cursive;">
                  Especialidade principal*
                </div>
                <v-select

                  :items="especialidades"
                  no-data-text="Carregando..."
                  hide-details
                  item-text="nome"
                  v-model="especialidadeSelected"
                  class="myselect" 
                  label="Selecione a especialidade"
                  return-object 
                  solo 
                  >
                </v-select>
              </v-col>
              <v-col 
                class="col-12 form-group">
                <div style="font-family: 'Comfortaa', cursive;" >
                  Informe o preço da consulta*
                </div>
                <div class="inputWithIcon">
                    <input
                    placeholder="Valor"
                    type="text"
                    v-model="valor" 
                    class="form-control" 
                    style="border-color: #483698;"
                    >
                    <v-icon class="icon">mdi-currency-brl</v-icon>
                </div>
              </v-col>
              <v-col 
                class="col-12 form-group">
                <div 
                  style="font-family: 'Comfortaa', cursive;">
                  Formas de pagamento da consulta*
                </div>
                <div class="check">
                    <div class="check2">
                    <v-checkbox v-model="type_pagamentoPix" value="pix"></v-checkbox>
                    <p class="inferno">Pix</p>
                    </div>
                </div>
                <div class="check">
                    <div class="check2">
                    <v-checkbox v-model="type_pagamentoMoney" value="dinheiro"></v-checkbox>
                    <p class="inferno">Em dinheiro</p>
                    </div>
                </div>
                <div class="check column">
                    <div class="check21">
                      <v-checkbox v-model="type_pagamento" value="credito"></v-checkbox>
                      <p class="inferno">Cartão de crédito</p>
                      
                    </div>
                    <div v-if="type_pagamento==='credito'" class="type_paiment">
                        
                        <v-col cols="6" class="pa-0">
                          <div style="text-align:start;">Parcelamento em:</div>
                          <v-checkbox v-model="parcelas" value="0" label="1x sem juros"/>
                          <v-checkbox v-model="parcelas" value="1" label="2x sem juros"/>
                          <v-checkbox v-model="parcelas" value="2" label="3x sem juros"/>
                          </v-col>
                        <v-col cols="6">
                        
                        </v-col>
                        <v-col cols="6">
                        
                        </v-col>
                      </div>
                </div>
              </v-col>             
              <v-row  style="display:flex; align-items: center; margin:0;" class="pt-4">
                <v-col class="col-10 pa-2">
                  <v-progress-linear
                  rounded
                  value="100"
                  color="#483698"
                  height="35"
                ></v-progress-linear>
                </v-col>
                <v-col class="col-2 pa-0">
                  <div
                  style="
                  width: 100px;
                  font-family: 'Comfortaa', cursive; color:#483698; font-size: 30px; font-weight: bolder; ">
                  2 de 2
                </div>     
                  </v-col>
              </v-row>
              <v-col class="col-12 form-group">
                <v-btn  
                  rounded 
                  color="#483698" 
                  style="width:100%; color:white; font-family: 'Comfortaa', cursive; font-size: larger;" @click="goRevision">
                    Próximo
                </v-btn>                
              </v-col>
            </v-row>
          </v-form>
        </v-col>
        <v-col cols="6" >
          <v-img
          src="../assets/images/image02.png"
          ></v-img>
        </v-col>
    </v-row>
  </v-container>
    </main>
</template>

<script>


export default{
    name: 'HelloPayment',
    created(){
      const {
        especialidadeSelected,
        valor,
        type_pagamento,
        type_pagamentoPix,
        type_pagamentoMoney,
        parcelas
      } = this.$store.getters.Atendimento;
      this.especialidadeSelected= especialidadeSelected;
      this.valor = valor;
      this.type_pagamento = type_pagamento;
      this.type_pagamentoPix = type_pagamentoPix;
      this.parcelas = parcelas;
      this.type_pagamentoMoney = type_pagamentoMoney
    },
    data(){
      return{
        especialidades:[],
        especialidadeSelected:"",
        type_pagamento: "",
        type_pagamentoMoney: "",
        type_pagamentoPix: "",
        parcelas:[],
        valor:"",
      }
    },

    watch:{},
    

    methods:{
      validation(){
        const
          value= this.especialidadeSelected && 
          this.valor
        return value;  
      },
      goRevision(){
        setTimeout(async () => {
          if(this.validation()){
            const atendimento = {
              especialidadeSelected: this.especialidadeSelected.nome,
              valor: this.valor,
              type_pagamento: this.type_pagamento,
              type_pagamentoPix: this.type_pagamentoPix,
              type_pagamentoMoney: this.type_pagamentoMoney,
              parcelas: this.parcelas
            }
            this.$store.commit('setAtendimento', atendimento);
            this.$router.push("/revision")
          }
        }, 100);
      }
    },

    mounted(){
      this.$store.dispatch('getEspecialidade').then( data => {
        this.especialidades = data;
      })
    }
  } 
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');

.inputWithIcon input[type=text]{
    padding-left: 50px;
    position: relative;
}

.inputWithIcon{
    position: relative;
}

.inputWithIcon i{
    position: absolute;
    left: 1px;
    top: 0px;
    padding:7px 8px;
    background-color: #483698;
    border-radius: 4px 0 0 4px;
    color: white;
}

.check{
    
    border-radius: 10px;
    background-color: #F9F9F9;
    margin-top: 20px;
    box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.114);
    cursor: pointer;
}

.check2{

    margin-left: 50px;
    display: flex;
    align-items: center;
}

.check21{

    margin-left: 50px;
    display: flex;
    align-items: center;
    
}

.inferno{
    display: contents;
    padding-left: 40px;
}
.type_paiment{
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
}

.v-input.myselect.v-input--hide-details.theme--light.v-text-field.v-text-field--single-line.v-text-field--solo.v-text-field--is-booted.v-text-field--enclosed.v-select {
    border-width: 1px;
    border-style: solid;
    border-color: #483698;
}
</style>
