<template>
  <div class="flex sm:w-40 md:w-64 md:h-52 shadow-md rounded-md m-auto p-6 bg-neutral">
    <div class="flex flex-col justify-between w-full">
      <h2 class="sm:text-xs md:text-lg lg:text-2xl font-bold font-inter">{{text}}</h2>
      <div class="flex flex-row justify-between">
        <img class="w-[20%] h-[100%]" src="../../src/assets/grafico.png" alt="" />
        <p class="sm:text-xl md:text-3xl lg:text-5xl font-bold font-inter">{{number}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
        text: String,
        number: Number,
    }
};
</script>

<style></style>
