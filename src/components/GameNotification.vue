<template>
  <div class="notification-container" :class="{ show: isNotificationVisible }">
    <p>Вы уже вводили этот символ</p>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const isNotificationVisible = ref(false);

const openNotification = () => {
  isNotificationVisible.value = true;
};

const closeNotification = () => {
  isNotificationVisible.value = false;
};

defineExpose({
  openNotification,
  closeNotification,
});
</script>
