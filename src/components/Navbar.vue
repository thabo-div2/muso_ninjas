<template>
	<div class="navbar">
		<nav>
			<img src="@/assets/ninja.png" />
			<h1><router-link :to="{ name: 'Home' }">Muso Ninjas</router-link></h1>
			<div class="links">
				<button>Logout</button>
				<router-link :to="{ name: 'Signup' }" class="btn">Sign Up</router-link>
				<router-link :to="{ name: 'Login' }" class="btn">Log In</router-link>
			</div>
		</nav>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
	padding: 16px 10px;
	margin-bottom: 60px;
	background: #fff;
}
nav {
	display: flex;
	align-items: center;
	max-width: 1200px;
	margin: 0 auto;
}
nav h1 {
	margin-left: 20px;
}
nav .links {
	margin-left: auto;
}
nav .links a,
button {
	margin-left: 16px;
	font-size: 14px;
}
nav img {
	max-height: 60px;
}
</style>
