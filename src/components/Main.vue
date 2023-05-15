<script>
    import MainComp1 from "./MainComp1.vue"
    import MainComp2 from "./MainComp2.vue"
    import MainComp3 from "./MainComp3.vue"

    export default{
        name: "Header",
        components: {
            MainComp1,
            MainComp2,
            MainComp3,
        }
    }
</script>

<template>
    <!-- PARTE PRESENTAZIONE AZIENDA (COSTRUZIONI MODERNE) -->
    <MainComp1/>
    <!-- PARTE NUMERI AZIENDALI -->
    <MainComp2/>
    <!-- PARTE IMMAGINI PROGETTI -->
    <MainComp3/>
</template>

<style scoped lang="scss">

</style>