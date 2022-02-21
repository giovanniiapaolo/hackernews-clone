import Vue from "vue";
import New from "./views/New.vue";
import Home from "./views/Home.vue";
import Single from "./views/Single.vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/story/:id",
			name: "Single",
			component: Single,
		},
		{
			path: "/new",
			name: "New",
			component: New,
		},
	],
});
