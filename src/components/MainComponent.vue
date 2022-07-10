<template>
  <router-view/>
</template>

<script>
import PropertyListing from './PropertyListing.vue'
import AdminComponent from './AdminComponent.vue'

export default {
    components: [
        PropertyListing,
        AdminComponent
    ]
}
</script>

<style>

</style>