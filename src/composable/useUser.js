import { ref } from "vue";
import { auth } from "../configs/firebase";

const user = ref(auth.currentUser);

const reloadUser = async () => {
  await auth.currentUser.reload();
};

const useUser = () => {
  return { user, reloadUser };
};

export { useUser };
