/**
 * @file router/index.ts
 * @description Sets up Vue Router with two routes: Nickname entry and Chat view.
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Import views used as route components
import MainView from "@/views/MainView/index.vue";
import ChatView from "@/views/ChatView/index.vue";

/**
 * @constant routes
 * @description Array of route definitions used by the Vue Router.
 *
 * @type {Array<RouteRecordRaw>}
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Nickname",
    component: MainView,
  },
  {
    path: "/chat",
    name: "Chat",
    component: ChatView,
  },
];

/**
 * @constant router
 * @description Vue Router instance configured with HTML5 history mode and defined routes.
 *
 * @see {@link https://router.vuejs.org/|Vue Router Documentation}
 */
const router = createRouter({
  history: createWebHistory(), // Uses browser's history API
  routes,
});

export default router;
