<template>
  <div v-if="isPopupVisible" class="popup-container">
    <div class="popup">
      <h2 v-if="popupStatus === 'win'">Поздравляю, вы победили! 😃</h2>
      <template v-else>
        <h2>Вы проиграли. 😕</h2>
        <h3>Загаданное имя: {{ props.name }}</h3>
      </template>
      <button @click="$emit('gameRestart')">Сыграть еще раз</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose, defineEmits, defineProps } from "vue";

const isPopupVisible = ref(false);
const popupStatus = ref(null);

const props = defineProps(["name"]);

const openPopup = (status) => {
  popupStatus.value = status;
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;
};

defineExpose({
  openPopup,
  closePopup,
});

defineEmits(["gameRestart"]);
</script>
