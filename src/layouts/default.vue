<!--TODO: create default layout-->
<template>
  <header>
    <div>
      <div>
        <img
          :src="user.photoURL ? user.photoURL : '../assets/avatar-default.png'"
          alt=""
        />
      </div>
      <p>Hey, {{ user.displayName }}</p>
    </div>
    <div></div>
  </header>
  <slot />
  <footer>
    <div></div>
    <div></div>
  </footer>
</template>

<script setup>
import { useUser } from "../composable/useUser";

const { user } = useUser();
</script>

<style></style>
