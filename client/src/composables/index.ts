/**
 * @file index.ts
 * @description Barrel file exporting key composables related to user nickname management and SignalR chat connection.
 */

import { useSignalR } from "./useSignalR";
import { useNickname } from "./useNickname";

/**
 * Export composables for managing nickname and SignalR real-time chat connection.
 */
export { useNickname, useSignalR };
