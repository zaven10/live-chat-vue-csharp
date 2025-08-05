<!--
  @file NicknamePage.vue
  @description This page displays a form for the user to enter their nickname.
  It uses Ionic components to maintain native-style UI across platforms.
-->

<template>
  <ion-page>
    <!-- Page header -->
    <ion-header>
      <ion-toolbar>
        <ion-title>Enter Nickname</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Main content area -->
    <ion-content :fullscreen="true" class="ion-padding">
      <!-- Custom component to handle nickname input -->
      <nickname-form />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
/**
 * Import Ionic components used in the page layout.
 */
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

/**
 * Import the NicknameForm component.
 * This component likely includes input fields and logic for nickname entry.
 */
import NicknameForm from "@/components/NicknameForm/index.vue";
</script>
