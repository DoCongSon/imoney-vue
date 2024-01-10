<script setup>
import { useRouter } from "vue-router";
import { useSignOut } from "../composable/useSignOut";

const { logout, error } = useSignOut();
const router = useRouter();
const handleLogout = async () => {
  await logout();
  if (!error.value) {
    router.push({ name: "Login" });
  }
};

handleLogout();
</script>

<template></template>

<style scoped></style>
