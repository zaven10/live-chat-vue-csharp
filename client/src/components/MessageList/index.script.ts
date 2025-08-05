import { IMessage } from "@/interfaces";

/**
 * IMessageProps
 *
 * Props interface for components that receive an array of chat messages.
 *
 * @property {IMessage[]} messages - Array of message objects containing user, message, and timestamp.
 */
export interface IMessageProps {
  messages: IMessage[];
}
