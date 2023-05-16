<script>
    export default{
        name: "HeaderComp1",
        props: {
            imgPath: String
        },

        data(){
            return{
                
            }
        },
        methods: {
            
        }
    }
    
</script>

<!-- :style="{'background-image': `url('${imgPath}')`}" -->

<template>
    <div id="header-comp"> 
        <div class="container">

        </div>
    </div>
</template>

<style scoped lang="scss">
    #header-comp{
        height: 600px;
        background-image: url("/img/home-slider-62528242.jpg");
        background-size: cover;
    }
</style>