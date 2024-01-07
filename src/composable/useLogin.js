import { auth } from '../configs/firebase';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { ref, reactive } from 'vue';

const error = reactive({ code: null, message: null });
const isPending = ref(false);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const loginWithEmailAndPassword = async ({ email, password }) => {
  error.code = null;
  error.message = null;
  isPending.value = true;
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    error.code = err.code;
    error.message = err.message;
  } finally {
    isPending.value = false;
  }
};

const loginWithGoogle = async () => {
  error.code = null;
  error.message = null;
  isPending.value = true;
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log({ token, user });
  } catch (err) {
    console.log(err);
    error.code = err.code;
    error.message = err.message;
  } finally {
    isPending.value = false;
  }
};

const loginWithGithub = async () => {
  error.code = null;
  error.message = null;
  isPending.value = true;
  try {
    const result = await signInWithPopup(auth, githubProvider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log({ token, user });
  } catch (err) {
    console.log(err);
    error.code = err.code;
    error.message = err.message;
  } finally {
    isPending.value = false;
  }
};

const useLogin = () => {
  return { error, isPending, loginWithEmailAndPassword, loginWithGoogle, loginWithGithub };
};

export { useLogin };
