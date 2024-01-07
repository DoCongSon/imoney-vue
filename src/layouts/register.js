import { DEFAULT_LAYOUT, AUTH_LAYOUT } from '../constant';
import { defineAsyncComponent } from 'vue';

// hàm defineAsyncComponent định nghĩa 1 component là 1 global component có thể được load bất đồng bộ
const registerLayout = (app) => {
  app.component(
    DEFAULT_LAYOUT,
    defineAsyncComponent(() => import('./default.vue'))
  );
  app.component(
    AUTH_LAYOUT,
    defineAsyncComponent(() => import('./auth.vue'))
  );
};

export default registerLayout;
