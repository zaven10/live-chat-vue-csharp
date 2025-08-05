import { Ref, ref } from "vue";

/**
 * Emits interface for the message input component.
 * Defines the "onSend" event with the sent message as payload.
 */
export interface IEmits {
  /**
   * Emitted when the user sends a message.
   * @param e - The event name ("onSend")
   * @param message - The message text sent
   */
  (e: "onSend", message: string): void;
}

/**
 * Composable to manage the state and logic of the message input box.
 *
 * @param {IEmits} emits - Emits object to send events to the parent component.
 * @returns {{
 *   message: Ref<string>;
 *   onSendHandler: () => void;
 * }}
 * - message: Reactive string holding the current input value.
 * - onSendHandler: Function to emit the "onSend" event and clear input.
 */
export const useMessageInputComponent = (emits: IEmits) => {
  /** Reactive message input state */
  const message: Ref<string> = ref("");

  /**
   * Handler to send the message if not empty,
   * emits "onSend" event and resets the input value.
   */
  const onSendHandler = () => {
    if (!message.value) {
      return;
    }

    emits("onSend", message.value);

    message.value = "";
  };

  return {
    message,
    onSendHandler,
  };
};
