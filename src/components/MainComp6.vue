<!-- PARTE ULTIME NEWS -->

<script>
    export default{
        name: "MainComp6",
        data(){
            return{
                latestNews: [
                    {
                        img: "/img/blog-post-134132600-600x362.jpg",
                        title: "Redeveloping Florida's Remote Southern Coast",
                        date: "December 7th, 2015",
                        text: "Technology is Here to Stay Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptas sapiente reprehenderit voluptates, impedit suscipit ut voluptate illum."
                    },
                ]
            }
        }
    }
</script>

<template>
    <div id="main-sixth" class="d-flex align-items-center">
        <div class="container text-center py-4">
            <!-- PARTE TITOLO -->
            <div id="title">
                <h3 class="py-2">Latest News</h3>
                <hr>
                <p class="py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptas sapiente reprehenderit voluptates, impedit suscipit ut voluptate illum.</p>    
            </div>
        </div>
        <div class="container px-4 d-flex justify-content-center">
            <!-- CARD SINGOLA CICLATA -->
            <!-- <div class="card text-center mx-3" v-for="(elem, index) in societyNumbers" :key="index">
                <img src="" class="card-img-top" alt="">
                <div class="card-body">
                    <h3 class="card-title">{{ elem.num }}</h3>
                    <span></span>
                    <hr>
                    <p class="card-text">{{ elem.text }}</p>
                </div>
            </div> -->
        </div>
    </div>
</template>

<style scoped lang="scss">
    #main-sixth{
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
    }
</style>