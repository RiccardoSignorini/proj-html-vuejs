<script>
  import Header from "./components/header.vue";
  import Main from "./components/main.vue";
  import Footer from "./components/footer.vue";

  export default{
    name: "App",
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<template>
  <Header/>
  <Main/>
  <Footer/>
</template>

<style>

</style>
