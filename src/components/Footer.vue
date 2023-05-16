<script>
    export default{
        name: "Footer"
    }
</script>

<template>
    <div id="footer">
        <div class="container row">
            <!-- PRIMA COLONNA -->
            <div id="first-comp" class="col-lg-4 text-start">
                <img src="/img/footer-logo.png" alt="">
                <p class="my-4">We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</p>
                <button class="px-5 py-2">LEARN MORE</button>
            </div>
            
            <!-- SECONDA COLONNA -->
            <div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #footer{
        background-color: #31312f;
        height: 600px;

        #first-comp{

            button{
                background-color: #fed23f;
                border: 0;
            }

            p{
                color: #6d6d6d;
            }
        }
    }
</style>