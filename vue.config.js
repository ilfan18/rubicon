const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/rubicon/',
	outputDir:
		process.env.NODE_ENV === 'production'
			? __dirname + '/lib'
			: __dirname + '/demo',
	css: {
		extract: false,
	},
});
