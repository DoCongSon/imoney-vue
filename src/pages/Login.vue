<template>
  <div class="max-w-lg w-full mx-auto p-2">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <div>
        <label class="block text-dank text-xl font-bold min-w-20" for="email"
          >Email</label
        >
        <input
          class="p-4 border-2 mt-2 w-full text-dank border-dank rounded-lg text-xl font-medium bg-second"
          type="email"
          id="email"
          autocomplete="username"
          v-model="email"
        />
      </div>
      <div class="relative">
        <label class="block text-dank text-xl font-bold min-w-20" for="password"
          >Password</label
        >
        <input
          class="pl-4 pr-14 py-4 border-2 mt-2 w-full text-dank border-dank rounded-lg text-xl font-medium bg-second"
          :type="isShowPassword ? 'text' : 'password'"
          id="password"
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

      <p class="text-lg xl:text-xl text-right">
        <router-link
          :to="{ name: 'ForgotPassword' }"
          class="text-sky-600 hover:underline"
          >Forgot Password?
        </router-link>
      </p>
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
        Login
      </button>
      <p class="text-lg text-red-600 xl:text-xl">
        {{ error.message }}
      </p>
    </form>
    <div class="flex gap-4 mt-8 justify-center flex-wrap">
      <button
        @click="handleLoginWithGoogle"
        type="button"
        class="flex flex-1 min-w-60 justify-center items-center gap-2 text-lg font-medium text-primary transition px-4 py-2 rounded-xl bg-emerald-100/30 shadow-lg hover:bg-emerald-100"
      >
        <img src="../assets/google.png" alt="" class="w-8 h-8 object-cover" />
        <span class="ml-2">Login with Google</span>
      </button>
      <button
        @click="handleLoginWithGithub"
        type="button"
        class="flex flex-1 min-w-60 justify-center items-center gap-2 text-lg font-medium text-primary transition px-4 py-2 rounded-xl bg-emerald-100/30 shadow-lg hover:bg-emerald-100"
      >
        <img src="../assets/github.png" alt="" class="w-8 h-8 object-cover" />
        <span class="ml-2">Login with Github</span>
      </button>
    </div>
    <p class="text-lg mt-6 xl:text-xl">
      Don’t have an account yet?
      <router-link
        class="text-sky-600 ml-2 hover:underline"
        :to="{ name: 'Register', params: {} }"
        >Sign up
      </router-link>
    </p>
  </div>
</template>

<script setup>
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/20/solid";
import { useLogin } from "../composable/useLogin";
import { useRouter } from "vue-router";
import { ref } from "vue";

const isShowPassword = ref(false);
const email = ref("");
const password = ref("");

const router = useRouter();

const {
  loginWithEmailAndPassword,
  loginWithGoogle,
  loginWithGithub,
  isPending,
  error,
} = useLogin();

const handleSubmit = async () => {
  await loginWithEmailAndPassword({
    email: email.value,
    password: password.value,
  });
  if (!error.code) {
    await router.push({ name: "VerifyEmail" });
  }
};

const handleLoginWithGoogle = async () => {
  await loginWithGoogle();
  if (!error.code) {
    await router.push({ name: "VerifyEmail" });
  }
};

const handleLoginWithGithub = async () => {
  await loginWithGithub();
  if (!error.code) {
    await router.push({ name: "VerifyEmail" });
  }
};
</script>

<style></style>
