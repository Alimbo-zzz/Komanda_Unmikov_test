import { createApp } from 'vue'
import App from '@/App.vue'
import router from "@/plugins/router";
import vuex from '@/plugins/vuex';
import VueSocialSharing from 'vue-social-sharing'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoTelegramPlane, HiSolidMail, BiWhatsapp, FaVk } from "oh-vue-icons/icons";
import * as FaIcons from "oh-vue-icons/icons/fa";

const app = createApp(App);

// icons
const Fa = Object.values({ ...FaIcons });
addIcons(...Fa, CoTelegramPlane, HiSolidMail, FaVk, BiWhatsapp);
app.component("v-icon", OhVueIcon);


app.use(vuex);
app.use(VueSocialSharing);
app.use(router);
app.mount('#app');
