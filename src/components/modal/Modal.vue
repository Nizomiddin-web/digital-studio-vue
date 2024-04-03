<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
let form_data = ref({
  id: "",
  title: "",
  name: "",
  status: "",
  date: "",
  category: "todo",
});

async function formFunc() {
  if (form_data.value.id && form_data.value.title && form_data.value.name) {
    await store.dispatch("set_datas", form_data.value);
    setTimeout(async () => {
      await store.dispatch("set_show", false);
    }, 1000);
  } else {
    setTimeout(() => {
      alert("Ma'lumotlarni to'ldiring!!");
    }, 500);
  }
}
</script>

<template>
  <div>
    <div
      class="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style="background: rgba(0, 0, 0, 0.5);"
    >
      <div
        class="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto"
      >
        <div class="modal-content py-4 text-left px-6 bg-indigo-600">
          <!--Title-->
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">New To do</p>
            <div
              class="modal-close cursor-pointer z-50"
              @click="store.dispatch('set_show', false)"
            >
              <svg
                class="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                ></path>
              </svg>
            </div>
          </div>
          <form @submit.prevent="formFunc">
            <!--Body-->
            <div class="my-5 flex flex-col gap-2">
              <label for="id">ID</label>
              <input
                type="text"
                class="rounded-xl outline-none p-2"
                name="id"
                v-model="form_data.id"
              />
              <label for="title">Title</label>
              <input
                type="text"
                class="rounded-xl outline-none p-2"
                name="title"
                v-model="form_data.title"
              />
              <label for="group">Group</label>
              <input
                type="text"
                class="rounded-xl outline-none p-2"
                name="group"
                v-model="form_data.name"
              />
              <label for="group">Status</label>
              <select
                name="status"
                v-model="form_data.status"
                class="rounded-xl outline-none p-2"
              >
                <option value="1">Easy</option>
                <option value="2">Medium</option>
                <option value="3">Hard</option>
              </select>
              <label for="Date">Date</label>
              <input
                type="date"
                class="rounded-xl outline-none p-2"
                name="Date"
                v-model="form_data.date"
              />
            </div>
          </form>
          <!--Footer-->
          <div class="flex justify-end pt-2">
            <button
              class="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
              @click="store.dispatch('set_show', false)"
            >
              Cancel
            </button>
            <button
              class="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
              @click="formFunc"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
