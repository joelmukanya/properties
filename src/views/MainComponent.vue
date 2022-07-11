<template>
  <FilterComponent/>
  <router-view/>
</template>

<script>
import PropertyListing from './PropertyListing.vue'
import AdminComponent from './AdminComponent.vue'
import FilterComponent from '@/components/FilterComponent.vue';

export default {
  name: 'MainComponent',
  components: [
      PropertyListing,
      AdminComponent, 
      FilterComponent,
  ]
}
</script>