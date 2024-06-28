                                                    <!-- POPUP SUSCRIPCION EXITOSA FORMULARIO-->
<template> 
    <div style="margin: auto;">
       
        <v-dialog v-model="dialog" >  <center>
            <v-card class="exitosa popup"  >
                <div>
                    <center>
                        <img src="@/assets/forms/check.png" class="imge"/>
                        <h4 class="h4e">¡Suscripción Exitosa!</h4>
                        <p class="mensajeGracias">Gracias por tu preferencia, te llegará un correo electrónico confirmando la suscripción a nuestros mailings.</p>
                        <button class="button buttone" @click="dialog = false" > ok</button>
                    </center>
                </div>
            </v-card></center>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'suscExitosa',
    data(){
        return{
            dialog: false,
        }
    },

}
</script>