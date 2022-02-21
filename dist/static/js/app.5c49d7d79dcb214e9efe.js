webpackJsonp(
	[1],
	{
		"9lOP": function (t, e) {},
		Ms5w: function (t, e) {},
		NHnr: function (t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			var s = n("7+uW"),
				o = {
					render: function () {
						var t = this.$createElement,
							e = this._self._c || t;
						return e(
							"div",
							{ staticClass: "pure-menu pure-menu-horizontal" },
							[
								e(
									"div",
									{ staticClass: "container" },
									[
										e(
											"router-link",
											{
												staticClass:
													"pure-menu-heading pure-menu-link",
												attrs: { to: { path: "/" } },
											},
											[this._v("Top")]
										),
										this._v(" "),
										e(
											"ul",
											{ staticClass: "pure-menu-list" },
											[
												e(
													"li",
													{
														staticClass:
															"pure-menu-item",
													},
													[
														e(
															"router-link",
															{
																staticClass:
																	"pure-menu-link",
																attrs: {
																	to: {
																		path: "/new",
																	},
																},
															},
															[this._v("New")]
														),
													],
													1
												),
											]
										),
									],
									1
								),
							]
						);
					},
					staticRenderFns: [],
				};
			var a = {
					name: "App",
					components: {
						Navbar: n("VU/8")(
							{ name: "Navbar" },
							o,
							!1,
							function (t) {
								n("RBeu");
							},
							"data-v-5ebdbc0c",
							null
						).exports,
					},
				},
				r = {
					render: function () {
						var t = this.$createElement,
							e = this._self._c || t;
						return e(
							"div",
							{ attrs: { id: "app" } },
							[e("navbar"), this._v(" "), e("router-view")],
							1
						);
					},
					staticRenderFns: [],
				};
			var i = n("VU/8")(
					a,
					r,
					!1,
					function (t) {
						n("Rivh");
					},
					null,
					null
				).exports,
				c = n("NYxO"),
				u = n("mtWM"),
				l = n.n(u),
				m = {
					fetch_top_stories: function (t) {
						var e = t.commit;
						l.a
							.get(
								"https://hacker-news.firebaseio.com/v0/topstories.json"
							)
							.then(function (t) {
								t.data.slice(0, 25).forEach(function (t) {
									l.a
										.get(
											"https://hacker-news.firebaseio.com/v0/item/" +
												t +
												".json"
										)
										.then(function (t) {
											e("APPEND_TOP_STORY", t);
										})
										.catch(function (t) {
											console.log(t);
										});
								});
							})
							.catch(function (t) {
								console.log(t);
							});
					},
					fetch_new_stories: function (t) {
						var e = t.commit;
						l.a
							.get(
								"https://hacker-news.firebaseio.com/v0/newstories.json"
							)
							.then(function (t) {
								t.data.slice(0, 25).forEach(function (t) {
									l.a
										.get(
											"https://hacker-news.firebaseio.com/v0/item/" +
												t +
												".json"
										)
										.then(function (t) {
											e("APPEND_NEW_STORY", t);
										})
										.catch(function (t) {
											console.log(t);
										});
								});
							})
							.catch(function (t) {
								console.log(t);
							});
					},
				};
			s.a.use(c.a);
			var h = new c.a.Store({
					state: { topStories: [], newStories: [] },
					mutations: {
						APPEND_TOP_STORY: function (t, e) {
							t.topStories.push(e);
						},
						APPEND_NEW_STORY: function (t, e) {
							t.newStories.push(e);
						},
					},
					actions: m,
				}),
				_ = {
					render: function () {
						var t = this,
							e = t.$createElement,
							n = t._self._c || e;
						return n(
							"div",
							{ staticClass: "story" },
							[
								n("span", { staticClass: "score" }, [
									t._v(t._s(t.story.data.score)),
								]),
								t._v(" "),
								n(
									"router-link",
									{
										attrs: {
											to: {
												path:
													"/story/" + t.story.data.id,
											},
										},
									},
									[
										t._v(t._s(t.story.data.title)),
										n("span", [
											t._v(
												t._s(
													t._f("host")(
														t.story.data.url
													)
												)
											),
										]),
									]
								),
								n("br"),
								t._v(" "),
								n("span", { staticClass: "meta" }, [
									t._v(
										"\n\t\tby " +
											t._s(t.story.data.by) +
											" | " +
											t._s(t.story.data.time) +
											" Ago |\n\t\t" +
											t._s(t.story.data.descendants) +
											" comments\n\t"
									),
								]),
							],
							1
						);
					},
					staticRenderFns: [],
				};
			var d = n("VU/8")(
					{ name: "Item", props: ["story"] },
					_,
					!1,
					function (t) {
						n("Ms5w");
					},
					"data-v-07cef183",
					null
				).exports,
				f = {
					name: "New",
					components: { item: d },
					data: function () {
						return {
							err: "",
							stories: this.$store.state.newStories,
						};
					},
					created: function () {
						0 === this.$store.state.newStories.length &&
							this.$store.dispatch("fetch_new_stories");
					},
				},
				p = {
					render: function () {
						var t = this.$createElement,
							e = this._self._c || t;
						return e(
							"div",
							{ staticClass: "container" },
							this._l(this.stories, function (t) {
								return e("item", {
									key: t.data.id,
									attrs: { story: t },
								});
							}),
							1
						);
					},
					staticRenderFns: [],
				},
				v = n("VU/8")(f, p, !1, null, null, null).exports,
				y = {
					name: "home",
					components: { item: d },
					data: function () {
						return {
							err: "",
							stories: this.$store.state.topStories,
						};
					},
					created: function () {
						0 === this.$store.state.topStories.length &&
							this.$store.dispatch("fetch_top_stories");
					},
				},
				w = {
					render: function () {
						var t = this.$createElement,
							e = this._self._c || t;
						return e(
							"div",
							{ staticClass: "container" },
							this._l(this.stories, function (t) {
								return e("item", {
									key: t.data.id,
									attrs: { story: t },
								});
							}),
							1
						);
					},
					staticRenderFns: [],
				},
				b = n("VU/8")(y, w, !1, null, null, null).exports,
				g = {
					name: "Single",
					data: function () {
						return { story: {}, comments: [] };
					},
					created: function () {
						var t = this;
						l.a
							.get(
								"https://hacker-news.firebaseio.com/v0/item/" +
									this.$route.params.id +
									".json"
							)
							.then(function (e) {
								(t.story = e.data),
									(t.story.comments = []),
									t.story.kids.forEach(function (e) {
										l.a
											.get(
												"https://hacker-news.firebaseio.com/v0/item/" +
													e +
													".json"
											)
											.then(function (e) {
												t.$nextTick(function () {
													t.comments.push(e.data);
												});
											})
											.catch(function (t) {
												console.log(t);
											});
									});
							})
							.catch(function (t) {
								console.log(t);
							});
					},
				},
				k = {
					render: function () {
						var t = this,
							e = t.$createElement,
							n = t._self._c || e;
						return n(
							"div",
							{ staticClass: "container" },
							[
								n("h2", [t._v(t._s(t.story.title))]),
								t._v(" "),
								n("p", [t._v("Score: " + t._s(t.story.score))]),
								t._v(" "),
								n("p", [t._v(t._s(t.story.url))]),
								t._v(" "),
								t._l(t.comments, function (e) {
									return n("div", { key: e }, [
										n(
											"div",
											{ staticClass: "comment-wrap" },
											[
												n(
													"div",
													{
														staticClass:
															"comment-block",
													},
													[
														n(
															"p",
															{
																staticClass:
																	"comment-text",
															},
															[t._v(t._s(e.text))]
														),
														t._v(" "),
														n(
															"div",
															{
																staticClass:
																	"bottom-comment",
															},
															[
																n(
																	"div",
																	{
																		staticClass:
																			"comment-author",
																	},
																	[
																		t._v(
																			t._s(
																				e.by
																			)
																		),
																	]
																),
																t._v(" "),
																n(
																	"div",
																	{
																		staticClass:
																			"comment-date",
																	},
																	[
																		t._v(
																			t._s(
																				e.time
																			)
																		),
																	]
																),
															]
														),
													]
												),
											]
										),
									]);
								}),
							],
							2
						);
					},
					staticRenderFns: [],
				};
			var C = n("VU/8")(
					g,
					k,
					!1,
					function (t) {
						n("9lOP");
					},
					"data-v-d630676a",
					null
				).exports,
				E = n("/ocq");
			s.a.use(E.a);
			var S = new E.a({
				mode: "history",
				base: Object({ NODE_ENV: "production" }).BASE_URL,
				routes: [
					{ path: "/", name: "home", component: b },
					{ path: "/story/:id", name: "Single", component: C },
					{ path: "/new", name: "New", component: v },
				],
			});
			(s.a.config.productionTip = !1),
				new s.a({
					router: S,
					store: h,
					render: function (t) {
						return t(i);
					},
				}).$mount("#app");
		},
		RBeu: function (t, e) {},
		Rivh: function (t, e) {},
	},
	["NHnr"]
);
//# sourceMappingURL=app.5c49d7d79dcb214e9efe.js.map
