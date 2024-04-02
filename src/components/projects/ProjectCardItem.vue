<script setup>
defineProps({
    keys:{
        type:Array,
        required:true
    },
    item:{
        type:Object,
        required:true
    }
})
</script>

<template>
    <div class="bg-slate-100">
        <div class="flex gap-10">
            <div>
                <div v-for="(item,index) in keys" :key="index" class="font-semibold">{{item}}:</div>
            </div>
            <div>
                <div v-for="(val,key) in item" :key="key">{{val}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    
</style>