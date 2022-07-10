<template>
    <div id="header" 
    :class="{headerBgColor: applyStyle}" class="d-flex flex-wrap py-3 position-sticky top-0 w-100 mb-5">
        <router-link class="nav-link">Properties Listing</router-link>
        <router-link class="nav-link">Admin</router-link>  
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isScrolled: false,
                applyStyle: false,
            }
        },
        methods: {
            handleScroll() {
                this.isScrolled = (window.scrollY > 10);
                if(this.isScrolled) {
                    this.applyStyle = true;
                }else {
                    this.applyStyle = false;
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        }
    }
</script>