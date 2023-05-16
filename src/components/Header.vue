<script>
    import HeaderComp1 from "./HeaderComp1.vue"

    export default{
        name: "Header",
        components: {
            HeaderComp1
        },

        data(){
            return{
                link: [
                    {
                        name: "HOME",
                        selected: true
                    },
                    {
                        name: "ABOUT",
                        selected: false
                    },
                    {
                        name: "SERVICES",
                        selected: false
                    },
                    {
                        name: "WORK",
                        selected: false
                    },
                    {
                        name: "ARTICLES",
                        selected: false
                    }
                ]
            }
        },
        methods: {
            // FUNZIONE CAMBIO SELECTED AL CLICK DEI LINK
            click(index){
                this.link.forEach((elem, i) => {
                    if (index === i) {
                        elem.selected = true;
                    } else {
                        elem.selected = false;
                    }
                });
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
                <li v-for="(elem, index) in link" :key="index" class="mx-2" @click="click(index)">
                    <a href="#" :class="(elem.selected==true) ? 'active' : ' ' ">{{ elem.name }}</a>
                </li>
            </ul>
            <button class="px-5 py-2 mx-3">GET QUOTE</button>
        </div>
    </div>
    <HeaderComp1/>
</template>

<style scoped lang="scss">
    #header{
        height: 100px;

        img{
            height: 50px;
        }

        ul{
            margin: 0 auto !important;

            li{
                list-style-type: none;

                a{
                    text-decoration: none;
                    color: black;
                }

                a:hover{
                    color: #fed23f;
                    opacity: 0.6;
                }

                .active{
                    color: #fed23f !important;
                }

                .active:hover{
                    opacity: 1;
                }
            }    
        }

        

        button{
            background-color: #fed23f;
            border: 0;
        }

        button:hover{
            color: white;
        }
    }
</style>