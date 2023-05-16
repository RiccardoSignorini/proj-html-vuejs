<script>
    export default{
        name: "HeaderComp2",
    }
    
</script>

<template>
    <div id="header-comp2" class="d-flex align-items-center">
        <div class="container text-center">
            <h2>Do You Have A Construction Project We Can Help With?</h2>
            <div class="position-relative d-flex justify-content-center">
                <button class="position-absolute px-4 py-2">GET A FREE QUOTE</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #header-comp2{
        height: 150px;
        background-color: #fed23f;

        h2{
            margin: 0 auto;
        }

        button{
            bottom: -80px;
            border: 2px solid white;
            background-color: #31312f;
            color: white;
        }

        button:hover{
            bottom: -80px;
            border: 2px solid black;
            background-color: white;
            color: black;
        }
    }
</style>