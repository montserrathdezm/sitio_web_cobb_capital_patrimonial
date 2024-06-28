<template>
  <Navbar />

  <!-- BANNER INICIO-->
  <div style="position: relative;">
    <div  class="banner__nombrePagina-es">
      <h1 class="h1__hero__home">COBB CAPITAL PATRIMONIAL</h1>
    </div>
    <div class="hero_div_home" style="">
      <v-card max-width="100%" class="mx-auto banner">
        <div class="d-flex fill-height justify-center align-center">
          <img id="imgBanner" src="@/assets/homeCobb/banner/HERO_COBB_CAPITAL_PATRIMONIAL_CON_FILTRO.jpeg" >
        </div>
        <div class="d-flex fill-height justify-center align-center" >
          <h2 class="subt_hero_home">Desarrollando un nuevo futuro</h2>
        </div>
        <div style="width: 100vw; display: flex; justify-content: space-around;">
          <button class="btn_hero_home">Contrata hoy mismo.</button>
        </div>
      </v-card>
    </div> 
  </div>
  <!-- BANNER INICIO-->

  <!-- QUIENES SOMOS -->  
  <section>
    <div class="home_quienes_somos">
      <v-container>
        <v-row class="margin_row">
          <v-col cols="12" sm="6" md="6">
            <div class="container_quienes_somos">
              <h2 class="subt_home_p" style="text-align:left;">¿Quiénes somos?</h2>
              <p class="p_quienesSomos">El 17 de febrero de 2014, un grupo de inversionistas y financieros crearon la empresa <strong>COBB CAPITAL de MÉXICO SA de CV.</strong> para ofrecer servicios bursátiles y bancarios</p>
              <p class="p_quienesSomos">A lo largo de su exitosa carrera, el grupo <strong >COBB CAPITAL</strong> ha desarrollado diversas áreas de oportunidad como lo es <strong>COBB CRÉDITO, COBB CAPITAL SAPI</strong> y ahora un nuevo lanzamiento: <strong>COBB CAPITAL PATRIMONIAL</strong>, Sociedad Anónima Promotora de Inversión de Capital Variable.</p>
              <p class="p_quienesSomos">Nuestra área de especialidad es:</p>
              <ol class="">
                <li class="p_quienesSomos_li">La inversión bursátil.</li>
                <li class="p_quienesSomos_li">El autorendamiento puro</li>
                <li class="p_quienesSomos_li">El autofinanciamiento inmobiliario</li>
              </ol>
              <br>
              <p class="p_quienesSomos">Estamos convencidos de que la inovación es la clave del éxito y nuestras alianzas comerciales con casas de bolsa, agencias inmobiliarias, agencias automotices y con profesionales independientes, aunado a nuestro moderno y poderoso sistema financiero hace de <strong>COBB CAPITAL PATRIMONIAL</strong> la herramienta perfecta para ayudarte a realizar tus sueños.</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <div>
              <img class="imgQuienesSomos" style="" src="@/assets/homeCobb/QUIENES_SOMOS.jpeg" >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="">
      <h2 class="subt_home_p_2">Dirección</h2>
      <p class="p_quienesSomos" style="text-align: center; padding:10px 10px;">Calle Sevilla No. 25 Fracc. Real del Bosque, Xalapa-Enríquez, Ver.</p>
      <section class="mapaEspacio">
        <GoogleMap></GoogleMap>
      </section>
      <h2 class="subt_home_p_2">Contáctanos</h2>
      <a class="url_quienesSomos" style="" href="mailto:contacto@cobbcapital.mx?Subject=Correo%20desde%20contacto%20sitio%20web" >contacto@cobbcapital.mx</a>
    </div>
  </section>
  <!-- /QUIENES SOMOS -->

  <!-- SERVICIOS -->
  <section>
    <div class="">
      <v-container>
        <h2 class="subt_home_p" style="text-align:center; text-decoration: underline;">Servicios</h2>
        <v-row class="margin_row">
          <v-col cols="12" sm="6" md="3" lg="3">
            <div class="">
              <img class="imgServicios" style="" src="@/assets/homeCobb/inversion_servicio_COBB_CAPITAL_PATRIMONIAL.jpg" >
              <h2 class="tituloServicios">Inversión</h2>
              <div class="espaciado_p_Servicios">
                <p class="p_Servicios">El cliente elige entre <i>interés simple</i> recibiendo ganancias cada mes, o <i>interés compuesto</i> las ganancias se suman al capital hasta el fin del plazo.</p>
              </div>
              <div class="espaciado_btn_Servicios">
                <button class="botonServicios">Ver más</button>
              </div>
            </div>
          </v-col>

          <v-col cols="12" sm="6" md="3" lg="3">
            <div>
              <img class="imgServicios" style="" src="@/assets/homeCobb/arrendamiento_puro_servicio_COBB-CAPITAL-PATRIMONIAL.jpg" >
              <h2 class="tituloServicios">Arrendamiento puro</h2>
              <div class="espaciado_p_Servicios">
                <p class="p_Servicios">Plan que brinda el derecho al cliente a usar un activo a cambio de realizar el pago de rentas mensuales en un plazo determinado.</p>
              </div>
              <div class="espaciado_btn_Servicios">
                <button class="botonServicios">Ver más</button>
              </div>
            </div>
          </v-col>

          <v-col cols="12" sm="6" md="3" lg="3">
            <div>
              <img class="imgServicios" style="" src="@/assets/homeCobb/fondo_personal_servicio_COBB_CAPITAL_PATRIMONIAL.jpg" >
              <h2 class="tituloServicios">Fondo personal</h2>
              <div class="espaciado_p_Servicios">
                <p class="p_Servicios">Consiste en una inversión que el cliente puede hacer y aplicar en varios casos desde salud, educación, recreación, para mejorar su estilo de vida.</p>
              </div>
              <div class="espaciado_btn_Servicios">
                <button class="botonServicios">Ver más</button>
              </div>
            </div>
          </v-col>

          <v-col cols="12" sm="6" md="3" lg="3">
            <div style="">
              <img class="imgServicios" style="" src="@/assets/homeCobb/autofinanciamiento_inmobiliario_servicio_COBB_CAPITAL_PATRIMONIAL.jpg" >
              <h2 class="tituloServicios">Autofinanciamiento inmobiliario</h2>
              <div class="espaciado_p_Servicios">
                <p class="p_Servicios">Próximamente.</p>
              </div>
              <div class="espaciado_btn_Servicios">
                <button class="botonServicios">Ver más</button>
              </div>
            </div>
            
          </v-col>

        </v-row>
      </v-container>
    </div>
  </section>
  <!-- /SERVICIOS -->

  <!-- BANNER BLOGS -->
  <section>
    <div style="position: relative;">
      <div  class="banner__nombrePagina-es">
        <h2 class="h1__hero__blog" style="">La importancia de la educación financiera en México y en el mundo.</h2>
      </div>
      <div class="hero_div_home" style="">
        <v-card max-width="100%" class="mx-auto banner">
          <div class="d-flex fill-height justify-center align-center">
            <img id="" class="heroBlog" style="" src="@/assets/homeCobb/hero-para-seccion-de-blogs-de-cobb-capital-patrimonial2.jpeg" >
          </div>
          <div class="d-flex fill-height justify-center align-center" >
            <!-- <h2 class="subt_hero_home">txt txt txt</h2> -->
          </div>
          <div style="width: 100vw; display: flex; justify-content: space-around;">
            <button class="btn_hero_home">Visita nuestros Blogs</button>
          </div>
        </v-card>
      </div> 
    </div>


  </section>
  <!-- /BANNER BLOGS -->

  <Footer />
</template>


<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Bannner from '@/components/Bannner.vue';
import GoogleMap from '@/components/GoogleMap.vue';
import { useI18n } from 'vue-i18n';

export default {
  setup () {
    const { t } = useI18n;
    return { t };
  },
  name: 'Home',
  components: {
    Navbar, Footer, Bannner,GoogleMap
  },
  data() {
    return {
      date: null,
      language :  null,showPopup: true
    };
  },
  data: () => ({
    valid: true,
    name: '', apmaterno: '', appaterno: '',
    nameRules: [
      v => !!v || 'Dato requerido',
      v => (v && v.length <= 30) || 'No debe exceder de los caracteres',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail requerido',
      v => /.+@.+\..+/.test(v) || 'E-mail debe ser válido ',
    ],
    number: '',
    numberRules: [
      v => !!v || 'Dato requerido',
      v => ((v > 0 || v < 9)) || 'Debe ser un número',
      v => (v.length <= 6) || ' Deben ser menos de 6 digitos',
    ],

    select: null,
    items: [
      'Quejas',
      'Sugerencias',
      'Bolsa de trabajo',
    ],
    checkbox : false
  }

  ),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate()
      if (valid) alert('Formulario valido')
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    
  },
  created() {
    
  },
  mounted(){
    window.scrollTo(0, 0);
  }
}
</script>

<style  lang="scss">
.dp-custom-cell{
  border-radius: 50%;
  color:black;
  font-size: 1.3rem ; 
  //padding: 6px 12px;
}
//.dp__active_date { background: brown; }
//.dp__today { border: 1px solid brown; }
//.dp__select { color: #ad182d; }

//.dp-all { font-size: 2.5rem; padding: 6px 12px; }

//.dp__input {
//  background-color: rgb(0 0 0 / 0%);
//  border-radius: 10px;
//  font-family: -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//  border: 1px solid #212121;
//  outline: none;
//  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  //width: 98%;
  //font-size: 1.1rem;
  //line-height: 4.2rem;
  //padding: 6px 12px;
  //color: var(--dp-text-color);
  //box-sizing: border-box;
//}

#imagenDebajoNav {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  top: 56px; /* Altura del navbar en píxeles */
  /* Ajusta esta altura según la altura de tu navbar */
  /* Puedes utilizar valores diferentes si el navbar tiene una altura diferente */
}

</style>