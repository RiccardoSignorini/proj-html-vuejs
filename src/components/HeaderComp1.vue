<script>
    export default{
        name: "HeaderComp1",
        props: {
            elem: String
        },

        data(){
            return{
                
            }
        },
        methods: {
            
        }
    }
    
</script>

<template>
    <div id="header-comp" class="d-flex text-center align-items-center" :style="{'background-image': `url('${elem.imgPath}')`}"> 
        <div class="container">
            <div class="my-4">
                <h1 class="text-light">{{ elem.title }}</h1>
                <p id="color-ye">{{ elem.text }}</p>
            </div>
            <div class="my-4" :class="(elem.button) ? '' : 'd-none'">
                <button id="color-black" class="px-4 py-2 mx-2">EXPLORE RECENT WORK</button>
                <button id="color-yellow" class="px-4 py-2 mx-2">GET A QUOTE TODAY</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #header-comp{
        height: 600px;
        background-size: cover;

        #color-ye{
            color: #fed23f;
        }

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