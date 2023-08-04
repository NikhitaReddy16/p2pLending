
<template>
  <div class="background-1">
    <div  v-if="!isResponse">
      <form @submit.prevent="addCustomer">
        <!-- <div class="container-1">
          <div class="beige-bg-1">
            <img :src="`/img-1.webp`" class="main-img-top" alt="Card Image">
          </div>
          <div class="beige-bg-1">
            <label class="text" for="name">Name:</label>
            <input type="text" id="name" v-model="customer.name" required>

            <label for="age">Amount:</label>
            <input type="number" id="age" v-model="customer.amount" required>

            <label for="city">Gold:</label>
            <input type="text" id="city" v-model="customer.gold" required>

            <label for="city">Tenure:</label>
            <input type="text" id="city" v-model="customer.tenure" required>

            <button type="submit">Check my Schemes</button>
          </div>
        </div> -->
        <div class="box-form">
          <div class="left">
            <div class="overlay">
              <img :src="`/img-1.webp`" class="main-img-top" alt="Card Image">
            </div>
          </div>  
          <div class="right">
            <h5 class="text-color">Details</h5>
            <!-- <p>Don't have an account? <a href="#">Creat Your Account</a> it takes less than a minute</p> -->
            <div class="inputs">
              <input type="text" placeholder="Name" v-model="customer.name" >
              <br>
              <input type="text" placeholder="Gold" v-model="customer.gold" >
              <br>
              <input type="text" placeholder="Amount" v-model="customer.amount" >
              <br>
              <input type="text" placeholder="Tenure" v-model="customer.tenure" >
            </div>
            <br><br>
            <br>
            <button class="button">SUBMIT</button>
          </div>         
        </div>
      </form>
    </div>
    <div v-if="isResponse">
      <div class="beige-bg">
        <h1 class="text-center text-color">WE HAVE SORTED YOUR SCHEMES!</h1>
        <h2 class="text-center text-color">Take a look!</h2>
        <div class="container">
            <div class="col-md-3 mb-4" v-for="card in cards" :key="card.id">
              <div class="card" v-if="card.active==='true'">
                <img :src="card.image" class="card-img-top" alt="Card Image">
                <div class="card-body">
                  <div class="card-title text-color">{{ card.title }}</div>
                  <div class="card-title text-color">{{ card.lenderName }}</div>
                  <div class="flex-column">
                    <div class="flex-row">
                      <div class="card-text text-color-1">Tenure: {{ card.tenure }}</div>
                      <div class="card-text text-color-1">ROI: {{ card.roi }}  </div>
                    </div>
                    <br>
                  <div class="flex-row">
                    <div class="card-text text-color-1">LTV: {{ card.ltv }}  </div>
                    <div class="card-text text-color-1">Rating: {{ card.rating }}</div>
                  </div> 
                  <br>                 
                </div>
                </div>
              </div>
              <div class="card" v-if="card.active==='true'" >
                <div class="fade">
                <img :src="card.image" class="card-img-top" alt="Card Image">
                <div class="card-body">
                  <h5 class="card-title">{{ card.title }}</h5>
                  <h5 class="card-title">{{ card.lenderName }}</h5>
                  <div>
                  <div>
                    <p class="card-text">LTV: {{ card.ltv }}</p>
                    <p class="card-text">ROI: {{ card.roi }}</p>
                  </div>
                  <div>
                    <p class="card-text">TENURE: {{ card.tenure }}</p>
                    <p class="card-text">RATING: {{ card.rating }}</p>
                  </div>
                </div>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>
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
      cards: [
        {
          "id": 1,
          "title": "Scheme Federal",
          "description": "This is the description of Scheme 1.",
          "ltv": "75%",
          "roi": "9%",
          "tenure": 6,
          "image": "https://assets.rupeek.com/lenders/federal-payments-web.svg",
          "lenderName":"federal",
          "rating": 4.77,
          "active" :true
        },
        {
          "id": 2,
          "title": "Scheme Chola",
          "description": "This is the description of Scheme 2.",
          "ltv": "65%",
          "roi": "10%",
          "tenure": 7,
          "image": "https://assets.rupeek.com/lenders/rupeek-payments-web.svg",
          "lenderName":"rupeek",
          "rating": 4.25,
           "active" :true
        },
        {
          "id": 3,
          "title": "User Scheme",
          "description": "This is the description of Scheme 3.",
          "ltv": "75%",
          "roi": "9%",
          "tenure": 6,
          "image": "https://assets.rupeek.com/engg-web/images/leadersImages/sangharshBoudhh.png",
          "lenderName":"Sangharsh",
          "rating": 4.2,
           "active" :true

        },
        {
          "id": 4,
          "title": "User Scheme",
          "description": "This is the description of Scheme 4.",
          "ltv": "75%",
          "roi": "9%",
          "tenure": 6,
          "image": "https://assets.rupeek.com/engg-web/images/leadersImages/ankurSrivastava.png",
          "lenderName":"Ankur",
          "rating": 4.1,
          "active" :true
        },
        {
          "id": 5,
          "title": "User Scheme",
          "description": "This is the description of Scheme 5.",
          "ltv": "75%",
          "roi": "9%",
          "tenure": 6,
          "image": "https://assets.rupeek.com/engg-web/images/leadersImages/amarPrabhu.png",
          "lenderName":"Amar Prabhu",
          "rating": 3.8,
           "active" :true
        },
        {
          "id": 2,
          "title": "Scheme Rupeek",
          "description": "This is the description of Scheme 2.",
          "ltv": "65%",
          "roi": "10%",
          "tenure": 7,
          "image": "https://assets.rupeek.com/lenders/rupeek-payments-web.svg",
          "lenderName":"rupeek",
          "rating": 4.25
        },
        {
          "id": 6,
          "title": "Lender Scheme ",
          "description": "This is the description of Scheme 6",
          "ltv": "75%",
          "roi": "9%",
          "tenure": 6,
          "image": "https://www.cholamandalam.com/images/chola-logo.png",
          "lenderName":"Cholamandalam",
          "rating": 3.7,
           "active" :true
        }
      ],
      cards2: [
        {
          "id": 1,
          "title": "Scheme Chola",
          "description": "This is the description of Scheme 1.",
          "ltv": "75%",
          "roi": "9%",
          "tenure": 6,
          "image": "https://www.cholamandalam.com/images/chola-logo.png",
          "lenderName":"federal",
          "rating": 4.77,
           "active" :true
        },
        {
          "id": 2,
          "title": "Scheme Rupeek",
          "description": "This is the description of Scheme 2.",
          "ltv": "65%",
          "roi": "10%",
          "tenure": 7,
          "image": "https://assets.rupeek.com/lenders/rupeek-payments-web.svg",
          "lenderName":"rupeek",
          "rating": 4.25,
          "active" :false
        },
        {
          "id": 3,
          "title": "User Scheme",
          "description": "This is the description of Scheme 3.",
          "ltv": "75%",
          "roi": "9%",
          "tenure": 6,
          "image": "https://assets.rupeek.com/engg-web/images/leadersImages/sangharshBoudhh.png",
          "lenderName":"Sangharsh",
          "rating": 4.2,
           "active" :true

        },
        {
          "id": 4,
          "title": "User Scheme",
          "description": "This is the description of Scheme 4.",
          "ltv": "75%",
          "roi": "9%",
          "tenure": 6,
          "image": "https://assets.rupeek.com/engg-web/images/leadersImages/ankurSrivastava.png",
          "lenderName":"Ankur",
          "rating": 4.1,
           "active" :true
        },
        {
          "id": 5,
          "title": "User Scheme",
          "description": "This is the description of Scheme 5.",
          "ltv": "75%",
          "roi": "9%",
          "tenure": 6,
          "image": "https://assets.rupeek.com/engg-web/images/leadersImages/amarPrabhu.png",
          "lenderName":"Amar Prabhu",
          "rating": 3.8,
           "active" :true
        },
        {
          "id": 6,
          "title": "Lender Scheme",
          "description": "This is the description of Scheme 6",
          "ltv": "75%",
          "roi": "9%",
          "tenure": 6,
          "image": "https://www.cholamandalam.com/images/chola-logo.png",
          "lenderName":"Cholamandalam",
          "rating": 3.7,
           "active":false
        }
      ],
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


<style>
/* Optional CSS styling for the cards */

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-1 {
  background-color: #7393B3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50 0 50 0;
}
.beige-bg-1 {
  min-height: 70vh;
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50 50 50 50;
}

.main-img-top {
  border-radius: 15px 15px 0 0;
  height: 500px;
  padding: 15px 15px 5px 15px;
  object-fit: contain;
}

.button {
  background-color: #3b5998;
}

.card {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.card-img-top {
  border-radius: 15px 15px 0 0;
  height: 100px;
  padding: 15px 15px 5px 15px;
  object-fit: contain;
  align-items: center;
  justify-content: center;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
}

/* Optional CSS styling for the grid */
.container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}

/* Beige background */
.beige-bg {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50 0 50 0;
}

/* Center the heading */
.text-center {
  text-align: center;
  color: #e9dbdb
}

/* Add padding and center the content in card-body */
.card-body {
  padding: 1rem;
  text-align: center;
}

.text-color {
  color: #4f0557;
  padding: 5px 5px 7.5px 5px;
}

.text-color-1 {
  color: #4f0557;
  padding: 5px 5px 5px 5px;
}

.text {
  font: 50px;
  colour: #511d7f;
}



body {
  font-family: "Open Sans", sans-serif;
  color: #333333;
}
.background-1 {
  padding: 30px 0 75px 0;
  background: hsla(312, 77%, 86%, 1);

background: linear-gradient(0deg, hsla(312, 77%, 86%, 1) 0%, hsla(220, 61%, 79%, 1) 100%);

background: -moz-linear-gradient(0deg, hsla(312, 77%, 86%, 1) 0%, hsla(220, 61%, 79%, 1) 100%);

background: -webkit-linear-gradient(0deg, hsla(312, 77%, 86%, 1) 0%, hsla(220, 61%, 79%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f7c0ec", endColorstr="#a7bdea", GradientType=1 );

}

.button-center {
  align-items: center;
}

.box-form {
  margin: 0 auto;
  width: 80%;
  background: #FFFFFF;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex: 1 1 100%;
  align-items: stretch;
  justify-content: space-between;
  box-shadow: 0 0 20px 6px #090b6f85;
}
@media (max-width: 980px) {
  .box-form {
    flex-flow: wrap;
    text-align: center;
    align-content: center;
    align-items: center;
  }
}
.box-form div {
  height: auto;
}
.box-form .left {
  color: #FFFFFF;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://i.pinimg.com/736x/5d/73/ea/5d73eaabb25e3805de1f8cdea7df4a42--tumblr-backgrounds-iphone-phone-wallpapers-iphone-wallaper-tumblr.jpg");
  overflow: hidden;
}
.box-form .right {
  width: 250px;
  padding-right: 140px;
  padding-bottom: 40px;
  overflow: hidden;
}
.box-form .left .overlay {
  padding: 30px;
  width: 100%;
  height: 100%;
  background: #5961f9ad;
  overflow: hidden;
  box-sizing: border-box;
}
.box-form .left .overlay h1 {
  font-size: 10vmax;
  line-height: 1;
  font-weight: 900;
  margin-top: 40px;
  margin-bottom: 20px;
}
.box-form .left .overlay span p {
  margin-top: 30px;
  font-weight: 900;
}
.box-form .left .overlay span a {
  background: #3b5998;
  color: #FFFFFF;
  margin-top: 10px;
  padding: 14px 50px;
  border-radius: 100px;
  display: inline-block;
  box-shadow: 0 3px 6px 1px #042d4657;
}
.box-form .left .overlay span a:last-child {
  background: #1dcaff;
  margin-left: 30px;
}
@media (max-width: 980px) {
  .box-form .right {
    width: 100%;
  }
}
.box-form .right h5 {
  font-size: 6vmax;
  line-height: 0;
}
.box-form .right p {
  font-size: 14px;
  color: #B0B3B9;
}
.box-form .right .inputs {
  overflow: hidden;
}
.box-form .right input {
  width: 100%;
  padding: 10px;
  margin-top: 25px;
  font-size: 16px;
  border: none;
  outline: none;
  border-bottom: 2px solid #B0B3B9;
}
.box-form .right .remember-me--forget-password {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-form .right .remember-me--forget-password input {
  margin: 0;
  margin-right: 7px;
  width: auto;
}
.box-form .right button {
  color: #fff;
  font-size: 16px;
  padding: 12px 35px;
  margin: 0 0 0 70px;
  border-radius: 50px;
  display: inline-block;
  border: 0;
  outline: 0;
  box-shadow: 0px 4px 20px 0px #6c3ccda6;
  background-image: linear-gradient(135deg, #a397cc 10%, #6e27ea 100%);
}

label {
  display: block;
  position: relative;
  margin-left: 30px;
}

label::before {
  content: ' \f00c';
  position: absolute;
  font-family: FontAwesome;
  background: transparent;
  border: 3px solid #70F570;
  border-radius: 4px;
  color: transparent;
  left: -30px;
  transition: all 0.2s linear;
}

label:hover::before {
  font-family: FontAwesome;
  content: ' \f00c';
  color: #fff;
  cursor: pointer;
  background: #70F570;
}

label:hover::before .text-checkbox {
  background: #70F570;
}

label span.text-checkbox {
  display: inline-block;
  height: auto;
  position: relative;
  cursor: pointer;
  transition: all 0.2s linear;
}

label input[type="checkbox"] {
  display: none;
}
.maincontainer {
  background: #FFFFFF;
}
.fade {
  opacity: 1;
  transition: opacity 0.5s; /* You can adjust the duration to make the fade faster/slower */
}

.fade:hover {
  opacity: 0.5; /* Set the target opacity when the element is hovered */
}
</style>









