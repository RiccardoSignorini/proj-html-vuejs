<!-- PARTE TESTIMONIALS -->

<script>
    export default{
        name: "MainComp5",
        data(){
            return{
                
            }
        }
    }
</script>

<template>
    <div id="main-fifth" class="d-flex align-items-center">
        <div class="container text-center py-4">
            <!-- PARTE TITOLO -->
            <div>
                <h3 class="py-2">Explore Recent Work</h3>
                <hr>
                <img src="/img/home-testimonial-113165296.jpg" alt="" class="my-4 rounded-circle">
                <p>"No man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property."</p>
                <h6 class="my-4">HARRY SMITH - NEW HOME OWNER</h6>   
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #main-fifth{
        background-image: url("/img/home-parallax-144609983.jpg");
        background-size: cover;
        background-position: 100%;
        height: 600px;
        color: white;

        hr{
            width: 180px;
            background-color: #fed23f;
            height: 2px;
            opacity: 1;
            border: 0;
            margin: 0 auto;
        }

        p{
            width: 500px;
            margin: 0 auto;
        }
    }
</style>