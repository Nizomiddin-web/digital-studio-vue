<script setup>
import ProjectHeaderView from "../project/ProjectHeaderView.vue";
import Kanban from "@/views/kanban/KanbanView.vue";
import CartComp from "@/components/CartComp.vue";
import Modal from "@/components/modal/Modal.vue";
import { ref,computed } from "vue";
import { useStore } from "vuex";

const store = useStore()
const datas = computed(()=>store.state.datas)

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
  <Modal v-if="store.state.is_show"/>
</template>

<style scoped></style>
