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
    <div id="header-comp" class="d-flex text-center align-items-center"> 
        <div class="container">
            <div class="my-4">
                <h1 class="text-light">BUILDING INSPIRING SPACES</h1>
                <p>We Build Inspiring Residential & Commercial Space</p>
            </div>
            <div class="my-4">
                <button id="color-black" class="px-4 py-2 mx-2">EXPLORE RECENT WORK</button>
                <button id="color-yellow" class="px-4 py-2 mx-2">GET A QUOTE TODAY</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #header-comp{
        height: 600px;
        background-image: url("/img/home-slider-62528242.jpg");
        background-size: cover;

        #color-black{
            background-color: #31312f;
            color: white;
            border: 0;
        }

        #color-black:hover{
            background-color: #fed23f;
            color: black;
        }

        #color-yellow{
            background-color: #fed23f;
            border: 0;
        }

        #color-yellow:hover{
            background-color: #31312f;
            color: white;
        }
    }
</style>