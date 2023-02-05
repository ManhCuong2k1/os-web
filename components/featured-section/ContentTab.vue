<template>
    <div class="grid grid-cols-6 gap-4 bg-gray-10 md:p-12 sm:p-4 px-0 py-4 lg:rounded-b-lg">
        <div class="lg:col-span-2 col-span-6">
            <h3 class="md:text-2xl text-lg text-black md:mb-8 mb-4">
                Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils.
            </h3>
            <ul class="md:text-xl text-[13px] font-semibold md:mb-8 mb-4 md:block grid grid-cols-2" style="list-style: inside;">
                <li>MECHANICAL PENCILS</li>
                <li> ARCHITECT'S CHOICE</li>
                <li>EXECUTIVE PENCILS</li>
                <li> ENGRAVABLE PENCILS</li>
            </ul>
            <el-button type="warning" class="uppercase font-semibold bg-[#F4B840] lg:block hidden">
                Shop all
            </el-button>
        </div>
        <div class="lg:col-span-4 col-span-6">
            <div class="bg-white rounded-lg p-[4px]">
                <div class="flex md:pl-4 pl-2 rounded-lg lg:bg-white bg-gray-10">
                    <div class="lg:block flex items-start text-yellow-100 text-4xl font-bold text-center py-4 md:w-1/4 sm:w-2/5 w-5/12">
                        25% <span class="lg:normal-case lg:m-0 mt-2  uppercase lg:text-4xl text-xl">off</span>
                    </div>
                    <div class="md:text-3xl text-lg font-light rounded-r-md bg-gray-10 flex items-center justify-center md:w-3/4 sm:w-3/5 w-7/12">
                        Offer Applicable on All Our Pencils
                    </div>
                </div>
            </div>
            <div class="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-4">
                <ProductItem
                    v-for="product in (widthBrowser > 640 ? products : products.slice(0, 2))"
                    :key="product.id"
                    :product="product"
                />
            </div>
            <div class="lg:hidden block mt-4 text-center">
                <el-button type="warning" class="uppercase font-semibold bg-[#F4B840]">
                    Shop all
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductItem from '@/components/featured-section/ProductItem.vue';

    export default {
        components: {
            ProductItem,
        },

        data() {
            return {
                widthBrowser: 0,
                products: [
                    {
                        id: 1,
                        title: 'Aero Mechanical Pencil',
                        price: '$125.00',
                        discount: '$99.00',
                        image: '/images/products/pen-3.png',
                    },
                    {
                        id: 2,
                        title: 'Aero Mechanical Pencil',
                        price: '$99.00',
                        discount: '$75.00',
                        image: '/images/products/pen-1.png',
                    },
                    {
                        id: 3,
                        title: 'Aero Mechanical Pencil',
                        price: '$70.00',
                        discount: '$45.00',
                        image: '/images/products/pen-2.png',
                    },
                ],
            };
        },

        mounted() {
            this.widthBrowser = window.innerWidth;
        },
    };
</script>
