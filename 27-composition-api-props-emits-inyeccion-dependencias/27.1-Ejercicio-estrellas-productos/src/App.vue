<template lang="">
    <div>
        <div v-for="(cosa, index) in cosas" :key="index">
            <FichaVue :cosa="cosa" :index="index" @retorno="retorno" />
        </div>
    </div>
</template>
<script setup>
import FichaVue from "./components/Ficha.vue";
import cosas from "./assets/datos";

const retorno = (estrella, index) => {
    if (estrella >= 5) {
        cosas.value[index].nota = 1;
    } else {
        cosas.value[index].nota = estrella + 1;
    }
};
</script>
<style></style>
