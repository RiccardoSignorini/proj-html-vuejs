<!-- PARTE VALORI FONDAMENTALI -->

<script>
    export default{
        name: "MainComp4",
        data(){
            return{
                coreValues: [
                    {
                        icon: ["fa-regular", "building"],
                        color: "aqua-green",
                        title: "Great Services",
                        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia."
                    },
                    {
                        icon: ["fa-solid", "gear"],
                        color: "blue",
                        title: "Highest Standards",
                        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia."
                    },
                    {
                        icon: ["fa-solid", "users"],
                        color: "orange",
                        title: "Professional Team",
                        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia."
                    },
                    {
                        icon: ["fa-regular", "lightbulb"],
                        color: "light-green",
                        title: "Creative Solutions",
                        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia."
                    }
                ]
            }
        }
    }
</script>

<template>
    <div id="main-fourth">
        <div class="container text-center py-4">
            <!-- PARTE TITOLO -->
            <div id="title">
                <h3 class="py-2">Our Core Vlaues</h3>
                <hr>
                <p class="py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptas sapiente reprehenderit voluptates, impedit suscipit ut voluptate illum.</p>    
            </div>
            <div class="d-flex">
                <!-- CARD SINGOLA CICLATA -->
                <div class="card text-center mx-3" v-for="(elem, index) in coreValues" :key="index">
                    <font-awesome-icon :icon="elem.icon" size="2xl" class="my-2 icon" :class="elem.color"/>
                    <div class="card-body">
                        <p class="card-text">{{ elem.title }}</p>
                        <hr>
                        <p class="card-text">{{ elem.text }}</p>
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #main-fourth{
        height: 600px;
        background-color: #f7f7f7;

        #title{
            width: 550px;
            margin: 0 auto;
        }

        hr{
            width: 180px;
            background-color: #fed23f;
            height: 2px;
            opacity: 1;
            border: 0;
            margin: 0 auto;
        }
        
        .card{
            background-color: #f7f7f7;
            border: 0;

            .icon{
                display: inline;
                width: 50px;
                height: 50px;
                padding: 20px;
                border-radius: 100%;
                color: white;
                margin: 0 auto;
            }

            .aqua-green{
                background-color: #4ea4a5;
            }

            .blue{
                background-color: #045287;
            }

            .orange{
                background-color: #fe6f1d;
            }

            .light-green{
                background-color: #aacd54;
            }

            .card-body{

                hr{
                    width: 30px;
                    margin: 0 auto;
                    padding: 0;
                    height: 1px;
                    background-color: black;
                }
            }    
        }
        
    }
</style>