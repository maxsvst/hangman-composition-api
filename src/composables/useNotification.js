import { ref } from "vue";

export const useNotification = () => {
  const notification = ref(null);
  const showNotification = () => {
    notification.value?.openNotification();
    setTimeout(() => notification.value?.closeNotification(), 1000);
  };

  return {
    notification,
    showNotification,
  };
};
