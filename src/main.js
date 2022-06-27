import { createApp } from "vue";
import App from "./App.vue";
import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App);
app.use(vue3GoogleLogin, {
  clientId:
    "352931034399-ht1i7mqefgrbsn67a4b1nm991bvat47l.apps.googleusercontent.com",
});
app.mount("#app");
