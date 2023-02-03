<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 1" :key="item">
            <TabProducts />
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    import TabProducts from '@/components/featured-section/TabProducts.vue';

    export default {
        components: {
            TabProducts,
        },
    };
</script>
