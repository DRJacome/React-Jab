<template>
    <div >
        <div class="display">
            <button class="boton">
                <div>{{ cosa.ropa }} ({{ cosa.marca }})</div>
            </button>
            <div class="estrellas">
                <span v-for="index in cosa.nota" :key="index">
                    <img
                        src="https://html6.es/img/estrella.png"
                        alt="estrella"
                    />
                </span>
            </div>
            <div>
                <button @click="incrementarNota(cosa.nota, index)">+</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    cosa: String,
    index: Number,
});
const emito = defineEmits(["retorno"]);
const incrementarNota = (estrella, index) => {
    emito("retorno", estrella, index);
};
</script>
<style>
.display {
    display: flex;
    align-items: center;
}

.display img {
    width: 15px;
    margin: 1px;
}

.display button {
    margin-right: 20px;
}
.boton {
    width: 165px;
}

.estrellas {
    width: 125px;
    height: 22px;
}
</style>
