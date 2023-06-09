// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
	},
	modules: [
		'@vueuse/nuxt',
		[
			'@pinia/nuxt',
			{
				autoImports: [
					// 自动引入 `defineStore()`
					'defineStore',
					// 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
					['defineStore', 'definePiniaStore'],
				],
			},
		],
	],
});
