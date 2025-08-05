<template>
  <ion-list>
    <ion-item v-for="msg in messages" :key="`${msg.timestamp}_${msg.user}`">
      <ion-label>
        <div
          style="
            display: flex;
            align-items: baseline;
            gap: 8px;
            margin-bottom: 6px;
          "
        >
          <!-- Display username with larger font -->
          <strong v-text="msg.user" style="font-size: 1.5em" />

          <!-- Display formatted timestamp in smaller, gray text -->
          <span
            style="color: gray; font-size: 0.75em"
            v-text="$formatTime(msg.timestamp)"
          />
        </div>
        <!-- Display message text -->
        <div v-text="msg.message" />
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import { IonList, IonItem, IonLabel } from "@ionic/vue";

import { $formatTime } from "@/utils";

/**
 * IMessageProps defines the expected shape of the messages prop:
 * - messages: Array of message objects with user, message, and timestamp properties.
 */
import { type IMessageProps } from "./index.script";

// Define component props with strong typing
defineProps<IMessageProps>();
</script>
