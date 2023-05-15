<!-- PARTE PARTNERS -->

<script>
    export default{
        name: "MainComp7",
        data(){
            return{
                partnersImg: [
                    "/img/home-logo11-219096700-320x202.png",
                    "/img/home-logo10-219096700-320x202.png",
                    "/img/home-logo2-219096700-320x202.png",
                    "/img/home-logo1-219096700-320x202.png",
                    "/img/home-logo9-219096700-320x202.png",
            ]
            }
        }
    }
</script>

<template>
    <div id="main-seventh" class="d-flex align-items-center text-center">
        <div class="container py-4">
            <!-- PARTE TITOLO -->
            <div id="title">
                <h3 class="py-2">Trusted Partners</h3>
                <hr>
                <p class="py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptas sapiente reprehenderit voluptates, impedit suscipit ut voluptate illum.</p>    
            </div>
            <div>
                <img v-for="(elem,index) in partnersImg" :key="index" :src="elem" alt="">
            </div>    
        </div>
    </div>
</template>

<style scoped lang="scss">
    #main-seventh{
        height: 400px;

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
            width: 180px;
            margin: 0 15px;
        }
    }
</style>