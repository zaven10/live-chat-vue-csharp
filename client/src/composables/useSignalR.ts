import { ref, Ref } from "vue";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";

import { IMessage, IUseSignalR } from "@/interfaces";

/**
 * useSignalR
 *
 * A composable that manages a SignalR hub connection for real-time chat messaging.
 * It maintains connection state, error handling, incoming messages, and provides methods
 * to connect and send messages.
 *
 * @param {string} hubUrl - The relative URL path of the SignalR hub endpoint.
 * @param {string} nickname - The nickname used as an access token and sender identity.
 * @returns {IUseSignalR} An object exposing reactive state and SignalR interaction methods.
 *
 * @example
 * ```ts
 * const { messages, connected, error, connect, sendMessage } = useSignalR("/chatHub", "Alice");
 * await connect();
 * sendMessage("Hello world!");
 * ```
 */
export const useSignalR = (hubUrl: string, nickname: string): IUseSignalR => {
  // Reactive list of received chat messages
  const messages: Ref<IMessage[]> = ref([]);

  // Reactive boolean indicating connection status
  const connected: Ref<boolean> = ref(false);

  // Reactive error message string or null if no error
  const error: Ref<string | null> = ref(null);

  // Internal SignalR connection instance
  let connection: HubConnection | null = null;

  /**
   * Initializes and starts the SignalR connection.
   * Sets up event handlers for incoming messages, reconnection, and disconnection.
   *
   * @returns {Promise<void>} Resolves when the connection is successfully started.
   */
  const connect = async (): Promise<void> => {
    connection = new HubConnectionBuilder()
      .withUrl(`http://localhost:3209${hubUrl}`, {
        accessTokenFactory: () => nickname,
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    // Listen for messages from the server
    connection.on(
      "ReceiveMessage",
      (user: string, message: string, timestamp: string) => {
        messages.value.push({ user, message, timestamp });
      }
    );

    // Handle connection close event
    connection.onclose(() => {
      connected.value = false;
      error.value = "Disconnected. Trying to reconnect...";
    });

    // Handle successful reconnection event
    connection.onreconnected(() => {
      connected.value = true;
      error.value = null;
    });

    try {
      await connection.start();
      connected.value = true;
      error.value = null;
    } catch (err) {
      error.value = `Connection error: ${err}`;
    }
  };

  /**
   * Sends a chat message to the server via the SignalR connection.
   *
   * @param {string} message - The message text to send.
   * @returns {Promise<void>} Resolves when the message is sent.
   */
  const sendMessage = async (message: string): Promise<void> => {
    if (connection && connected.value) {
      await connection.invoke("SendMessage", nickname, message);
    }
  };

  return { messages, connected, error, connect, sendMessage };
};
