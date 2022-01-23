<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCart
        v-for="(product, index) in inventory.slice(0,6)"
        :key="product.id"
        :index="index"
        :product="product"
        :addToCart="addToCart"
        :remove="removeItem"
        class="card"
      />
    </div>
  </main>
</template>

<script>
import ProductCart from '../components/ProductCart.vue';

export default {
  name: 'Products',
  props: ['inventory', 'remove', 'addToCart'],
  components: {
    ProductCart,
  },
};

</script>
