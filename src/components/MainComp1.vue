<!-- PARTE PRESENTAZIONE AZIENDA (COSTRUZIONI MODERNE) -->

<script>
    export default{
        name: "MainComp1",
        data(){
            return{
                modernConstruction: [
                    {
                        icon: ["fa-regular", "building"],
                        title: "Buildings",
                        text: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur"
                    },
                    {
                        icon: ["fa-solid", "arrows-rotate"],
                        title: "Renovate",
                        text: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur"
                    },
                    {
                        icon: ["fa-solid", "house-chimney"],
                        title: "Construct",
                        text: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur"
                    },
                    {
                        icon: ["fa-solid", "truck"],
                        title: "Exclusive",
                        text: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur"
                    }
                ]
            }
        }
    }
</script>

<template>
    <div id="main-first">
        <div class="container">
            <!-- PARTE TITOLO -->
            <div class="text-center">
                <h3 class="py-2">Specialist In Modern Construction</h3>
                <hr>
                <p class="py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptas sapiente reprehenderit voluptates, impedit suscipit ut voluptate illum, quos dolorum numquam quaerat tempore labore ab id fugit optio illo mollitia.</p>    
            </div>
            <!-- CARD SINGOLA CICLATA -->
            <div class="d-flex justify-content-between my-4">
                <div class="card text-center" v-for="(elem, index) in modernConstruction" :key="index">
                    <font-awesome-icon :icon="elem.icon" size="2xl" class="my-2"/>
                    <div class="card-body">
                        <h4 class="card-title">{{ elem.title }}</h4>
                        <p class="card-text">{{ elem.text }}</p>
                    </div>
                </div>    
            </div>
            
        </div>
    </div>
</template>

<style scoped lang="scss">
    #main-first{
        height: 500px;

        hr{
            width: 180px;
            background-color: #fed23f;
            height: 2px;
            opacity: 1;
            border: 0;
            margin: 0 auto;
        }
   
        .card{
            font-size: 13px;
            width: 250px;
            background-color: #ededed;
            border: 0 !important;
        }
    }
   
</style>