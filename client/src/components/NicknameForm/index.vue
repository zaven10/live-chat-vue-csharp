<template>
  <ion-grid>
    <ion-row
      class="ion-justify-content-center ion-align-items-center"
      style="min-height: 80vh"
    >
      <ion-col size="12" size-md="6">
        <div class="ion-text-center title-box title-box__margin">
          <ion-title size="large" class="title-box__item"
            >Let's start chat</ion-title
          >
        </div>
        <ion-input
          v-model.trim="name"
          label="Nickname"
          label-placement="floating"
          fill="outline"
          class="ion-margin-bottom ion-padding-horizontal"
          @keydown.enter="onSubmit"
        />
        <ion-button
          :disabled="isDisabled"
          @click="onSubmit"
          expand="block"
          size="large"
          class="ion-margin-top"
        >
          Continue
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonRow,
  IonTitle,
} from "@ionic/vue";

import { useNicknameFormComponent } from "./index.script";

/**
 * Composable managing nickname form state and submission.
 *
 * @property {Ref<string>} name - The nickname input value, trimmed on input.
 * @property {ComputedRef<boolean>} isDisabled - Computed flag to disable the Continue button (e.g., empty input).
 * @property {() => void} onSubmit - Handler to submit the nickname and navigate or update state.
 */
const { name, isDisabled, onSubmit } = useNicknameFormComponent();
</script>

<style scoped lang="scss" src="./index.scss"></style>
