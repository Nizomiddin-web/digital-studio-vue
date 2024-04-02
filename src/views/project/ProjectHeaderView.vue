<script setup>
import ProjectCardItem from '@/components/projects/ProjectCardItem.vue';
import { ref } from 'vue';
const keys = ref([
    'Date added',
    'Deadline',
    'Participats',
])

const item = ref({
    created_at:'12/04/2021',
    end_at:'12/08/2021',
    group:'Ady,Tailor,Sam'
})

</script>

<template>
  <div>
    <div class="font-bold text-2xl mb-4">Project Name</div>
    <div class="flex gap-6">
      <div class="bg-slate-100 p-4 rounded-md">
            <ProjectCardItem :keys="keys" :item="item"/>
      </div>
      <div class="w-1/2">
        <div class="bg-slate-100 rounded-md p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          repudiandae praesentium dolorum totam facere ipsum, iste aspernatur
          quas atque! Aperiam voluptatibus ut perspiciatis veritatis reiciendis
          commodi soluta optio ab ipsam?
        </div>
      </div>
      <div>
        <div class="bg-slate-100 rounded-md p-4">
            <div class="flex justify-between gap-6">
                <div class="font-semibold">All tasks:</div>
                <div>6</div>
            </div>
            <div class="flex justify-between">
                <div class="font-semibold">Done:</div>
                <div>0</div>
            </div>
            <div class="flex justify-between">
                <div class="font-semibold">frozen:</div>
                <div>1</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
