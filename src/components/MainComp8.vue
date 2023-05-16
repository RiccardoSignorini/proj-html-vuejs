<!-- PARTE FINALE MAIN -->

<script>
    export default{
        name: "MainComp8",
        data(){
            return{
                
            }
        }
    }
</script>

<template>
    <div id="main-eighth" class="d-flex align-items-center">
        <div class="container py-4 d-flex align-items-center justify-content-center">
            <!-- PARTE TITOLO -->
            <div id="title" class="mx-2">
                <h3 class="py-2">Building Inspiring Spaces</h3>
                <hr>
                <p class="py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptas sapiente reprehenderit voluptates, impedit suscipit ut voluptate illum.</p>    
            </div>
            <div id="button-side" class="text-center mx-2">
                <button class="px-5 py-2 mx-3 my-2">GET FREE QUOTE</button>
                <p>Only takes a few seconds!</p>
            </div>    
        </div>
    </div>
</template>

<style scoped lang="scss">
    #main-eighth{
        height: 450px;
        background-image: url("/img/about-call-to-action-57862405.jpg");
        background-position-y: bottom;
        background-size: cover;
        color: white;
        

        #title{
            width: 550px;

            hr{
                width: 180px;
                background-color: #fed23f;
                height: 2px;
                opacity: 1;
                border: 0;
            }
        }

        #button-side{

            button{
                background-color: #fed23f;
                border: 0;
                color: black;
            }
            
            button:hover{
                color: white;
            }
            
            p{
                font-size: 12px;
            }
        }

        
    }
</style>