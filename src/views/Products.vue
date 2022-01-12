<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <router-view/>
      <ProductCart
        v-for="(product) in inventory.slice(0, 6)" :key="product.id"
        />
    </div>
  </main>
</template>

<script>
import ProductCart from '../components/ProductCart.vue';

export default {
  name: 'Products',
  props: ['food', 'invetory'],
  components: [ProductCart],
};

</script>
