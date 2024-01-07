<template>
  <div
    class="flex flex-col gap-10 items-center justify-center xl:flex-row xl:px-8 min-h-screen bg-background"
  >
    <div class="xl:flex-1">
      <div class="w-20 h-20 mx-auto xl:w-80 xl:h-80">
        <img src="../assets/save-money.png" class="h-full w-auto" alt="logo" />
      </div>
      <p class="font-bold text-2xl text-emerald-700 mt-5 text-center xl:text-4xl">
        Best way to saving your money!
      </p>
    </div>
    <div class="xl:flex-1 w-full">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style></style>
