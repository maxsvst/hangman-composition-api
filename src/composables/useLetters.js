import { ref, computed } from "vue";

export const useLetters = (name) => {
  const letters = ref([]);
  const correctLetters = computed(() =>
    letters.value.filter((letter) => name.value.includes(letter))
  );

  const wrongLetters = computed(() =>
    letters.value.filter((letter) => !name.value.includes(letter))
  );

  const isWin = computed(() =>
    [...name.value].every((letter) => correctLetters.value?.includes(letter))
  );

  const isLose = computed(() => wrongLetters.value.length === 6);

  const addLetter = (key) => {
    if (/[а-яА-ЯёЁ]/.test(key)) {
      letters.value.push(key.toLowerCase());
    }
  };

  const resetLetters = () => {
    letters.value = [];
  };

  return {
    letters,
    correctLetters,
    wrongLetters,
    isWin,
    isLose,
    addLetter,
    resetLetters,
  };
};
