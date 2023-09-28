import { createApp } from "vue";
import App from "./App.vue";

//Vue.config.productionTip = false;
import "@progress/kendo-ui";
import "@progress/kendo-theme-default/dist/all.css";

import { AutoComplete } from "@progress/kendo-vue-dropdowns";

const app = createApp(App).component("AutoComplete", AutoComplete);

app.mount("#app");
