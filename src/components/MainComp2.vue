<!-- PARTE NUMERI AZIENDALI -->

<script>
    export default{
        name: "MainComp2",
        data(){
            return{
                societyNumbers: [
                    {
                        icon: ["fa-solid", "suitcase"],
                        num: "3534",
                        text: "PLANNING APPLICATION"
                    },
                    {
                        icon: ["fa-regular", "building"],
                        num: "896",
                        text: "COMPLETED PROJECTS"
                    },
                    {
                        icon: ["fa-solid", "users"],
                        num: "172",
                        text: "TRAINED PROFESSIONALS"
                    },
                    {
                        icon: ["fa-solid", "globe"],
                        num: "19",
                        text: "INTERNATIONAL OFFICES"
                    }
                ]
            }
        }
    }
</script>

<template>
    <div id="main-second" class="d-flex align-items-center">
        <div class="container px-4 d-flex justify-content-center">
            <!-- CARD SINGOLA CICLATA -->
            <div class="card text-center mx-3" v-for="(elem, index) in societyNumbers" :key="index">
                <font-awesome-icon :icon="elem.icon" size="2xl" class="my-2"/>
                <div class="card-body">
                    <h2 class="card-title">{{ elem.num }}</h2>
                    <p class="card-text">{{ elem.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
   #main-second{
        background-image: url("/img/home-244125289.jpg");
        background-size: cover;
        height: 600px;

        .card{
            border: 0 !important;
            background-color: transparent;
            color: #fed23f;
            font-size: 35px;

            h2{
                font-size: 60px;
            }

            p{
                color: white !important;
                font-size: 16px;
            }
        }
   }
</style>