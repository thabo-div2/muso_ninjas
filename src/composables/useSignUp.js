import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);
const isPending = ref(false);

const signup = async (userEmail, userPassword, displayName) => {
	error.value = null;

	try {
		const res = await projectAuth.createUserWithEmailAndPassword(
			userEmail,
			userPassword,
		);
		isPending.value = true;
		if (!res) {
			throw new Error("Could not complet the signup");
		}

		await res.user.updateProfile({ displayName });
		isPending.value = false;
		error.value = null;

		return res;
	} catch (err) {
		console.log(err.message);
		error.value = err.message;
		isPending.value = false;
	}
};

const useSignup = () => {
	return { error, signup, isPending };
};

export default useSignup;
