<script setup>
import { ref } from "vue";
</script>

<template>
  <nav>
    <ul class="flex gap-4 items-center text-slate-600">
      <li>Dashboard</li>
      <li>
        <svg
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-3 h-3 text-slate-200"
        >
          <path
            d="M1.5 11L6.5 6L1.5 1"
            stroke="#585858"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </li>
      <li v-if="$route.name">{{ $route.name }}</li>
      <li v-if="$route.name"><svg
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-3 h-3 text-slate-200"
        >
          <path
            d="M1.5 11L6.5 6L1.5 1"
            stroke="#585858"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg></li>
    </ul>
  </nav>
</template>

<style scoped></style>
