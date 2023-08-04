<template>
  <!-- <div class="background">
    <div class="">
      <h2>Home Page</h2>
      <p>Welcome to the Home page!</p>
      <router-link to="/customer">Go to Customer Page</router-link>
      <router-view></router-view>
    </div>
  </div> -->
  <!-- <div class="bgimg w3-display-container w3-animate-opacity w3-text-white">
    <div class="w3-display-topleft w3-padding-large w3-xlarge">
      Logo
    </div>
    <div class="w3-display-middle">
      <h1 class="w3-jumbo w3-animate-top">COMING SOON</h1>
      <hr class="w3-border-grey" style="margin:auto;width:40%">
      <p class="w3-large w3-center">35 days left</p>
    </div>
    <div class="w3-display-bottomleft w3-padding-large">
      Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
    </div>
  </div> -->
  <div class="background">
    <h1 class="text-1">RUPEEK</h1>
    <p class="text-2">...Now presenting P2P Lending</p>
    <router-link class="text-2" to="/customer">Chose your best lender -> </router-link>
    <br>
    <router-link class="text-2" to="/lender">New Lender OnBoarding -> </router-link>
    <router-view></router-view>
  </div>
  <div>

  </div>
</template>

<script>
export default {
  name: 'HomeComponent'
};
</script>


<style>
/* Optional CSS styling for the cards */

.background {
  padding: 80px 0 85px 0;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  background: hsla(347, 89%, 61%, 1);

  background: linear-gradient(180deg, hsla(347, 89%, 61%, 1) 0%, hsla(242, 42%, 40%, 1) 100%);

  background: -moz-linear-gradient(180deg, hsla(347, 89%, 61%, 1) 0%, hsla(242, 42%, 40%, 1) 100%);

  background: -webkit-linear-gradient(180deg, hsla(347, 89%, 61%, 1) 0%, hsla(242, 42%, 40%, 1) 100%);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f44369", endColorstr="#3e3b92", GradientType=1 );
}

.text-1 {
  color: #fff;
  font-size: 10vmax;
  line-height: 1;
  font-weight: 900;
}

.text-2 {
  align-items: right;
  color: #fff;
  font-size: 2vmax;
  line-height: 1;
  font-weight: 900;
}

</style>
