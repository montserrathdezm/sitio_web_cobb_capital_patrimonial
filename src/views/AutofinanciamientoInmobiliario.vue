<template>
    <Navbar />

    <section class="">
    <!-- BANNER INICIO-->
        <div style="position: relative;">
            <div  class="contacto__nombrePagina-es">
            <h1 class="h1__hero__banners_autofinanciamiento">AUTOFINANCIAMIENTO INMOBILIARIO</h1>
        </div>
        <div class="hero_div_home" style="">
            <v-card width="100%" class="mx-auto banner">

                <div class="d-flex fill-height justify-center align-center filter " >
                    <div class="imgBannerAutofinanciamiento" id="imgBannerServicios"></div>
                </div>
            </v-card>
        </div> 
        </div>
    <!-- BANNER INICIO-->
    
    </section>

    <section class="paddingSection">
        <div class="paddingDivH4">
            <!-- <hr> -->
            <div style="padding-bottom:10rem;padding-top:10rem;">
                <h4 class="h4_descripcion">Próximamente.</h4>
            </div>
            <!-- <hr> -->
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
        name: 'Autofinanciamiento Inmobiliario',
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
