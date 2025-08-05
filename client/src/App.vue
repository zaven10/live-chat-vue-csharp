<!--
  @file App.vue
  @description The root component of the Ionic + Vue application.
  This sets up the Ionic App container and renders the current route component.
-->

<template>
  <ion-app>
    <router-view />
  </ion-app>
</template>

<script setup lang="ts">
/**
 * Import IonApp from Ionic Vue.
 * This component provides the Ionic application shell.
 */
import { IonApp } from "@ionic/vue";
</script>
