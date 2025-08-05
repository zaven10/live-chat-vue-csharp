<template>
  <ion-item lines="none" class="outline-item textarea-box">
    <ion-textarea
      v-model.trim="message"
      :rows="3"
      placeholder="Type your message..."
      autofocus
      class="input-no-border textarea-box__item"
      slot="start"
    />
    <ion-button
      slot="end"
      @click="onSendHandler"
      :disabled="!message"
      fill="clear"
    >
      <ion-icon :icon="sendOutline" />
    </ion-button>
  </ion-item>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

import { IonItem, IonTextarea, IonButton, IonIcon } from "@ionic/vue";
import { sendOutline } from "ionicons/icons";

import { useMessageInputComponent, type IEmits } from "./index.script";

/**
 * Define emits interface for the component.
 *
 * @typedef {IEmits} IEmits
 * @property {(message: string) => void} send - Emitted when user sends a message.
 */
const emits = defineEmits<IEmits>();

/**
 * Use composable managing message input state and send handler.
 *
 * @param {typeof emits} emits - Vue emits to send message events upwards.
 * @returns {{
 *   message: import("vue").Ref<string>;
 *   onSendHandler: () => void;
 * }}
 */
const { onSendHandler, message } = useMessageInputComponent(emits);
</script>

<style scoped lang="scss" src="./index.scss"></style>
