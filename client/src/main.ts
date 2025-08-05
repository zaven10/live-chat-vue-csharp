/**
@file Entry point of the Vue application.
Sets up and mounts the Vue app with IonicVue and Vue Router.
*/

// Import Vue's `createApp` method to initialize the application
import { createApp } from "vue";

// Import the root component
import App from "./App.vue";

// Import the Vue Router instance
import router from "./router";

// Import IonicVue to enable Ionic components and features in Vue
import { IonicVue } from "@ionic/vue";

// Core Ionic CSS required for the application to function
import "@ionic/vue/css/core.css";

// Basic CSS for consistent styling across browsers
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

// Optional utility CSS classes for layout and styling
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

// Import Ionicons to enable icon usage within Ionic components
import "ionicons/icons";

// Create the Vue application using the root App component
const app = createApp(App);

/**
 * Use the IonicVue plugin to provide Ionic-specific components and configuration.
 */
app.use(IonicVue);

/**
 * Use the Vue Router instance to handle page navigation.
 */
app.use(router);

/**
 * Wait for the router to be ready before mounting the app.
 * This ensures that the correct route is loaded on initial render.
 */
router.isReady().then(() => {
  app.mount("#app"); // Mount the app to the HTML element with id="app"
});
