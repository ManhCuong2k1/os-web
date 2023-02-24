<template>
    <div class="container mx-auto my-12">
        <Slider />
        <div></div>
    </div>
</template>         

<script>
    import Slider from '@/components/Sliders.vue';

    export default {
        name: 'IndexPage',
        components: {
            Slider,
        },
    };
</script>
