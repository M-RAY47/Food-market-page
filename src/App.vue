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
    <router-link @click="toggleSideBar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalItems }})</span>
    </router-link>
  </header>
  <router-view/>
  <SideBar
    v-if="showSidebar"
    :toggle="toggleSideBar"
    :cart="cart"
    :inventory="inventory"
  />
</template>

<script>
import SideBar from './components/SideBar.vue';

export default {
  components: {
    SideBar,
  },
  data () {
    return {
      showSideBar: false,
    }
  }
};

</script>
