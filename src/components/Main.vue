<script>
    import MainComp1 from "./MainComp1.vue"
    import MainComp2 from "./MainComp2.vue"

    export default{
        name: "Header",
        components: {
            MainComp1,
            MainComp2,
        }
    }
</script>

<template>
    <MainComp1/>
    <MainComp2/>
</template>

<style scoped lang="scss">

</style>