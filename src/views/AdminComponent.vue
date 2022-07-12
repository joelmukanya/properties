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

                        <i class="bi bi-pencil-square" 
                        data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        <div class="modal" tabindex="-1" id="exampleModal">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Edit</h5>
                                        <button type="button" class="btn btn-secondary rounded ms-auto" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    <div class="modal-body">
                                        <form class="container">
                                            <div class="row">
                                                <input type="text" 
                                                placeholder="Property Type"/>
                                            </div>
                                            <div class="row my-3">
                                                <input type="text" 
                                                placeholder="Property Location"/>
                                            </div>
                                            <div class="row">
                                                <input type="text" 
                                                placeholder="Address"/>
                                            </div>
                                            <div class="row my-3">
                                                <input type="file" 
                                                placeholder="Picture"/>
                                            </div>
                                            <div class="row">
                                                <input type="number" 
                                                placeholder="Number of bedrooms"/>
                                            </div>
                                            <div class="row my-3">
                                                <input type="number" 
                                                placeholder="Number of bathrooms"/>
                                            </div>
                                            <div class="row ">
                                                <input type="number" 
                                                placeholder="Garage"/>
                                            </div>
                                            <div class="row my-3">
                                                <input type="number" 
                                                placeholder="Price"/>
                                            </div>
                                            <div class="row">
                                                <button class="btn btn-primary">Submit</button>
                                            </div>
                                        </form>     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span><i class="bi bi-x-circle-fill" @click="deleteItem(index)"></i></span>
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
    methods: {
        editItem() {

        },
        deleteItem(id) {
            if(id > -1) {
                this.properties.splice(id, 1);
            }
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
