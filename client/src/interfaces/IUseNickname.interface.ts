import { Ref } from "vue";

/**
 * @interface IUseNickname
 * @description Defines the reactive state and setter method for managing a user's nickname.
 */
export interface IUseNickname {
  /**
   * Reactive reference holding the current nickname string.
   */
  nickname: Ref<string>;

  /**
   * Function to update the current nickname.
   *
   * @param {string} name - The new nickname to set.
   */
  setNickname: (name: string) => void;
}
