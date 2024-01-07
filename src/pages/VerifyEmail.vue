<template>
  <div class="max-w-lg w-full mx-auto p-2">
    <h1 class="text-4xl font-bold text-dank">Verify your Email</h1>
    <p v-if="!user?.emailVerified" class="text-lg text-red-600 xl:text-xl mt-4">
      Your email is not verified yet. We sended a link to
      <span class="text-primary">{{ user?.email }}</span> Please check your email and click link to
      verified your account
    </p>
    <button
      @click="handleVerified"
      class="w-full text-xl font-bold text-white transition bg-primary hover:bg-primary/90 p-4 rounded-xl mt-4"
    >
      I did it
    </button>

    <p class="text-lg mt-6 xl:text-xl text-right">
      You don't receive email?
      <span v-if="isPending" class="text-sky-600 cursor-wait"> Loading... </span>
      <span v-else class="text-sky-600 hover:underline cursor-pointer" @click="handleResendEmail">
        Sent again
      </span>
    </p>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useRegister } from '../composable/useRegister';
import { useUser } from '../composable/useUser';
const { sendVerifiedEmail, isPending } = useRegister();
const { user, reloadUser } = useUser();
const router = useRouter();

watchEffect(async () => {
  if (user.value && !user.value.emailVerified) {
    await sendVerifiedEmail(user.value);
  } else if (user.value && user.value.emailVerified) {
    router.push({ name: 'Home' });
  }
});

const handleResendEmail = async () => {
  if (user.value) {
    await sendVerifiedEmail(user.value);
  }
};

const handleVerified = async () => {
  await reloadUser();
  if (user.value && user.value.emailVerified) {
    router.push({ name: 'Home' });
  }
};
</script>
<style></style>
