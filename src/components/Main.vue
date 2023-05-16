<script>
    import MainComp1 from "./MainComp1.vue"
    import MainComp2 from "./MainComp2.vue"
    import MainComp3 from "./MainComp3.vue"
    import MainComp4 from "./MainComp4.vue"
    import MainComp5 from "./MainComp5.vue"
    import MainComp6 from "./MainComp6.vue"
    import MainComp7 from "./MainComp7.vue"
    import MainComp8 from "./MainComp8.vue"

    export default{
        name: "Header",
        components: {
            MainComp1,
            MainComp2,
            MainComp3,
            MainComp4,
            MainComp5,
            MainComp6,
            MainComp7,
            MainComp8
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
    <!-- PARTE VALORI FONDAMENTALI -->
    <MainComp4/>
    <!-- PARTE TESTIMONIALS -->
    <MainComp5/>
    <!-- PARTE ULTIME NEWS -->
    <MainComp6/>
    <!-- PARTE PARTNERS -->
    <MainComp7/>
    <!-- PARTE FINALE MAIN -->
    <MainComp8/>
</template>

<style scoped lang="scss">

</style>