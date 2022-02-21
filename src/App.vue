<template>
	<div id="app">
		<navbar></navbar>
		<router-view />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
	name: "App",
	components: {
		Navbar,
	},
};
</script>

<style>
body {
	background-color: #f2f3f5;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
		"Segoe UI Symbol";
	color: #34495e;
	-webkit-font-smoothing: antialiased;
}

.container {
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
}

@media (min-width: 768px) {
	.container {
		width: 750px;
	}
}

@media (min-width: 992px) {
	.container {
		width: 970px;
	}
}

@media (min-width: 1200px) {
	.container {
		width: 1170px;
	}
}
</style>
