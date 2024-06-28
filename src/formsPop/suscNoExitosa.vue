                                                    <!-- POPUP SUSCRIPCION NO EXITOSA FORMULARIO-->
<template> 
    <div style="margin: auto;">
        <v-dialog v-model="dialog">  <center>
            <v-card class="noexitosa">
                <div>
                    <center>
                        <img src="@/assets/forms/cancel.png" class="imgne"/>
                        <h4 class="h4ne">Suscripción no exitosa</h4>
                        <p class="noe"> No pudimos validar la información que nos diste, intenta de nuevo sin olvidar llenar todos los campos requeridos.</p>
                        <button class="button buttonne" @click="dialog = false"> Intentar de nuevo</button>
                    </center>
                </div>
            </v-card></center>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'suscNoExitosa',
    data(){
        return{
            dialog: false,
        }
    },
    props:{
        active:{
            type:Boolean, required: true
        }
    }

}
</script>