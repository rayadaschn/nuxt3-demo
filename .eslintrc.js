module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	overrides: [],
	parser: 'vue-eslint-parser', // 修改解析器
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser', // 添加解析器
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'vue/multi-word-component-names': ['off'],
	},
};
