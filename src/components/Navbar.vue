<template>
	<div class="pure-menu pure-menu-horizontal">
		<div class="container">
			<router-link
				:to="{ path: '/' }"
				class="pure-menu-heading pure-menu-link"
				>Top</router-link
			>

			<ul class="pure-menu-list">
				<li class="pure-menu-item">
					<router-link :to="{ path: '/new' }" class="pure-menu-link"
						>New</router-link
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "Navbar",
};
</script>

<style scoped>
.pure-menu {
	padding: 10px;
}

.pure-menu {
	background-color: #20232a;
	margin-bottom: 20px;
	text-align: center;
}

.pure-menu a {
	color: #ffffffcc;
	font-size: 15px;
	font-weight: 300;
	text-transform: none;
}

.pure-menu a:hover {
	background-color: transparent;
	color: #00d8ff;
}
</style>
