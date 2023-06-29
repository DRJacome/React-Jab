<template>
    <div>
        <h1>Hijo2:</h1>
        <h2>{{ canal }}</h2>
        <button @click="modificar">Cambiar</button>
    </div>
</template>
<script setup>
import { inject } from "vue";

const modificar = () => {
    canal.value = "Otro nombre para David: Pablo";
};

const canal = inject("miCanal");
</script>
<style></style>
