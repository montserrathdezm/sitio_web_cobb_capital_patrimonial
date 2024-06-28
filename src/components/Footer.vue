<template>
  <footer class="footer text-white">
    <v-container class="">
      <v-row no-gutters>
        <v-col cols="12"  sm="4" md="2" style="padding-top:2rem;" class=" center__elements">
          <a href="/" class="navbar-brand  align-text-center enlaceHeaderDesk" >Inicio</a>
        </v-col>
        <v-col cols="12"  sm="4" md="2" style="padding-top:2rem ;" class=" center__elements">
          <a href="/Arrendamiento_Puro" class="navbar-brand  align-text-center enlaceHeaderDesk">Arrendamiento</a>
        </v-col>
        <v-col cols="12"  sm="4" md="2" style="padding-top:2rem ;" class=" center__elements">
          <a href="/Fondo_Personal" class="navbar-brand  align-text-center enlaceHeaderDesk">Fondo personal</a>
        </v-col>
        <v-col cols="12"  sm="4" md="2" style="padding-top:2rem ;" class=" center__elements">
          <a href="/Autofinanciamiento_Inmobiliario" class="navbar-brand  align-text-center enlaceHeaderDesk">Autofinanciamiento</a>
        </v-col>
        <v-col cols="12"  sm="4" md="2" style="padding-top:2rem ;" class=" center__elements">
          <a href="" class="navbar-brand  align-text-center enlaceHeaderDesk">Inversión</a>
        </v-col>
        <v-col cols="12"  sm="4" md="2" style="padding-top:2rem ;" class=" center__elements ">
          <a href="" class="navbar-brand  align-text-center enlaceHeaderDesk">Clientes</a>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col style="padding-top:2rem ;" cols="12"   >
          <div class=" center__elements" >
            <a href="./TERMINOS-Y-CONDICIONES-COBB-CAPITAL-PATRIMONIAL.pdf" target="_blank" class="text-white">
              Términos y Condiciones
            </a>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col style="padding-top:2rem ;" cols="12"  >
          <div class="center__elements " >
            <a href="./AVISO-DE-PRIVACIDAD-COBB-CAPITAL-PATRIMONIAL.pdf" target="_blank" class="text-white">
              Aviso de privacidad
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>


    <div class="wrapper">
      <div class="der-icons">
        <button type="button">
          <a href="https://www.instagram.com//" target="_blank">
            <img src="@/assets/footer/Instagram.svg" height="">
          </a>
        </button>
        <button type="button">
          <a href="https://www.facebook.com//" target="_blank">
            <img src="@/assets/footer/Facebook.svg" height="">
          </a>
        </button>
        <button type="button">
          <a href="https://api.whatsapp.com/send?phone=" target="_blank">
            <img src="@/assets/footer/Whatsapp.svg" height="">
          </a>
        </button>
      </div>
    </div> 

  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods:{
    obtenerArchivosServidor(ruta) {
      if (ruta != "") {
        return this.$baseURL + ruta;
      }
    },
  },
}
</script>
  
<style >


</style>