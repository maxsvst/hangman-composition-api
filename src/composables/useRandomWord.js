import axios from "axios";
import { onMounted, ref } from "vue";

export const useRandomWord = () => {
  const name = ref("");
  const getRandomWord = async () => {
    try {
      const { data } = await axios(
        "https://api.randomdatatools.ru/?unescaped=false&params=FirstName"
      );
      name.value = data.FirstName.toLowerCase();
    } catch (e) {
      console.log(e);
      name.value = "";
    }
  };

  onMounted(() => getRandomWord());

  return {
    name,
    getRandomWord,
  };
};
