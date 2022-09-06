import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./index.css";
import { applicationIcons, ethereum } from "@formkit/icons";
// import { thirdPartyIcon } from "@some-other-icon-package";
import { plugin, defaultConfig } from "@formkit/vue";
import { createThemePlugin } from "@formkit/themes";
import axios from "axios";

// axios.defaults.headers['']

const app = createApp(App);
app.config.globalProperties.$axios = axios;
// .mount('#app')

createApp(App).use(router).use(plugin, defaultConfig).mount("#app");
