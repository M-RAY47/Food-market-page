<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <div @click="toggleSideBar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x" />
      <span>Cart ({{ totalItems }})</span>
    </div>
  </header>
  <router-view :inventory="inventory" />
  <SideBar
    v-if="showSidebar"
    :toggle="toggleSideBar"
    :cart="cart"
    :inventory="inventory"
    :totalItems="totalItems"
  />
</template>

<script>
import SideBar from './components/SideBar.vue';
import food from './food.json';

export default {
  components: {
    SideBar,
  },
  data() {
    return {
      showSideBar: false,
      inventory: food,
      cart: {},
    };
  },
  methods: {
    addToCart(name, index) {
      if (!this.cart[name]) this.cart[name] = 0;
      this.cart[name] += this.inventory[index].quantity;
      this.inventory[index].quantity = 0;
    },
    toggleSideBar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};

</script>
