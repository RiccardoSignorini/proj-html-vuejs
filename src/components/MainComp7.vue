<!-- PARTE PARTNERS -->

<script>
    export default{
        name: "MainComp7",
        data(){
            return{
                latestNews: []
            }
        }
    }
</script>

<template>
    <div id="main-seventh" class="d-flex align-items-center">
        <div class="container py-4">
            <!-- PARTE TITOLO -->
            <div id="title" class="text-center">
                <h3 class="py-2">Latest News</h3>
                <hr>
                <p class="py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptas sapiente reprehenderit voluptates, impedit suscipit ut voluptate illum.</p>    
            </div>
                
        </div>
    </div>
</template>

<style scoped lang="scss">
    #main-seventh{
        height: 500px;

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
    }
</style>