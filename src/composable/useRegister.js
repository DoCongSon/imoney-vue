import { ref, reactive } from 'vue';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from '../configs/firebase';

const error = reactive({ code: null, message: null });
const isPending = ref(false);

const signupWithEmail = async ({ email, password, displayName }) => {
  error.code = null;
  error.message = null;
  isPending.value = true;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName, emailVerified: true });
    return userCredential.user;
  } catch (err) {
    console.log(err);
    // error.code = err.code;
    error.message = err.message;
  } finally {
    isPending.value = false;
  }
};

const sendVerifiedEmail = async (user) => {
  error.code = null;
  error.message = null;
  isPending.value = true;
  console.log('sent validation');
  try {
    await sendEmailVerification(user);
  } catch (err) {
    console.log(err);
    error.code = err.code;
    error.message = err.message;
  } finally {
    isPending.value = false;
  }
};

const useRegister = () => {
  return { error, isPending, signupWithEmail, sendVerifiedEmail };
};

export { useRegister };
