<template>
    <div>
        <form class="formulario">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" v-model="nome">
            <br>
            <label for="dataNascimento">Data de Nascimento:</label>
            <input type="number" id="dataNascimento" name="dataNascimento" v-model="dataNascimento">
        </form>
    </div>

    <button class="botao" v-on:click="calcularIdade">
        Calcular idade
    </button>

    <p>
        A idade calculada do {{ nome }} é {{ idade }}
    </p>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const nome = ref("");
    const dataNascimento = ref(0);
    const idade = ref(0);

    function calcularIdade(){
        debugger
        idade.value = 2025 - dataNascimento.value;
    }

</script>

<style>

</style>