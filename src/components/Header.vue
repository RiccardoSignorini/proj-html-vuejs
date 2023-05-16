<script>
    import HeaderComp1 from "./HeaderComp1.vue"
    import HeaderComp2 from "./HeaderComp2.vue"

    export default{
        name: "Header",
        components: {
            HeaderComp1,
            HeaderComp2
        },

        data(){
            return{
                link: [
                    {
                        name: "HOME",
                        selected: true,
                        imgPath: "/img/home-slider-62528242.jpg",
                        title: "BUILDING INSPIRING SPACES",
                        text: "We Build Inspiring Residential & Commercial Space",
                        button: true
                    },
                    {
                        name: "ABOUT",
                        selected: false,
                        imgPath: "/img/about-150120215.jpg",
                        title: "CONSTRUCTION WITH A DIFFERENCE",
                        text: "Avada Construction Puts The Focus Back On Exceptional Service"
                    },
                    {
                        name: "SERVICES",
                        selected: false,
                        imgPath: "/img/services-banner-51526282.jpg",
                        title: "CONSTRUCTION SERVICES",
                        text: "We Build Inspiring Residential & Commercial Spaces"
                    },
                    {
                        name: "WORK",
                        selected: false,
                        imgPath: "/img/work-88948309.jpg",
                        title: "OUR RECENT WORK",
                        text: "Inspired By Modern Living & Cutting-Edge Construction Techniques"
                    },
                    {
                        name: "ARTICLES",
                        selected: false,
                        imgPath: "/img/latest-news-93376240.jpg",
                        title: "CONSTRUCTION ARTICLES",
                        text: "Thought Leaders In Modern Residential & Commercial Construction"
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
            },

            // FUNZIONE PER IL CONTROLLO DELL'OBJ E IL CAMBIO IMG
            backElem() {
                for(let i=0; i<this.link.length; i++){
                    if(this.link[i].selected == true){
                        return this.link[i]
                    }
                }
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
    <HeaderComp1 :elem="backElem()"/>
    <HeaderComp2/>
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
            background-color: #31312f;
        }
    }
</style>