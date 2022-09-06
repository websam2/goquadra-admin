<template>
  <div class="flex w-64 h-52 shadow-md rounded-md m-auto p-6 bg-neutral">
    <div class="flex flex-col justify-between w-full">
      <h2 class="text-2xl font-bold font-inter">{{text}}</h2>
      <div class="flex flex-row justify-between">
        <img src="../../src/assets/grafico.png" alt="" />
        <p class="text-5xl font-bold font-inter">{{number}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
        text: String,
        number: String,
    }
};
</script>

<style></style>
