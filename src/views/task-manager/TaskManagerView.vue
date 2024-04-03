<script setup>
import ProjectHeaderView from "../project/ProjectHeaderView.vue";
import Kanban from "@/views/kanban/KanbanView.vue";
import CartComp from "@/components/CartComp.vue";
import { ref } from "vue";
const datas = ref([
  {
    id:1,
    title: "CRM sistem design",
    name: "Nizomiddin1",
    status: "easy",
    date: "02/04/2024",
    category: "todo",
  },
  { id:2,
    title: " design",
    name: "Nizomiddin2",
    status: "Medium",
    date: "02/04/2024",
    category: "inProgress",
  },
  {
    id:3,
    title: "CRM design",
    name: "Nizomiddin3",
    status: "hard",
    date: "02/04/2024",
    category: "todo",
  },
  {
    id:4,
    title: "ns design",
    name: "Nizomiddin4",
    status: "Medium",
    date: "02/04/2024",
    category: "closed",
  },
  {
    id:5,
    title: "CRM sistem design",
    name: "Nizomiddin5",
    status: "easy",
    date: "02/04/2024",
    category: "closed",
  },
]);

const categories = ref([
  {
    item: "To do",
    is_add: true,
    id: "todo",
  },
  {
    item: "In progress",
    is_add: false,
    id: "inProgress",
  },
  {
    item: "Closed",
    is_add: false,
    id: "closed",
  },
  {
    item: "Frozen",
    is_add: false,
    id: "frozen",
  },
]);
</script>

<template>
  <div class="flex flex-col">
    <div>
      <ProjectHeaderView />
    </div>
    <div class="flex gap-4">
      <Kanban
        v-for="(val, key) in categories"
        :item="val.item"
        :is_add="val.is_add"
        :id="val.id"
        :key="key"
      >
        <CartComp
          v-for="(data, key) in datas.filter(
            (value, index) => value.category == val.id
          )"
          :key="key"
          :data="data"
        />
      </Kanban>
    </div>
  </div>
</template>

<style scoped></style>
