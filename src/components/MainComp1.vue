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
    <div id="mainFirst">
        <div class="container">
            <div>
                
            </div>
            <!-- CARD SINGOLA CICLATA -->
            <div class="d-flex justify-content-between">
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
    .card{
        font-size: 13px;
        width: 250px;
        background-color: #ededed;
        border: 0 !important;
    }
</style>