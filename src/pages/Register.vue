<template>
  <div class="max-w-lg w-full mx-auto p-2">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <div>
        <label class="block text-dank text-xl font-bold min-w-20" for="fullName">Full name</label>
        <input
          class="p-4 border-2 mt-2 w-full text-dank border-dank rounded-lg text-xl font-medium bg-second"
          type="text"
          id="fullName"
          minlength="3"
          autocomplete="name"
          v-model="fullName"
        />
      </div>
      <div>
        <label class="block text-dank text-xl font-bold min-w-20" for="email">Email</label>
        <input
          class="p-4 border-2 mt-2 w-full text-dank border-dank rounded-lg text-xl font-medium bg-second"
          type="email"
          id="email"
          autocomplete="username"
          v-model="email"
        />
      </div>
      <div class="relative">
        <label class="block text-dank text-xl font-bold min-w-20" for="password">Password</label>
        <input
          class="pl-4 pr-14 py-4 border-2 mt-2 w-full text-dank border-dank rounded-lg text-xl font-medium bg-second"
          :type="isShowPassword ? 'text' : 'password'"
          id="password"
          minlength="6"
          autocomplete="current-password"
          v-model="password"
        />
        <EyeIcon
          @click="isShowPassword = false"
          v-if="isShowPassword"
          class="cursor-pointer text-xl w-6 h-6 absolute top-14 right-4 text-dank/80"
        />
        <EyeSlashIcon
          @click="isShowPassword = true"
          v-else
          class="cursor-pointer text-xl w-6 h-6 absolute top-14 right-4 text-dank/80"
        />
      </div>
      <button
        v-if="isPending"
        disabled
        class="text-xl font-bold text-white transition bg-slate-600 cursor-wait p-4 rounded-xl mt-4"
      >
        Loading...
      </button>
      <button
        v-else
        type="submit"
        class="text-xl font-bold text-white transition bg-primary hover:bg-primary/90 p-4 rounded-xl mt-4"
      >
        Create account
      </button>
      <p class="text-lg text-red-600 xl:text-xl">
        {{ error.message }}
      </p>
    </form>
    <p class="text-lg mt-6 xl:text-xl">
      Already have an account?
      <router-link class="text-sky-600 ml-2 hover:underline" :to="{ name: 'Login', params: {} }"
        >Login here</router-link
      >
    </p>
  </div>
</template>

<script setup>
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/20/solid';
import { useRegister } from '../composable/useRegister';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { error, isPending, signupWithEmail } = useRegister();
const router = useRouter();
const isShowPassword = ref(false);
const fullName = ref('');
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  await signupWithEmail({
    displayName: fullName.value,
    email: email.value,
    password: password.value,
  });
  if (error.code) {
    console.log(error);
  } else {
    await router.push({name: 'VerifyEmail', params: {}});
  }
};
</script>

<style></style>
