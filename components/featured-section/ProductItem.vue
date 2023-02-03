<template>
    <div>
        <img src="" alt="">
        <div>
            <h3>{{ product.title }}</h3>
            <div>
                <span>{{ product }}</span>
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
