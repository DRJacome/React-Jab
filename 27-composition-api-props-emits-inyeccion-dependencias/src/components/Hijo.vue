<template lang="">
    <div>
        <h1>Hijo:</h1>
        <h2>Te llamas {{ nombre }} y tienes {{ edad }} años.</h2>
        <button @click="enviar">Cambiar valores</button>
    </div>
</template>
<script setup>
const emit = defineEmits(["modificar"]);
const enviar = () => {
    emit("modificar", "V", 9);
};
const props = defineProps({
    nombre: String,
    edad: Number,
});
</script>
<style lang=""></style>
