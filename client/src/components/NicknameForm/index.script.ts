import { computed, ComputedRef, Ref, ref } from "vue";
import { Router, useRouter } from "vue-router";

import { useNickname } from "@/composables";

import { IUseNickname } from "@/interfaces";

/**
 * useNicknameFormComponent
 *
 * Manages the state and logic for a nickname input form,
 * including validation and navigation on submit.
 *
 * @returns {{
 *   name: Ref<string>;
 *   isDisabled: ComputedRef<boolean>;
 *   onSubmit: () => void;
 * }}
 *  - `name`: Reactive reference to the nickname input.
 *  - `isDisabled`: Computed flag indicating if the submit button should be disabled.
 *  - `onSubmit`: Function to validate, save the nickname, and navigate to the chat view.
 */
export const useNicknameFormComponent = () => {
  /**
   * The nickname entered by the user.
   */
  const name: Ref<string> = ref("");

  /**
   * Vue Router instance for navigation.
   */
  const router: Router = useRouter();

  /**
   * Destructure setNickname method from the useNickname composable
   */
  const { setNickname }: IUseNickname = useNickname();

  /**
   * Computed property to determine if the Continue button should be disabled.
   * Disabled if name is empty or less than 3 characters.
   */
  const isDisabled: ComputedRef<boolean> = computed<boolean>(
    () => !name.value || name.value.length < 3
  );

  /**
   * Handles the form submission.
   * Validates the nickname length and alerts if invalid.
   * Saves nickname and navigates to chat page on success.
   */
  const onSubmit = () => {
    if (!name.value) {
      return alert("Nickname cannot be empty.");
    }

    if (name.value.length < 3) {
      return alert("Nickname must be at least 3 characters long.");
    }

    setNickname(name.value);

    router.push("/chat");
  };

  return {
    name,
    isDisabled,
    onSubmit,
  };
};
