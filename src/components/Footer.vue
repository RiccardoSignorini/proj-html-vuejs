<script>
    export default{
        name: "Footer",

        data(){
            return{
                contact: []
            }
        }
    }
</script>

<template>
    <div id="footer" class="d-flex justify-content-center">
        <div class="container row p-5">
            <!-- PRIMA COLONNA -->
            <div id="first-comp" class="col-lg-3 text-start">
                <img src="/img/footer-logo.png" alt="">
                <p class="my-4">We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</p>
                <button class="px-5 py-2">LEARN MORE</button>
            </div>

            <!-- SECONDA COLONNA -->
            <div id="second-comp" class="col-lg-3">
                <h6 class="my-4">LATEST TWEETS</h6>
                <div class="">
                    <img src="/img/tweet-avada.png" class="" alt="">
                </div>
            </div>

            <!-- TERZA COLONNA -->
            <div id="thirth-comp" class="col-lg-3">
                <h6 class="my-4">CONTACT US TODAY</h6>
                <div>
                    <ul>
                        <!-- PRIMO CON ICONA MONDO -->
                        <li class="d-flex">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-globe" class="icon"/>
                            </div>
                            <div>
                                <p>Corporate Location</p>
                                <p>1600 Amphitheatre Parkway</p>
                                <p>London WC1 1BA</p>
                            </div>
                        </li>
                        <!-- SECONDO CON ICONA CASA -->
                        <li class="d-flex">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-house-chimney" class="icon"/>
                            </div>
                            <div>
                                <p>Residential Location</p>
                                <p>9521 Broadsberry Avenue</p>
                                <p>Paddington RC7 9ZA</p>
                            </div>
                        </li>
                        <!-- TERZO CON ICONA TELEFONO -->
                        <li class="d-flex">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-phone-flip" class="icon"/>
                            </div>
                            <div>
                                <p>1.800.458.556 / 1.800.532.2112</p>
                            </div>
                        </li>
                        <!-- QUARTO CON ICONA POSTA -->
                        <li class="d-flex">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-envelope" class="icon"/>
                            </div>
                            <div>
                                <p>info@your-domain.com</p>
                            </div>
                        </li>
                        <!-- QUINTO CON ICONA OROLOGIO -->
                        <li class="d-flex">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-clock" class="icon"/>
                            </div>
                            <div>
                                <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                            </div>
                        </li>
                        <!-- SESTO CON ICONA OROLOGIO -->
                        <li class="d-flex">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-clock" class="icon"/>
                            </div>
                            <div>
                                <p>Saturday – Sunday: 9:00 AM – 12:00 PM</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- QUARTA COLONNA -->
            <div id="fourth-comp" class="col-lg-3">
                <h6 class="my-4">FIND US</h6>
                <div>
                    <img src="/img/mappa-avada.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- PARTE BASSA FOOTER -->
    <div id="bot-footer" class="align-items-center d-flex justify-content-between px-5">
        <div>
            <p>©COPYRIGHT 2012 - 2023 | AVADA THEME BY THEMEFUSION | ALL RIGHTS RESERVED | POWERED BY WORDPRESS</p>
        </div>
        <div>
            <font-awesome-icon icon="fa-brands fa-facebook-f" class="icon"/>
            <font-awesome-icon icon="fa-brands fa-twitter" class="icon"/>
            <font-awesome-icon icon="fa-brands fa-youtube" class="icon"/>
            <font-awesome-icon icon="fa-brands fa-instagram" class="icon"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #footer{
        background-color: #31312f;
        height: 600px;
        
        h6{
            color: #fed23f;
        }

        #first-comp{

            button{
                background-color: #fed23f;
                border: 0;
            }

            p{
                color: #6d6d6d;
            }
        }

        #second-comp{

            img{
                width: 250px;
            }
        }

        #thirth-comp{

            ul{
                color: #6d6d6d;

                li{
                    list-style-type: none;

                    .icon{
                        margin-right: 10px;
                        margin-left: -25px;
                    }
                }    
            }
        }

        #fourth-comp{
            color: #6d6d6d;

            img{
                width: 250px;
            }
        }
    }

    #bot-footer{
        background-color: black;
        height: 100px;

        p{
            font-size: 14px;
        }

        .icon{
            margin: 0 10px;
        }
    }
</style>