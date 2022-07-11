<template>
    <div class="d-flex flex-wrap bg-light">
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
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
            </select>
        </div>
        <div>
            <select v-model="bathrooms">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
            </select>
        </div>
        <div>
            <select v-model="price">
                <option value="3000">0-3000</option>
                <option value="5000">3000 - 7000</option>
                <option value="7000">7000 - more</option>
            </select>
        </div>
    </div>
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
