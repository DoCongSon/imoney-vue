import { auth } from '@/configs/firebase';
import { signOut } from 'firebase/auth';
import { ref, reactive } from 'vue';

const error = reactive({ code: null, message: null });
const isPending = ref(false);

const logout = async () => {
  error.code = null;
  error.message = null;
  isPending.value = true;
  try {
    await signOut(auth);
  } catch (err) {
    error.code = err.code;
    error.message = err.message;
  } finally {
    isPending.value = false;
  }
};

const useSignout = () => {
  return { error, isPending, logout };
};

export { useSignout };
