<template>
	<form @submit.prevent="handleSubmit">
		<h3>Login</h3>
		<input type="email" placeholder="email" v-model="userEmail" />
		<input type="password" placeholder="password" v-model="userPassword" />
		<div v-if="error" class="error">{{ error }}</div>
		<button v-if="!isPending">Log in</button>
		<button v-if="isPending" disabled>Loading...</button>
	</form>
</template>

<script>
import useLogin from "@/composables/useLogin";
import { ref } from "@vue/reactivity";
export default {
	setup() {
		const { error, login, isPending } = useLogin();

		const userEmail = ref("");
		const userPassword = ref("");

		const handleSubmit = async () => {
			const res = await login(userEmail.value, userPassword.value);
			if (!error.value) {
				console.log("user logged in");
			}
		};

		return { userEmail, userPassword, error, handleSubmit, isPending };
	},
};
</script>

<style></style>
