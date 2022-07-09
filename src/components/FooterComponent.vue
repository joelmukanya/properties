<template>
    <div class="d-flex flex-wrap bg-white">
        <aside>
            <h5 class="display-5 lead text-center">
                Copyright &copy; {{ currentDate }}
            </h5>
        </aside>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentDate: new Date().getFullYear()
            }
        }
    }
</script>