<template>
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the Home page!</p>
    <router-link to="/customer">Go to Customer Page</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent'
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
