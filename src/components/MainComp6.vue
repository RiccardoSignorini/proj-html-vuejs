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
                    {
                        img: "/img/blog-post-332773904-600x362.jpg",
                        title: "How We Manage Large Construction Projects",
                        date: "December 7th, 2015",
                        text: "Technology is Here to Stay Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptas sapiente reprehenderit voluptates, impedit suscipit ut voluptate illum."
                    },
                    {
                        img: "/img/blog-post-92486644-600x362.jpg",
                        title: "Future proofing a modern home",
                        date: "December 6th, 2015",
                        text: "Technology is Here to Stay Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptas sapiente reprehenderit voluptates, impedit suscipit ut voluptate illum."
                    }
                ]
            }
        }
    }
</script>

<template>
    <div id="main-sixth" class="d-flex align-items-center">
        <div class="container py-4">
            <!-- PARTE TITOLO -->
            <div id="title" class="text-center">
                <h3 class="py-2">Latest News</h3>
                <hr>
                <p class="py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptas sapiente reprehenderit voluptates, impedit suscipit ut voluptate illum.</p>    
            </div>
            <div class="container px-4 d-flex justify-content-center">
                <!-- CARD SINGOLA CICLATA -->
                <div class="card mx-3" v-for="(elem, index) in latestNews" :key="index">
                    <img :src="elem.img" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ elem.title }}</h5>
                        <span>{{ elem.date }}</span>
                        <hr>
                        <p class="card-text">{{ elem.text }}</p>
                    </div>
                </div>
            </div>
            <div id="foot-sixth" class="my-4 d-flex align-items-center justify-content-center">
                <hr>
                <a href="#">VIEW ALL PRODUCTS</a>
                <hr>
            </div>    
        </div>
    </div>
</template>

<style scoped lang="scss">
    #main-sixth{
        height: 700px;
        background-color: #f7f7f7;

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

        .card{
            width: 300px;

            span{
                font-size: 10px;
            }
        }

        #foot-sixth{

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
                background-color: white;
                height: 1px;
                width: 200px;
            }
        }
    }
</style>