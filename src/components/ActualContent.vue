<template>
  <div id="container">
    <ion-grid>
      <ion-row>
        <ion-col class="check-area">
          <ion-img :src="checkImage"></ion-img>
          <h1>Success</h1>
          <p>Transfer Request Successful</p>
        </ion-col>
      </ion-row>
    </ion-grid>
    <div id="actionButtonsArea">
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <div class="card">
              <ion-img :src="userPlus"></ion-img>
              <span>Save Beneficiary</span>
            </div>
          </ion-col>
          <ion-col size="6">
            <div class="card">
              <ion-img :src="rotateLeft"></ion-img>
              <span>Schedule</span>
            </div>
          </ion-col>
          <ion-col size="6">
            <div class="card">
              <ion-img :src="arrowUpFromBracket"></ion-img>
              <span>Share Receipt</span>
            </div>
          </ion-col>
          <ion-col size="6">
            <div class="card">
              <ion-img :src="star"></ion-img>
              <span>Add 1-Tap Payment</span>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button expand="block">CLOSE</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import checkImage from '@/assets/check.png';
import userPlus from '@/assets/icons/user-plus.png';
import rotateLeft from '@/assets/icons/rotate-left.png';
import arrowUpFromBracket from '@/assets/icons/arrow-up-from-bracket.png';
import star from '@/assets/icons/star.png';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton
} from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

h1 {
  font-weight: 600;
}

ion-img {
  width: 200px;
  margin: auto;
}

.card {
  ion-img {
    width: 30%;
    margin-bottom: 20px;
  }

  background-color: #f6f7f9;
  padding: 20px 10px;
  border-radius: 5px;
  text-align: center;
  color: #2c3a3b;
  font-size: 13px;
  /* margin: 10px; */
}

ion-button {
  --background: #ff8201;
  --background-hover: #ff8201;
  --background-activated: #fb8713;
  --background-focused: #fb8713;

  --color: #FFFFFF;

  --border-radius: 5px;

  --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

  --ripple-color: #FFFFFF;

  --padding-top: 10px;
  --padding-bottom: 10px;

  font-weight: 600;
}

#actionButtonsArea {
  margin-top: 10px;
}

.check-area ion-img {
  margin-bottom: 50px;
}

.check-area p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}
</style>
