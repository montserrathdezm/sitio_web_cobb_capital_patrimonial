<template>
    <Navbar />

    <section class="">
    <!-- BANNER INICIO-->
        <div style="position: relative;">
            <div  class="banner__nombrePagina-es">
            <h1 class="h1__hero__banners">FONDO PERSONAL</h1>
        </div>
        <div class="hero_div_home" style="">
            <v-card width="100%" class="mx-auto banner">
                <div class="d-flex fill-height justify-center align-center filter " >
                    <div class="imgBannerFondoPersonal" id="imgBannerServicios"></div>
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
                <h4 class="h4_descripcion">CONSISTE EN UNA INVERSIÓN QUE EL CLIENTE PUEDE HACER Y APLICAR EN LOS SIGUIENTES CASOS:</h4>
            </div>
            <hr>
        </div>
    </section>

    <section class="margin_images ">
        <div  >
            <v-row no-gutters>
                <v-col cols="12" sm="6" md="4"  >
                    <img class="imgFondoPersonal" src="@/assets/fondo_personal/educacion.png" >
                    <p class="txtFondoPersonal">La educación de los hijos y/o nietos.</p>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <img class="imgFondoPersonal" src="@/assets/fondo_personal/salud.jpg" >
                    <p class="txtFondoPersonal">Gastos médicos.</p>
                </v-col>
                <v-col cols="12"  sm="6"  md="4">
                    <img class="imgFondoPersonal" src="@/assets/fondo_personal/viaje.jpg" >
                    <p class="txtFondoPersonal">Viajes.</p>
                </v-col>
                <v-col cols="12"  sm="6"  md="4"  >
                    <img class="imgFondoPersonal" src="@/assets/fondo_personal/estilo_de_vida.jpg" >
                    <p class="txtFondoPersonal">Mejorar su estilo de vida.</p>
                </v-col>
                <v-col cols="12" sm="6"  md="4">
                    <img class="imgFondoPersonal" src="@/assets/fondo_personal/vivir_inversiones.jpg" >
                    <p class="txtFondoPersonal">Vivir de las inversiones.</p>
                </v-col>
                <v-col cols="12" sm="6"  md="4">
                    <img class="imgFondoPersonal" src="@/assets/fondo_personal/fiestas.jpg" >
                    <p class="txtFondoPersonal">Fiestas familiares tales como bodas, XV años, etc.</p>
                </v-col>
            </v-row>
        </div>
    </section>

    <section>
        <div class="paddingDivH4" style="padding-bottom: 3%; padding-top:10%;">
            <h4 class="h4_descripcion"><strong>EJEMPLO</strong></h4>
            <p style="text-align:center; color:#0170B9;">(La ganancia es lo que puedes retirar cada mes)</p>
        </div>


        <div style="">
            <v-row no-gutters>
                <v-col cols="12" sm="6" md="6">
                    <img class="imgFondoPersonal_tab" src="@/assets/fondo_personal/fondo_personal_inversion.jpeg" >
                </v-col>
                <v-col  cols="12" sm="6" md="6" >
                    <div class="div_fondoPersonal">
                        <p class="p_fondoPersonal">Gracias al interés compuesto y a las aportaciones adicionales, que son opcionales pero que te pueden ayudar a acrecentar tu cuenta más rápidamente, es que vas a poder planificar tu futuro financiero.</p>
                        <p class="p_fondoPersonal">En este ejemplo, con tan solo $ 20,000 pesos iniciales y una aportación mensual de $ 2,000 pesos durante 36 meses (3 años), tú podrás ir incrementando tu capital conforme transcurre el tiempo.</p>
                    </div>
                </v-col>
            </v-row> 
            
            <v-row no-gutters>
                <v-col  cols="12" sm="6" md="6"  >
                    <img class="imgFondoPersonal_tab" src="@/assets/fondo_personal/fondo_personal_inversion_2.jpeg" >
                </v-col>
                <v-col  cols="12" sm="6" md="6" >
                    <div >
                        <br>
                        <p class="p_li_fondoPersonal">* En  1 año el saldo en tu cuenta será de: $ 57,761.78</p>
                        <p class="p_li_fondoPersonal">* En  3 años el saldo en tu cuenta será de: $ 226,226.23</p>
                        <p class="p_li_fondoPersonal">* En  5 años el saldo en tu cuenta será de: $ 584,816.07</p>
                        <p class="p_li_fondoPersonal">* En  7 años el saldo en tu cuenta será de: $ 1,499,061.46</p>
                        <p class="p_li_fondoPersonal">* En 10 años el saldo en tu cuenta será de: $ 6,152,047.13</p>
                        <br>
                        <p class="p_fondoPersonal" style="text-align: left; padding-bottom: 5rem;">**<strong>NOTA:</strong> Datos estimados de acuerdo a las condiciones de mercado vigentes en abril 2024.</p>
                    </div>
                </v-col>
            </v-row>
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


    <section class="cotizador">
        <div>

        </div>

    </section>

    <Footer />
</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'Fondo Personal',
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
