<script setup>
import "@/assets/style.css";
import { RouterLink, RouterView } from "vue-router";
import SidebarView from "@/views/sidebar/SidebarView.vue";
import NavbarView from "@/views/navbar/NavbarView.vue";
import BreadCrams from "@/components/breadcrams/BreadCrams.vue";
</script>

<template>
  <div class="flex">
    <div class="w-1/6">
      <SidebarView />
    </div>
    <div class="w-5/6">
      <NavbarView />
      <div class="mx-10">
        <BreadCrams/>
        <br>
        <RouterView />
      </div>
    </div>
  </div>

  <!-- <NavbarView/> -->
</template>

<style scoped></style>
