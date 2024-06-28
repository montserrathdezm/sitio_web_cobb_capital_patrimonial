<template>
  <Navbar />

    <section class="">
      <!-- BANNER INICIO-->
      <div style="position: relative;">
        <div  class="banner__nombrePagina-es">
          <h1 class="h1__hero__banners">ARRENDAMIENTO PURO</h1>
        </div>
        <div class="hero_div_home" style="">
          <v-card width="100%" class="mx-auto banner">
            <div class="d-flex fill-height justify-center align-center filter " >
              <div class="imgBannerArrendamientoPuro" id="imgBannerServicios"></div>
            </div>
          </v-card>
        </div> 
      </div>
      <!-- BANNER INICIO-->
    </section>

    <section class="paddingSection">
      <div class="paddingDivH4">
        <hr>
        <div>
          <h4 class="h4_descripcion">CONSISTE EN UN PLAN QUE BRINDA EL DERECHO A USAR UN ACTIVO A CAMBIO DE REALIZAR EL PAGO DE RENTAS MENSUALES DURANTE UN PLAZO DETERMINADO.</h4>
        </div>
        <hr>
      </div>
    </section>

    <section class="paddingSection">
      <div style="margin-bottom:10rem;" >
        <v-row no-gutters>
          <v-col cols="12" md="4"  >
            <div style="display: flex; justify-content: space-around;">
              <img id="imgArrendamientoPuro" src="@/assets/arrendamiento_puro/mujer-comprando-auto-nuevo_cobbCapital_arrendamiento_puro.jpg" >
            </div>
          </v-col>
          <v-col cols="12" md="8"  >
            <div class="padding_txtArrendamiento">
              <p class="txt_arrendamientoPuro"> Ideal para personas físicas con actividad empresarial, personas morales para la adquisición de activos como autos, maquinaria o equipamiento y también para personas que no quieren pagar mensualidades caras por un crédito automotriz.</p>
              <p class="txt_arrendamientoPuro">La principal diferencia entre el arrendamiento puro y el arrendamiento financiero es que éste último solo permite deducir los intereses del monto a pagar, mientras que el puro si permite deducir los pagos en su totalidad, ayudando a reducir la carga fiscal.</p>
              <p class="txt_arrendamientoPuro">Para más información, sugerimos que consulte a un profesional en materia fiscal.</p>
            </div>
          </v-col>
        </v-row>
      </div>
    </section>

    <section class="paddingSection">
      <div class="paddingPlanMiAuto">
        <h4 class="colorTxt" style="text-align: center;"><strong>PLAN "MI AUTO"</strong></h4>
        <p class="colorTxt pTxt" style="padding: 0px 20px;">Plazo: 48 meses
          <br>Depósito de garantía: 25% + 12 rentas
        </p>
        <div style="display: flex; justify-content: space-around;">
          <img id="tabArrendamientoPuro" src="@/assets/arrendamiento_puro/tabla_de_planes_arrendamiento_puro_COBB_CAPITAL_PATRIMONIAL.png" >
        </div>
        <div style="display: flex; justify-content: space-around; flex-direction:column;padding:10px 25px; ">
            <p class="liMiAuto pTxt"> <span class="iconLi"> &#x2714; </span> Renta fija durante todo el plazo</p>
            <p class="liMiAuto pTxt"> <span class="iconLi"> &#x2714; </span> Incluye seguro, derecho vehicular, placas y GPS</p>
            <p class="liMiAuto pTxt"> <span class="iconLi"> &#x2714; </span> Entrega del automóvil : Mes 13</p>
            <p class="liMiAuto pTxt"> <span class="iconLi"> &#x2714; </span> No requiere buró de Crédito</p>
            <p class="liMiAuto pTxt"> <span class="iconLi"> &#x2714; </span> No requiere aval</p>
            <p class="liMiAuto pTxt"> <span class="iconLi"> &#x2714; </span> No requiere comprobar ingresos</p>
            <p class="liMiAuto pTxt"> <span class="iconLi"> &#x2714; </span> Al termino del plazo puedes elegir:</p>
            <ol style="margin: 0px 0px 10px 20px;">
              <li class="liMiAuto">Estrenar auto nuevo (Cambio por renovación del plan, ya no requiere dar otro depósito).</li>
              <li class="liMiAuto">Devolución total de su depósito.</li>
              <li class="liMiAuto">Participar en nuestros remates de autos y estrenar un semi nuevo.</li>
            </ol>
          <p class="colorTxt" ><strong>Cancelación en cualquier momento, sin penalización.</strong></p>
          <p class="colorTxt" style="text-align:right;"><strong>*Aplican restricciones.</strong></p>
        </div>
      </div>
    </section> 

    <section class="paddingSection">
      <div style="" >
        <v-row no-gutters>
          <v-col style="text-align: center;padding-bottom:30px;">
            <button class="botonServicios">Contratar el servicio</button>
          </v-col>
          <v-col style="text-align: center;padding-bottom:30px;">
            <button class="botonServicios">Más información</button>
          </v-col>
        </v-row>
      </div>
    </section>

  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Arrendamiento Puro',
  components: {
    Navbar, Footer,
  },
  created () {

  },
  mounted(){
    window.scrollTo(0, 0);
  }

}
</script>
