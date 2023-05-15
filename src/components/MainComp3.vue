<!-- PARTE IMMAGINI PROGETTI -->

<script>
    export default{
        name: "MainComp3",
        data(){
            return{
                
            }
        }
    }
</script>

<template>
    <div id="main-third">
        <div class="container text-center my-4">
            <!-- PARTE TITOLO -->
            <div id="title">
                <h3 class="py-2">Our Core Vlaues</h3>
                <hr>
                <p class="py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptas sapiente reprehenderit voluptates, impedit suscipit ut voluptate illum.</p>    
            </div>
            <!-- PARTE IMMAGINI -->
            <div class="my-4">
                <img src="/img/project2-featured-15013609-800x800.jpg" alt="">
                <img src="/img/project1-featured-294276386-800x800.jpg" alt="">
                <img src="/img/project3-featured-189023420-800x800.jpg" alt="">
            </div>
            <div id="foot-third" class="my-4 d-flex align-items-center justify-content-center">
                <hr>
                <a href="#">VIEW ALL PRODUCTS</a>
                <hr>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #main-third{
        height: 600px;

        #title{
            width: 550px;
            margin: 0 auto;

            hr{
                width: 180px;
                background-color: #fed23f;
                height: 2px;
                opacity: 1;
                border: 0;
                margin: 0 auto;
            }    
        } 
        
        img{
            width: 300px;
            margin: 0 15px;
        }

        #foot-third{

            a{
                text-decoration: none;
                color: black;
                opacity: 0.6;
                font-size: 13px;
                margin: 0 10px;
            }

            a:hover{
                opacity: 1;
            }

            hr{
                background-color: black;
                height: 1px;
                width: 200px;
                opacity: 0.6;
            }
        }
    }
</style>