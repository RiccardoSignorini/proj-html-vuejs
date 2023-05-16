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
    <div id="footer">
        <div class="container row p-5">
            <!-- PRIMA COLONNA -->
            <div id="first-comp" class="col-lg-4 text-start">
                <img src="/img/footer-logo.png" alt="">
                <p class="my-4">We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</p>
                <button class="px-5 py-2">LEARN MORE</button>
            </div>

            <!-- SECONDA COLONNA -->
            <div id="second-comp" class="col-lg-4">
                <h6 class="my-4">LATEST TWEETS</h6>
                <div class="">
                    <img src="/img/tweet-avada.png" class="" alt="">
                </div>
            </div>

            <!-- TERZA COLONNA -->
            <div id="thirth-comp" class="col-lg-4">
                <h6 class="my-4">CONTACT US TODAY</h6>
                <div>
                    <ul>
                        <li>Corporate Location</li>
                        <li>1600 Amphitheatre Parkway</li>
                        <li>London WC1 1BA</li>
                    </ul>
                    <ul>
                        <li>Residential Location</li>
                        <li>9521 Broadsberry Avenue</li>
                        <li>Paddington RC7 9ZA</li>
                    </ul>
                    <ul>
                        <li>1.800.458.556 / 1.800.532.2112</li>
                    </ul>
                    <ul>
                        <li>info@your-domain.com</li>
                    </ul>
                    <ul>
                        <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
                    </ul>
                    <ul>
                        <li>Saturday – Sunday: 9:00 AM – 12:00 PM</li>
                    </ul>
                </div>
            </div>

            <!-- QUARTA COLONNA -->
            <div id="fourth-comp" class="col-lg-4">
                <h6 class="my-4">FIND US</h6>
                <div>
                    
                </div>
            </div>
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
                }    
            }
            
        }
    }
</style>