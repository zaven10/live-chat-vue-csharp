<template>
  <!-- Display the list of chat messages -->
  <message-list :messages="messages" />

  <!-- Input component for typing and sending messages -->
  <message-input @on-send="onSendHandler" />
</template>

<script setup lang="ts">
import MessageList from "@/components/MessageList/index.vue";
import MessageInput from "@/components/MessageInput/index.vue";

import { useChatRoomComponent } from "./index.script";

/**
 * Using the chat room composable to handle chat state and actions:
 * - `messages`: reactive array of chat messages to display
 * - `onSendHandler`: function to handle sending a new message
 */
const { messages, onSendHandler } = useChatRoomComponent();
</script>
