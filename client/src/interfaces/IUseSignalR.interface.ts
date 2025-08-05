import { Ref } from "vue";
import { IMessage } from "./IMessage.interface";

/**
 * @interface IUseSignalR
 * @description Defines the structure of a SignalR composable for real-time chat functionality.
 */
export interface IUseSignalR {
  /**
   * Reactive reference holding the list of chat messages.
   */
  messages: Ref<IMessage[]>;

  /**
   * Reactive reference indicating whether the SignalR connection is active.
   */
  connected: Ref<boolean>;

  /**
   * Reactive reference holding an error message string, or null if no error exists.
   */
  error: Ref<string | null>;

  /**
   * Establishes a SignalR connection asynchronously.
   *
   * @returns {Promise<void>} Resolves when the connection is successfully established.
   */
  connect: () => Promise<void>;

  /**
   * Sends a chat message over the SignalR connection asynchronously.
   *
   * @param {string} message - The message text to send.
   * @returns {Promise<void>} Resolves when the message is sent successfully.
   */
  sendMessage: (message: string) => Promise<void>;
}
