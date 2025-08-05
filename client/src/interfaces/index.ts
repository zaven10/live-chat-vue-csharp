/**
 * @file index.ts
 * @description Barrel file for exporting all shared interfaces related to chat functionality.
 * This simplifies imports by providing a centralized access point.
 */

import { IMessage } from "./IMessage.interface";
import { IUseNickname } from "./IUseNickname.interface";
import { IUseSignalR } from "./IUseSignalR.interface";

/**
 * Export all interfaces for use throughout the application.
 */
export type { IMessage, IUseNickname, IUseSignalR };
