import { ref } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();
const user = ref(auth.currentUser);

onAuthStateChanged(auth, (u) => {
  if (u) {
    console.log('User is signed in');
    user.value = u;
  } else {
    user.value = null;
  }
});

const reloadUser = async () => {
  await auth.currentUser.reload();
};

const useUser = () => {
  return { user, reloadUser };
};

export { useUser };
