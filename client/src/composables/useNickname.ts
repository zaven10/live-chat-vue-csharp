import { ref, Ref } from "vue";
import { IUseNickname } from "@/interfaces";

/**
 * useNickname
 *
 * A composable that manages the user's nickname with reactive state
 * synchronized to localStorage for persistence.
 *
 * @returns {IUseNickname} An object containing:
 *  - `nickname`: a reactive reference to the current nickname string.
 *  - `setNickname`: a method to update the nickname both reactively and in localStorage.
 *
 * @example
 * const { nickname, setNickname } = useNickname();
 * setNickname("Alice");
 * console.log(nickname.value); // "Alice"
 */
export const useNickname = (): IUseNickname => {
  // Initialize nickname from localStorage or empty string
  const nickname: Ref<string> = ref(localStorage.getItem("nickname") || "");

  /**
   * Updates the nickname and persists it in localStorage.
   *
   * @param {string} name - The new nickname to set.
   */
  const setNickname = (name: string): void => {
    nickname.value = name;
    localStorage.setItem("nickname", name);
  };

  return { nickname, setNickname };
};
