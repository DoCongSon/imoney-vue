import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./router";
import registerLayout from "./layouts/register";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./configs/firebase.js";

let app;
onAuthStateChanged(auth, (user) => {
  if (!app) {
    app = createApp(App);
    app.use(router);

    registerLayout(app);

    app.mount("#app");
  }
});
