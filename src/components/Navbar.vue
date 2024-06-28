<template>
<nav class="navbar sticky-top ">
  <router-link class="navbar-brand white" to="/">
    <img src="@/assets/navbar/prueba_logo.svg" alt="COBB Logo"
      class="d-inline-block align-center mx-3 logo">
  </router-link>
  <div>
    <div>
      <router-link class="navbar-brand  align-text-center enlaceHeaderDesk" to="/">
        Inicio
      </router-link> 
      <router-link class="navbar-brand  align-text-center enlaceHeaderDesk" to="/Arrendamiento_Puro">
        Arrendamiento
      </router-link>
      <router-link class="navbar-brand align-text-center  enlaceHeaderDesk" to="/Fondo_Personal">
        Fondo Personal
      </router-link>
      <router-link class="navbar-brand align-text-center  enlaceHeaderDesk" to="/Autofinanciamiento_Inmobiliario">
        Autofinanciamiento
      </router-link>
      <router-link class="navbar-brand align-text-center  enlaceHeaderDesk" to="">
        Inversión
      </router-link>
      <a class="navbar-brand align-text-center  enlaceHeaderDesk btnClientes"
        href="" >
        Clientes
      </a>
    </div>
  </div>
    <div class="menuMovil">
      
      <div id="menuMovil__icon" @click="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="menuMovil__items" class="menuMovil__items">
      <div class="menuMovil__items__menu">
        <router-link class="navbar-brand white align-text-center" to="/">
          Inicio
        </router-link>
        <router-link class="navbar-brand align-text-center white" to="/Arrendamiento_Puro">
          Arrendamiento
        </router-link>
        <router-link class="navbar-brand white align-text-center" to="/Fondo_Personal">
          Fondo Personal
        </router-link>
        <router-link class="navbar-brand align-text-center white" to="/Autofinanciamiento_Inmobiliario">
          Autofinanciamiento
        </router-link>
        <router-link class="navbar-brand align-text-center white" to="/">
          Inversión
        </router-link>
        <router-link class="navbar-brand align-text-center white" to="/">
          Clientes
        </router-link>
      </div>
      
    </div>
</nav>
</template>

<script>
  export default {
    setup () {
    },
    data(){
        return {
        isOpen: false
      };
    },
    name: 'Navbar',
    methods:{
    menu () {
      let menuMovil__icon = document.getElementById("menuMovil__icon");
      let menuMovil__items = document.getElementById("menuMovil__items");
      menuMovil__icon.classList.toggle("active");
      menuMovil__items.classList.toggle("active");
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    mounted() {
      
    },
  }
}

</script>

<style>

</style>
