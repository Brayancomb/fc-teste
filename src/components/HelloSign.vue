<template>
  <v-container
   style="background-color:white; border-radius:50px;">
    
    <v-row 
      class="text-center">
        <v-col 
          cols="6">
          <div 
            style="font-family: 'Comfortaa', cursive; font-size:xxx-large; color: #483698; padding-left:30px; padding-top:10px; text-align: start;">
            Sobre o profissional
          </div>
          <div 
            style="font-family: 'Comfortaa', cursive; font-size:x-large; padding-left:30px; margin-bottom:10px; text-align: start;">
            Dados do profissional
          </div>
          <v-form>
            <v-row 
              id="formulario">
              <v-col 
                class="col-12">
                <div style="font-family: Open sans-serif; text-align: start; font-size: 20px;">
                  Nome completo*
                </div>
                <v-text-field
                  v-model="nome"
                  class=" elevation-0"
                  :class="{nameField: !nome && nomef}"
                  placeholder="Digite o nome completo" 
                  type="text"
                  :rules="nameRules"
                  solo
                  single-line>
                </v-text-field>  
              </v-col>
              <v-col 
                class="col-10">
                <div style="font-family: Open sans-serif; text-align: start; font-size: 20px;">
                  CPF*
                </div>
                <v-text-field
                  v-model="cpf"
                  placeholder="Digite um cpf"                   
                  class=" elevation-0"
                  :class="{cpfField: !cpf && cpff}"
                  solo
                  :rules="cpfRules"
                  single-line
                  v-mask="'###.###.###-##'"
                >
                </v-text-field>
              </v-col>
              <v-col 
                class="col-10">
                <div 
                  style="font-family: Open sans-serif; text-align: start; font-size: 20px;">
                  Número de celular*
                </div>
                <v-text-field
                  v-model="phone"
                  placeholder="(00) 0 0000-0000"
                  type="text"
                  class=" elevation-0"
                  :class="{phoneField: !phone && !!phonef}"
                  solo
                  :rules="[(v) => !!v || 'Necessario ser preenchido']"
                  single-line
                  v-mask="'(##) # ####-####'"
                >
                </v-text-field>
              </v-col>
              <v-col 
                class="col-6">
                <p 
                  style="font-family: Open sans-serif; font-size: 20px; text-align: left;">
                  Estado*
                </p>
                <v-select 
                  label="Selecione..."
                  no-data-text="Carregando..."
                  :items="estados"
                  item-text="nome"
                  class=" elevation-0"
                  :class="{estadoField: !estadoSelected && !!phonef}"
                  v-model="estadoSelected"
                  return-object
                  hide-details
                  solo
                ></v-select>  
              </v-col>
              <v-col 
                class="col-6">
                <p 
                  style="font-family: Open sans-serif; font-size: 20px; text-align: left;">
                  Cidade*
                </p>
                <v-select
                  class="myselect"
                  required
                  label="Selecione..."
                  no-data-text="Selecione primeiramente o estado"
                  :items="estadoSelected.cidades"
                  item-text="nome"
                  return-object
                  v-model="cidadeSelected"
                  hide-details
                  solo
                ></v-select>                 
              </v-col>
              <v-row  style="display:flex; align-items: center; margin:0;">
                <v-col class="col-10 pt-10">
                  <v-progress-linear
                  rounded
                  value="50"
                  color="#483698"
                  height="35"
                ></v-progress-linear>
                </v-col>
                <v-col class="col-2 pa-0">
                  <div
                  style="
                  width: 100px;
                  font-family: 'Comfortaa', cursive; color:#483698; font-size: 30px; font-weight: bolder; ">
                  1 de 2
                </div>     
                  </v-col>
              </v-row>
              <v-col class="col-12 form-group">
                <v-btn  
                  rounded 
                  color="#483698" 
                  style="width:100%; color:white; font-family: 'Comfortaa', cursive; font-size: larger;" @click="goPayment()">
                    Próximo
                </v-btn>               
              </v-col>
            </v-row>
          </v-form>
        </v-col>
        <v-col cols="6" style="place-self: center;" >
          <v-img
            src="../assets/images/image01.png"
          ></v-img>
        </v-col> 
    </v-row>
  </v-container>
</template>

<script>
import {mask} from 'vue-the-mask';

  export default {
    name: 'HelloSign',

    directives: {mask},
    created(){
      const {
              nome,
              cpf,
              phone,
              estadoSelected,
              cidadeSelected
            } = this.$store.getters.InformationProfissional;
      this.nome = nome;
      this.cpf = cpf;
      this.phone = phone;
      this.estadoSelected = estadoSelected;
      this.cidadeSelected = cidadeSelected;
    },
    data(){
      return{
        estados: [],
        nome: "",
        nomef:"",
        cpf:"",
        cpff:"",
        cidadeSelected: "",
        estadoSelected:{
          cidades: [],
        },
        phone:"",
        phonef:"",
        nameRules: [
          v => !!v || 'Necessario ser preenchido',
          v => (v && v.length >= 10) || 'Seu nome tem menos de 9 letras?',  
        ],
        cpfRules: [
          v => !!v || 'Necessario ser preenchido',
          v => (v && v.length >= 14) || 'Seu CPF tem menos de 11 digitos?',
        ],
      }
    }, 
    watch:{
      nome(v){
       this.nomef = true;
       this.cpff = true;
       this.phonef = true;
      }
    },

    methods:{
      validation(){
        const 
          value = this.nome.length > 8 && 
          this.cidadeSelected  && 
          this.cpf.length > 10 && 
          this.phone.length > 15;
          //console.log(this.cidadeSelected);
        return value;
      },

      goPayment(){
        setTimeout(async () => {
          if(this.validation()){
            const information = {
              nome: this.nome,
              cpf: this.cpf,
              phone: this.phone,
              estadoSelected: this.estadoSelected,
              cidadeSelected: this.cidadeSelected
            }
            this.$store.commit('setInformation_Profissional',information);
            this.$router.push("/payment");
          }
          else {alert("INPUTA OS DADOS ANIMAL")}
        }, 100);
      }
    },


    mounted(){
      this.$store.dispatch('getCidades').then( data => {
        this.estados = data;
      })
    }
  }
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.row {
    margin-left: 20px;
}

.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    border: 1px solid #483698;
    
}

.v-text-field.nameField.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    border: 1px solid #e70f0f;
    box-shadow: none;
}

.v-text-field.cpfField.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    border: 1px solid red;
    box-shadow: none;
}

.v-text-field.phoneField.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    border: 1px solid red;
    box-shadow: none;
}

.v-text-field.cityField.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    border: 1px solid red;
    box-shadow: none;
}

.v-text-field.estadoField.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    border: 1px solid red;
    box-shadow: none;
}
</style>
