/**
 * @file useChatView.ts
 * @description Composable that controls access to the Chat Room view.
 * It ensures that a nickname is set before allowing entry into the chat room.
 */

import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { useNickname } from "@/composables";

/**
 * useChatView
 *
 * A composable that protects the Chat Room route by checking if the user has a nickname set.
 * If no nickname is found, it redirects the user to the nickname entry page ("/").
 *
 * @example
 * Inside ChatRoomPage.vue
 * useChatView();
 */
export const useChatView = () => {
  const { nickname } = useNickname(); // Access the reactive nickname ref
  const router = useRouter(); // Access Vue Router for navigation

  onMounted(() => {
    if (!nickname.value) {
      // Redirect to nickname selection page if nickname is not set
      router.push("/");
    }
  });
};
