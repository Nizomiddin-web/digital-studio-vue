<script setup>

import {ref,computed} from 'vue'
import { useStore, } from 'vuex';

//Props
defineProps({
  id: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  is_add: {
    type: Boolean,
    default: false,
  },
});

//Store 
const store = useStore()
const is_show = computed(()=>store.state.is_show)

const data = ref({
    title:'CRM sistem design',
    name:'Nizomiddin',
    status:'Medium',
    date:'02/04/2024'
})

function set_show(){
  console.log(is_show.value)
  store.dispatch('set_show',!is_show.value)
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  let data = e.dataTransfer.getData("text");
  console.log(document.getElementById(data))
  e.target.appendChild(document.getElementById(data));
}
</script>

<template>
  <div class="bg-slate-100 w-1/4 mt-5 p-6 rounded-xl">
    <div class="flex justify-between items-center">
      <div class="font-bold text-xl">{{ item }}</div>
      <div v-if="is_add">
        <button @click="set_show">
          <span><img src="/plus-circle.png" alt="" /></span>
        </button>
      </div>
    </div>
    <div class="min-h-96" :id="id"  @drop="drop" @dragover="allowDrop" >
      <slot/>
    </div>
  </div>
</template>

<style scoped></style>
