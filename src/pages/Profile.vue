<script setup>
import {
  ArrowRightStartOnRectangleIcon,
  CurrencyDollarIcon,
  ChevronRightIcon,
  InformationCircleIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/vue/24/outline";
import { useUser } from "../composable/useUser";

const { user, reloadUser } = useUser();
</script>

<template>
  <div class="container px-2">
    <div class="w-32 h-32 rounded-full overflow-hidden mx-auto" v-if="user">
      <img
        src="https://inkythuatso.com/uploads/thumbnails/800/2023/02/hinh-anh-rong-chibi-cute-2-23-15-42-34.jpg"
        class="w-full h-auto object-cover"
      />
    </div>
    <div class="text-center mt-4" v-if="user">
      <h1 class="text-2xl font-bold text-primary">{{ user.displayName }}</h1>
      <p class="text-xl text-gray-500 mt-1">{{ user.email }}</p>
    </div>
    <div class="px-6 mt-16">
      <h1 class="text-2xl font-bold text-primary mt-4">General</h1>
      <div class="grid text-dank/70 mt-4 gap-4">
        <router-link :to="{ name: 'Home', params: {} }">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1">
              <CurrencyDollarIcon class="w-8 h-8" />
              <p class="inline-block ml-2 font-bold">My Wallet</p>
            </div>
            <div>
              <ChevronRightIcon class="w-8 h-8" />
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'Home', params: {} }">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1">
              <WrenchScrewdriverIcon class="w-8 h-8" />
              <p class="inline-block ml-2 font-bold">Tools</p>
            </div>
            <div>
              <ChevronRightIcon class="w-8 h-8" />
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'Home', params: {} }">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1">
              <LockClosedIcon class="w-8 h-8" />
              <p class="inline-block ml-2 font-bold">Privacy</p>
            </div>
            <div>
              <ChevronRightIcon class="w-8 h-8" />
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'Home', params: {} }">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1">
              <InformationCircleIcon class="w-8 h-8" />
              <p class="inline-block ml-2 font-bold">About</p>
            </div>
            <div>
              <ChevronRightIcon class="w-8 h-8" />
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'Logout' }">
          <div class="flex items-center justify-between text-red-400">
            <div class="flex items-center gap-1">
              <ArrowRightStartOnRectangleIcon class="w-8 h-8" />
              <p class="inline-block ml-2 font-bold">Logout</p>
            </div>
            <div>
              <ChevronRightIcon class="w-8 h-8" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
