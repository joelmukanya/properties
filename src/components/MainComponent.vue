<template>
    <div class="container-md min-vh-100 my-3">
        <h2 class="display-2 text-center"> {{ title }}</h2>
        <div class="row d-flex flex-wrap justify-content-around">
            <div 
                v-for="(property, index) in properties" :key="index"  class="card my-2" 
                style="width: 18rem;">
                <img :src="property.picture" class="card-img-top img-fluid" :alt="property.type">
                <div class="card-body">
                    <h5 class="card-title">{{property.type}} at {{property.location}}</h5>
                    <p class="card-text">
                    Address: {{property.address}}
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'JT Housing',
                properties: [],
            }
        },
        async mounted() {
            // Making use of async 
            let res = await fetch('http://localhost:3000/properties');
            let data = await res.json(); 
            this.properties = data;
        }
    }
</script>