<template>
    <button @click="decremento">-</button>
    <span :class="miColor">{{ contador }}</span>
    <button @click="incremento">+</button>
    <div v-if="contador < 0">Escribe una cantidad mayor que 0</div>
    <div v-else-if="contador >= 5">Escribe una cantidad menor que 5</div>
    <div v-show="comprobacion">No está permitido el número 0</div>
    <img :src="imagen1" alt="logo" />
</template>

<script setup>
import { ref, computed } from "vue";
import imagen2 from "./assets/logo.svg";
import {valores} from './datos'

const imagen1 = valores[0].web;
const imagen3 = "favicon.ico"
const miColor = ref("azul");
const contador = ref(0);

const decremento = () => {
    contador.value--;
    if (contador.value < 0) {
        miColor.value = "rojo";
    }
};
const incremento = () => {
    contador.value++;
    if (contador.value > 5) {
        miColor.value = "verde";
    }
};

const comprobacion = computed(() => {
    return contador.value === 0;
});
</script>

<style scoped>
span,
button {
    font-size: 5rem;
    padding: 0 10px;
}

.rojo {
    color: red;
}
.verde {
    color: green;
}
.azul {
    color: navy;
}
</style>
