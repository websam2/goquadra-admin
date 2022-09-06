<template>
  <div class="flex w-screen">
    <div
      class="flex flex-col bg-primary w-[100%] justify-center content-center"
    >
      <div class="card bg-base-100 shadow-xl m-10">
        <div class="flex card-body">
          <h2 class="card-title text-4xl justify-center content-center">
            Termos de uso e privacidade da platadorma GOQUADRA
          </h2>
          <DocTerms></DocTerms>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DocTerms from "../../views/Terms/components/DocTerms.vue"
export default {
  components: { DocTerms },
};
</script>

<style></style>
