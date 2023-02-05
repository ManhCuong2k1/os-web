<template>
    <div class="bg-white rounded-lg py-8 cursor-pointer">
        <img :src="product.image" :alt="product.title" class="w-[180px] h-[210px] mx-auto object-cover">
        <div class="mt-4 text-center">
            <h3 class="text-base font-medium">
                {{ product.title }}
            </h3>
            <div>
                <span class="text-lg font-semibold mr-2">{{ product.discount }}</span>
                <span class="text-base text-gray-70 line-through">{{ product.price }}</span>
            </div>
        </div>
    </div>
</template>

  <script>
    export default {
        props: {
            product: {
                type: Object,
                default: () => {},
            },
        },
    };
  </script>
