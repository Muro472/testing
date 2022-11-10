<template>
  <div class="dice">
    <input type="text" v-model="faceCount" />
    <button id="button" @click="rollDiceClick">Roll dice</button>
    <span v-if="rolledNumber"
      >rolled number: <span id="rolledNumber">{{ rolledNumber }}</span></span
    >
    <span
      >attemptCount: <span id="attemptCount">{{ attemptCount }}</span></span
    >
    <span
      >Avarage rolled number:
      <span id="avarageRolledNumber">{{ avarageRolledNumber }}</span></span
    >
  </div>
</template>

<script setup>
const { ref } = require("@vue/reactivity");

let faceCount = ref("6");

let rolledNumber = ref(null);
let totalRolledNumber = 0;
let avarageRolledNumber = ref(0);

let attemptCount = ref(0);
const rollDiceClick = () => {
  rolledNumber.value = Math.floor(1 + Math.random() * faceCount.value);
  totalRolledNumber += rolledNumber.value;
  attemptCount.value++;
  avarageRolledNumber.value = totalRolledNumber / attemptCount.value;
};
</script>

<style scoped>
.dice {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
