/**
 * @interface IMessage
 * @description Represents a single chat message sent by a user.
 */
export interface IMessage {
  /**
   * The nickname or identifier of the user who sent the message.
   */
  user: string;

  /**
   * The text content of the chat message.
   */
  message: string;

  /**
   * ISO 8601 timestamp indicating when the message was sent.
   * Example: "2025-08-05T12:34:56.000Z"
   */
  timestamp: string;
}
