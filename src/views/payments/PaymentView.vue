<script setup>
import { ref } from "vue";
import PaymentItem from "@/components/payments/PaymentItem.vue";

const payments = ref([
    {
        title:'ОсОО “Energi.kg”',
        created_at:'12/04/2021',
        updated_at:'15/04/2021',
        price:'100'
    },
    {
        title:'ОсОО “Energi.kg”',
        created_at:'12/04/2021',
        updated_at:'15/04/2021',
        price:'200'
    },
    {
        title:'ОсОО “Energi.kg”',
        created_at:'12/04/2021',
        updated_at:'15/04/2021',
        price:'3000'
    },
])
</script>

<template>
    <div class="p-4 bg-slate-100 rounded-xl">
        <div class="flex mb-8 justify-between">
            <div class="font-semibold text-xl">Payments</div>
        </div>
        <div>
            <div class="mb-3" v-for="(payment, key) in payments" :key="key">
                <PaymentItem  :payment="payment"/> 
            </div>   
        </div>
    </div>
</template>

<style scoped>
    
</style>