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
    <!-- <h1 class="text-1">RUPEEK</h1> -->
    <div class="card-3">
      <img :src="`https://assets.rupeek.com/website/images/atl-refresh/logo-new.svg`" class="image">
    </div>
    <div class="flex-row">
      <div class="card-1">
        <img :src="`/lender-1.webp`" class="image">
        <div class="card-body-1">
          <h5 class="card-title">HAVE MONEY?</h5>
          <router-link class="text-2" to="/customer">
            <img :src="`https://assets.rupeek.com/engg-web/images/ourKeyInvestorImages/arrow.svg`" class="arrow">
          </router-link>
          <router-view></router-view>
        </div>
      </div>
      <div class="card-1">
        <img :src="`/gold-1.jpeg`" class="image">
        <div class="card-body-1">
          <h5 class="card-title">HAVE GOLD?</h5>
          <router-link class="text-2" to="/customer">
            <img :src="`https://assets.rupeek.com/engg-web/images/ourKeyInvestorImages/arrow.svg`" class="arrow">
          </router-link>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- <p class="text-2">...Now presenting P2P Lending</p>
    <router-link class="text-2" to="/customer">Chose your best lender -> </router-link>
      <router-view></router-view> -->
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
  padding: 30px 0 35px 0;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  background: hsla(312, 77%, 86%, 1);

  background: linear-gradient(0deg, hsla(312, 77%, 86%, 1) 0%, hsla(220, 61%, 79%, 1) 100%);

  background: -moz-linear-gradient(0deg, hsla(312, 77%, 86%, 1) 0%, hsla(220, 61%, 79%, 1) 100%);

  background: -webkit-linear-gradient(0deg, hsla(312, 77%, 86%, 1) 0%, hsla(220, 61%, 79%, 1) 100%);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f7c0ec", endColorstr="#a7bdea", GradientType=1 );
}

.card-1 {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin: 25px;
}
.card-3 {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin: 10px;
}

.image {
  border-radius: 15px 15px 0 0;
  height: 200px;
  object-fit: contain;
}

.arrow {
  height: 30px;
  width: 70px;
}

.card-2 {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin: 40px;
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
  font-size: 3vmax;
  line-height: 1;
  font-weight: 900;
}

.card-body-1 {
  text-align: center;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
}

</style>
