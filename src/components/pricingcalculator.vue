<script setup> 
import { ref, computed } from "vue";

const amount = ref(null);
const placeholder = 20000;

const interest = computed(() => {
  const value = amount.value ?? placeholder;
  return (value * 0.013).toFixed(2);
});

const total = computed(() => {
  const value = amount.value ?? placeholder;
  return (value - value * 0.013).toFixed(2);
});
</script>

<template>
  <div
    class="bg-white grid grid-cols-1 sm:grid-cols-1 max-w-xs sm:max-w-sm mx-auto text-center my-8 p-4 rounded-2xl shadow-xl transition duration-300 hover:scale-105 hover:shadow-xl/30"
  >
    <h2 class="text-lg text-gray-900 font-bold mb-4">
      <i class="fa-solid fa-money-bill-1 text-2xl text-green-600 mr-2"></i>Fee/Transactions 
    </h2>

    <input
      type="number"
      v-model.number="amount"
      placeholder="20000"
      class="w-full pl-7 pr-3 py-2 text-sm border border-gray-100 rounded-md hover:outline-gray-600 transition duration-200 bg-gray-200 mb-7"
    />

    <div
      class="text-left space-y-1 space-x-1.5 text-gray-900 font-bold text-sm gap-2"
    >
      <p class="flex justify-between mb-10px">
        <span> Fee Per transaction(1.3%):</span>
        <span class="font-medium">{{ interest }}</span>
      </p>

      <p class="flex justify-between">
        <span>we settle you: </span>
        <span class="font-medium">{{ total }}</span>
      </p>
    </div>

    <div class="text-gray-900 mt-4 text-sm">
      <ol class="space-y-2">
        <li>Automatic settlement within 24 hours</li>
        <hr class="border-gray-400" />

        <li>Volume discounts available</li>
        <hr class="border-gray-400" />

        <li>No hidden fees or charges</li>
        <hr class="border-gray-400" />

        <!-- <li>Z</li>
        <hr class="border-gray-400"> -->

        <li>Zero maintenance fee</li>
      </ol>
    </div>
  </div>
</template>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
