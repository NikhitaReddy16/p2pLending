
<template>
  <div>
    <div v-if="!isResponse">
      <h2>Add Customer Details</h2>
      <form @submit.prevent="addCustomer">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="customer.name" required>

        <label for="age">Amount:</label>
        <input type="number" id="age" v-model="customer.amount" required>

        <label for="city">Gold:</label>
        <input type="text" id="city" v-model="customer.gold" required>

        <label for="city">Tenure:</label>
        <input type="text" id="city" v-model="customer.tenure" required>

        <button type="submit">Check my Schemes</button>
      </form>
    </div>
    <div v-if="isResponse">
    </div>
  </div>
</template>

<script>

// import axios from 'axios';
export default {
  name: 'AddCustomer',
  data() {
    return {
      isResponse: false,
      customer: {
        name: '',
        amount: null,
        gold: null,
        tenure: null
      },
    };
  },
  methods: {
    async addCustomer() {
      // Emit an event with the customer data to be handled by the parent component
      // const response = await axios.post('https://api.example.com/customers', this.customer);
      const response = 200;
      if(response === 200){
        this.isResponse = true;
      }
      console.log(this.customer.name);
    },
  },
};
</script>