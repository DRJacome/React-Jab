<template lang="">
    <div>
        <h1>Padre:</h1>
        <HijoVue :nombre="nombre" :edad="edad" @modificar="cambiarValor" />
        <Hijo2Vue />
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import HijoVue from "./components/Hijo.vue";
import Hijo2Vue from "./components/Hijo2.vue";

const cambiarValor = (valor1, valor2) => {
    nombre.value = valor1;
    edad.value = valor2;
};
const nombre = ref("David");
const edad = ref(18);
const canal = ref("Canal de David");
provide("miCanal", canal);
</script>
<style lang=""></style>
