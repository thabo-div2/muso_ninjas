<template>
	<form @submit.prevent="handleSubmit">
		<h3>Sign Up</h3>
		<input type="email" placeholder="email" v-model="userEmail" />
		<input type="text" placeholder="display name" v-model="displayName" />
		<input type="password" placeholder="password" v-model="userPassword" />
		<div v-if="error" class="error">{{ error }}</div>
		<button v-if="!isPending">Sign Up</button>
		<button v-if="isPending" disabled>Loading...</button>
	</form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "@/composables/useSignUp";

export default {
	setup() {
		const userEmail = ref("");
		const userPassword = ref("");
		const displayName = ref("");

		const { error, signup, isPending } = useSignup();

		const handleSubmit = async () => {
			const res = await signup(
				userEmail.value,
				userPassword.value,
				displayName.value,
			);
			if (!error.value) {
				console.log("user signed up");
			}
		};

		return {
			userEmail,
			userPassword,
			displayName,
			error,
			isPending,
			handleSubmit,
		};
	},
};
</script>

<style></style>
