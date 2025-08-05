import { onMounted } from "vue";

import { useSignalR, useNickname } from "@/composables";

import { IUseNickname, IUseSignalR } from "@/interfaces";

/**
 * Composable managing chat room logic:
 * - Connects to SignalR hub using the current nickname.
 * - Provides reactive messages array.
 * - Handles sending messages.
 *
 * @returns {{
 *   messages: import("vue").Ref<import("@/interfaces").IMessage[]>,
 *   onSendHandler: (text: string) => Promise<void>
 * }}
 */
export const useChatRoomComponent = () => {
  // Get current nickname from local state/composable
  const { nickname }: IUseNickname = useNickname();

  // Create SignalR connection, passing nickname as access token
  const { messages, connect, sendMessage }: IUseSignalR = useSignalR(
    "/messenger/hub",
    nickname.value
  );

  // Connect to the SignalR hub once component mounts
  onMounted(connect);

  /**
   * Sends a chat message through the SignalR connection.
   * @param {string} text - The message to send
   * @returns {Promise<void>}
   */
  const onSendHandler = (text: string): Promise<void> => sendMessage(text);

  return {
    messages,
    onSendHandler,
  };
};
