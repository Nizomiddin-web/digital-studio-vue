<script setup>
import ProjectView from "@/views/project/ProjectView.vue";
import PaymentView from "@/views/payments/PaymentView.vue";
import TaskView from "../tasks/TaskView.vue";
import DocumentView from "../document/DocumentView.vue";
</script>

<template>
  <div class="flex gap-4">
    <div class="font-sans font-semibold w-2/3 ">
      <ProjectView />
      <br />
      <PaymentView />
    </div>
    <div class="w-1/5">
      <TaskView/>
      <DocumentView/>
    </div>
  </div>
</template>

<style scoped></style>
