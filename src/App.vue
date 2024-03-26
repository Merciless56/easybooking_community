<template>
  <div class="flex m-9 h-[670px]">
    <div class="flex gap-6 p-4">
      <div class="flex flex-col gap-6 w-[359px] min-w-[359px] bg-primary backdrop-blur-[21px] p-4 rounded-2xl	">
        <span class="text-xl	font-bold	leading-[30px] text-[#212121]">Сообщество</span>
        <div class="flex flex-col gap-4">
          <div v-for="item in menu_items" :key="item" class="flex gap-3 p-3">
            <span :class=item.icon class="text-[17px] text-[#475569]"></span>
            <div class="flex flex-col gap-[1px]">
              <span class="text-base font-bold leading-[18px]">{{ item.title }}</span>
              <span class="text-xs leading-[16px] text-[#475569]">{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col min-w-[709px] bg-primary backdrop-blur-[21px] grow rounded-2xl	">
        <div class="py-3 px-5 flex justify-between">
          <div>
            <label class="relative block h-[40px] w-[230px]">
              <span class="py-1">
                <span class="icon-Search-Outline-Outline absolute flex text-base leading-4 p-2 pt-3"></span>
                <input v-model="search_input"
                  class="search_input focus:border-[#656668] focus:border border-[#D0D5DD] outline-0 placeholder:text-base pl-8 pr-4 w-full h-full border rounded"
                  placeholder="Search" type="text" name="search" />
                </ span>
            </label>
          </div>
          <div
            class="flex items-center gap-2 pl-4 pr-6 py-[10px] bg-[#E2F3FF] text-primaryblue rounded-full cursor-pointer text-xl	">
            <span class="icon-Plus-Outline"></span>
            <span class="font-semibold	text-sm	">Создать объявления</span>
          </div>
        </div>
        <div class="inline-flex flex-col items-center m-[100px]">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-3 text-center	w-[430px]">
              <div class="text-[22px] font-bold">В настоящее время нет рекламного материала</div>
              <div class="font-normal	text-[15px]">Создайте рекламу для привлечения больше клиентов для вашего контенте.
              </div>
            </div>
            <div @click="isVisible_NotifDialog = true"
              class="flex items-center justify-center self-center gap-2 pl-4 pr-6 py-[10px] bg-[#E2F3FF] text-primaryblue rounded-full cursor-pointer text-xl	">
              <span class="icon-Plus-Outline"></span>
              <span class="font-semibold text-sm">Создать объявления</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Dialog
    v-model:visible="isVisible_NotifDialog"
    modal
    :pt="{
        root: 'border-none',
        mask: {
            style: 'backdrop-filter: blur(2px)'
        }
    }"
>
    <template #container="{ closeCallback }">
        <div class="flex flex-column px-5 py-5 gap-4" style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--primary-400), var(--primary-700))">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                <path
                    d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                    fill="var(--primary-700)"
                />
                <path
                    d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                    fill="var(--primary-200)"
                />
            </svg>
            <div class="inline-flex flex-column gap-2">
                <label for="username" class="text-primary-50 font-semibold">Username</label>
                <InputText id="username" class="bg-white-alpha-20 border-none p-3 text-primary-50 w-20rem"></InputText>
            </div>
            <div class="inline-flex flex-column gap-2">
                <label for="password" class="text-primary-50 font-semibold">Password</label>
                <InputText id="password" class="bg-white-alpha-20 border-none p-3 text-primary-50 w-20rem" type="password"></InputText>
            </div>
            <div class="flex align-items-center gap-3">
                <Button label="Cancel" @click="closeCallback" text class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                <Button label="Sign-In" @click="closeCallback" text class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
            </div>
        </div>
    </template>
</Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';


const search_input = ref();

const isVisible_NotifDialog = ref(true)

let menu_items = [
  { icon: "icon-Discovery", title: "Мои объявлении", text: "Посмотреть и управлять своими объявлениями" },
  { icon: "icon-plane-filed", title: "Крылья Вдохновения", text: "Обсуждения путешествий и авиабилетов" },
  { icon: "icon-hotel-Outline", title: "Отельная Сфера", text: "Информацию о скидках и акциях в отельной индустрии" },
  { icon: "icon-traine-filed", title: "ЖД-клуб", text: "Поездки на поездах и продажа билетов" },]
</script>

<style lang="scss">
body {
  background-image: url("./assets/back.svg");
}
</style>