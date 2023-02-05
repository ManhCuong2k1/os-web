<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 1" :key="item">
            <TabProducts />
        </el-carousel-item>
    </el-carousel> -->
    <div class="mx-1">
        <VueSlickCarousel ref="SliderCarousel" v-bind="settings">
            <TabProducts />
            <GalleryPen />
        </VueSlickCarousel>
    </div>
</template>

<script>
    import TabProducts from '@/components/featured-section/TabProducts.vue';
    import GalleryPen from '@/components/gallery/GalleryPen.vue';
    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';

    export default {
        components: {
            TabProducts,
            VueSlickCarousel,
            GalleryPen,
        },

        data() {
            return {
                settings: {
                    speed: 500,
                    dots: true,
                    infinity: false,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            };
        },
    };
</script>
