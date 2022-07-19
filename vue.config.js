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

module.exports = {
	chainWebpack: (config) => {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
		types.forEach((type) =>
			addStyleResource(config.module.rule('scss').oneOf(type))
		);
	},
};

function addStyleResource(rule) {
	rule
		.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [path.resolve(__dirname, './src/assets/styles/import.scss')],
		});
}
