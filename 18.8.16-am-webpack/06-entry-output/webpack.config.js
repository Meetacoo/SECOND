const path = require('path');

// 导出配置
module.exports = {
	// 配置警告
	mode:'development',
	// 指定文件入口
	// entry:'./src/index.js',
	// entry:'./src/test.js',
	entry:{
		main:'./src/page/common/index.js',
		one:'./src/page/one/index.js'
	},
	// 指定文件出口
	output:{
		// 目标文件名称
		// filename:'bundle.js',
		// filename:'test.js',
		// filename:'[name].[hash].main.js',
		filename:'[name].[chunkhash].main.js',
		// 出口文件存储路径
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				use:[{
					loader:'url-loader'
				}]
			}
		]
	}
}
// 打包：npx webpack --config webpack.config.js