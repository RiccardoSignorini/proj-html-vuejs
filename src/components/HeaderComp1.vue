<script>
    export default{
        name: "HeaderComp1",

        data(){
            return{
                link: [
                    {
                        name: "HOME",
                        selected: true
                    },
                    {
                        name: "ABOUT",
                        selected: false
                    },
                    {
                        name: "SERVICES",
                        selected: false
                    },
                    {
                        name: "WORK",
                        selected: false
                    },
                    {
                        name: "ARTICLES",
                        selected: false
                    }
                ]
            }
        },
        methods: {
            
        }
    }
    
</script>

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