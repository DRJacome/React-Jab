<!-- En el template a las variables nunca se les pone .value para acceder a su valor -->
<template>
    <div class="contenido">
        <h2>
            Cena {{ contador + 1 }} con el rey godo
            <span>{{ rey }}</span>
        </h2>
        <h3 class="precio">
            Precio: <span>{{ precio }}€</span>
        </h3>
        <div class="finSemana dias" v-if="productos[contador].finDeSemana">
            (Sólo fines de semana)
        </div>
        <div class="diario dias" v-else>(De lunes a domingo)</div>
        <div class="oferta" v-if="productos[contador].precio < 100">
            <div>Ahora un 10% de descuento: {{ nuevoPrecio }}€</div>
            <img src="./data/oferta.jpg" alt="rey godo en descuento" />
        </div>
        <div>
            <img :src="imagen" alt="rey" />
        </div>
        <div>
            <button @:click="siguiente">
                Siguiente ({{ contador + 1 }}/{{ total }})
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { productos } from "./data/datos";
import { computed } from "@vue/reactivity";

const contador = ref(0);
const total = productos.length;
const ruta = "https://www.html6.es/img/rey_";

const siguiente = () => {
    contador.value++;
    if (contador.value >= total) {
        contador.value = 0;
    }
};

const rey = computed(() => {
    const nombre = productos[contador.value].nombre.toLowerCase();
    return nombre.substring(0, 1).toUpperCase() + nombre.substring(1);
});

const imagen = computed(() => {
    const nombre = productos[contador.value].nombre.toLowerCase();
    return `${ruta}${nombre}.png`;
});

const precio = computed(() => {
    return productos[contador.value].precio;
});

const nuevoPrecio = computed(() => {
    return Number(productos[contador.value].precio / 1.1).toFixed(2);
});
</script>

<style scoped>
.contenido {
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 500px;
}

span {
    color: green;
}
.diario {
    background-color: green;
    color: white;
}

.finSemana {
    background-color: red;
}
</style>
