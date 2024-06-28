                                <!-- POPUP FORMULARIO-->
<template>
    <div style="margin: auto;">
        <button  class="button" @click="dialog = true"> Suscribirme </button>
        <v-dialog v-model="dialog">  
            <center>
                <v-card class="graciascontac" >
                    <div>
                        <center>
                        <h4 class="h4g">¡GRACIAS POR CONTACTARNOS!</h4>
                        <p class="pg">A la brevedad nos comunicaremos contigo.</p>
                        <button class="button buttong" @click="dialog = false"  > ok</button>
                        </center>
                    </div>
                </v-card>
            </center>
        </v-dialog>
    </div>



<v-select
  label="Select"
  :items="['1', '2', '3', '4', '5', '6']"
></v-select>

</template>

<script>
export default {
    name: 'GContactarnos',
    data(){
        return{
            dialog: false,
        }
    },

}
</script>