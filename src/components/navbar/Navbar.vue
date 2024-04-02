<script setup></script>

<template>
  <div class="flex flex-row gap-4 shadow-md w-5/6 items-center p-4 fixed bg-white">
    <div class="flex rounded-full border  w-2/3 p-2">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-slate-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </span>
      <input type="text" placeholder="search" class="w-5/6 outline-none ml-4">
    </div>
    <div class="flex gap-20">
        <div class="flex gap-10">
            <img src="/bell.svg" alt="bell">
            <img src="/message.svg" alt="message">
        </div>
        <div class="flex gap-2 justify-center items-center">
            <div class="rounded-full bg-orange-500">
                <img src="/smile.png" alt="">
            </div>
            <div>Nizomiddin M.</div>
            <div>
                <img src="/chevron-down.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped></style>
