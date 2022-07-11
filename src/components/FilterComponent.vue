<template>
    <!-- <div class="d-flex flex-wrap bg-gradient">
        <div>
            <select v-model="types">
                <option value="House">House</option>
                <option value="Hotel">Hotel</option>
                <option value="Residential">Residential</option>
                <option value="Mansion">Mansion</option>
                <option value="Bachelor">Bachelor</option>
            </select>
        </div>
        <div>
            <select v-model="location">
                <option value="Plumstead">Plumstead</option>
                <option value="Cape Town">Cape Town</option>
                <option value="Sea Point">Sea Point</option>
                <option value="Strand">Strand</option>
            </select>
        </div>
        <div>
            <select v-model="bedrooms">
                <option value="house">House</option>
                <option value="house">House</option>
                <option value="house">House</option>
            </select>
        </div>
        <div>
            <select v-model="bathrooms">
                <option value="house">House</option>
                <option value="house">House</option>
                <option value="house">House</option>
            </select>
        </div>
        <div>
            <select v-model="price">
                <option value="house">House</option>
                <option value="house">House</option>
                <option value="house">House</option>
            </select>
        </div>
    </div> -->
    <p>Hello There; this is my filter component</p>
</template>

<script>
export default {
    data() {
        return {
            types: '',
            location: '',
            bedrooms: null,
            bathrooms: null, 
            price: null
        }
    }
}
</script>
