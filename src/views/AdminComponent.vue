<template>
    <div class="container-md min-vh-100 my-3">
        <h2 class="display-2 text-center">Admin Page</h2>
        <table class="table table-sucess table-hover table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Type</th>
                    <th scope="col">Location</th>
                    <th scope="col">Address</th>
                    <th scope="col">Pictures</th>
                    <th scope="col">Number of Bedrooms</th>
                    <th scope="col">Number of Bathrooms</th>
                    <th scope="col">Garage</th>
                    <th scope="col">Price</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody v-if="properties.length">
                <tr v-for="(property, index) in properties" :key="index">
                    <td>{{property.id}}</td>
                    <td>{{property.type}}</td>
                    <td>{{property.location}}</td>
                    <td>{{property.address}}</td>
                    <td>
                        <img :src="property.picture" :alt="property.type" class="img-fluid"/>
                    </td>
                    <td>{{property.bedrooms}}</td>
                    <td>{{property.bathrooms}}</td>
                    <td>{{property.garage}}</td>
                    <td>R{{property.price}}</td>
                    <td>
                        <span>Edit</span>
                    </td>
                    <td>
                        <span>Delete</span>
                    </td>
                </tr>
            </tbody>
            <p class="lead text-center" v-else>
                Sorry, we are still loading the data....
            </p>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            properties: []
        }
    },
        async mounted() {
            // Making use of async 
            let res = await fetch('http://localhost:3000/properties').
            catch(e => console.log(e.message));
            let data = await res.json(); 
            this.properties = data;
        }
}
</script>
