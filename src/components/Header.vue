<script>
    export default{
        name: "Header",

        data(){
            return{
                link: ["HOME", "ABOUT", "SERVICES", "WORK", "ARTICLES"]
            }
        }
    }
    
</script>

<template>
    <div id="header" class="container d-flex justify-content-between align-items-center">
        <div>
            <img src="/img/construction_logo.png" alt="">
        </div>

        <div class="d-flex justify-content-center align-items-center">
            <ul class="d-flex">
                <li v-for="(elem, index) in link" :key="index" class="mx-2">
                    <a href="#">{{ elem }}</a>
                </li>
            </ul>
            <button class="px-4 py-1 mx-3">GET QUOTE</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #header{
        height: 80px;

        img{
            height: 50px;
        }
        
        li{
            list-style-type: none;

            a{
                text-decoration: none;
                color: black;
            }
        }

        button{
            background-color: #fed23f;
            border: #fed23f;
        }
    }
</style>