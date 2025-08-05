<!--
  @file ChatRoomPage.vue
  @description This page renders the chat room interface using Ionic layout components
  and a custom <chat-room> component for messaging functionality.
-->

<template>
  <!--
    ion-page wraps the entire view, enabling Ionic routing and lifecycle hooks.
  -->
  <ion-page>
    <!--
      ion-header displays the page's header bar.
    -->
    <ion-header>
      <ion-toolbar>
        <ion-title>Chat Room</ion-title>
      </ion-toolbar>
    </ion-header>

    <!--
      ion-content holds the scrollable content area.
      The chat-room component is rendered inside.
    -->
    <ion-content :fullscreen="true" class="ion-padding">
      <chat-room />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
/**
 * Import Ionic UI components for layout and structure.
 */
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

/**
 * Import the custom ChatRoom component which handles message display and interaction.
 */
import ChatRoom from "@/components/ChatRoom/index.vue";

/**
 * Import and invoke the composable useChatView, which likely handles:
 * - lifecycle hooks (e.g., onMounted)
 * - socket setup
 * - chat data initialization
 */
import { useChatView } from "./index.script";

// Initialize view-specific logic for the chat room page.
useChatView();
</script>
