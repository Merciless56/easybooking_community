<template>
  <div class="flex m-9 h-[670px]">
    <div class="flex gap-6 p-4">
      <div class="flex flex-col gap-6 w-[359px] min-w-[359px] bg-white/65 backdrop-blur-[21px] p-4 rounded-2xl	">
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
      <div class="flex flex-col min-w-[709px] bg-white/65 backdrop-blur-[21px] grow rounded-2xl	">
        <div class="py-3 px-5 flex justify-between">
          <div class="">
            <label class="relative block h-[40px] w-[230px]">
              <span class="py-1">
                <span class="icon-Search-Outline-Outline absolute flex text-base leading-4 p-2 pt-3"></span>
                <input v-model="search_input" class="placeholder:text-base pl-8 pr-4 bg-white w-full h-full border rounded"
                  placeholder="Search" type="text" name="search" />
                </ span>
            </label>
          </div>
          <div class="flex items-center gap-2 pl-4 pr-6 py-[10px] bg-[#E2F3FF] text-[#00B5D7] rounded-full cursor-pointer text-xl	">
            <span class="icon-Plus-Outline"></span>
            <span class="font-semibold	text-sm	">Создать объявления</span>
          </div>
        </div>
        <div class="inline-flex flex-col items-center m-[100px]">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-3 text-center	w-[430px]">
              <div class="text-[22px] font-bold">В настоящее время нет рекламного материала</div>
              <div class="font-normal	text-[15px]">Создайте рекламу для привлечения больше клиентов для вашего контенте.</div>
            </div>
            <div class="flex items-center justify-center self-center gap-2 pl-4 pr-6 py-[10px] bg-[#E2F3FF] text-[#00B5D7] rounded-full cursor-pointer text-xl	">
            <span class="icon-Plus-Outline"></span>
            <span class="font-semibold	cdtext-sm	">Создать объявления</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';

const search_input = ref();

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