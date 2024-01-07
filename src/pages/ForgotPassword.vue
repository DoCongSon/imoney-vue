<template>
  <div class="max-w-lg w-full mx-auto p-2">
    <h1 class="text-4xl font-bold text-dank">Forgot your Password</h1>
    <p class="text-xl mt-2 text-dank/80">
      Enter your email address below and we’ll send you a link to reset your password.
    </p>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 mt-4">
      <div>
        <label class="block text-dank text-xl font-bold min-w-20" for="email">Your email</label>
        <input
          class="p-4 border-2 mt-2 w-full text-dank border-dank rounded-lg text-xl font-medium bg-second"
          type="email"
          id="email"
          autocomplete="username"
        />
      </div>
      <button
        type="submit"
        class="text-xl font-bold text-white transition bg-primary hover:bg-primary/90 p-4 rounded-xl mt-4"
      >
        Sent to email
      </button>
    </form>
    <p class="text-lg mt-6 xl:text-xl text-right">
      <router-link class="text-sky-600 hover:underline" :to="{ name: 'Login', params: {} }"
        >Back to Login</router-link
      >
    </p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route);

const handleSubmit = () => {
  alert('Submit');
};
</script>
<style></style>
