const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
		filename:'[name].[chunkhash].bundle.js',
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
	},
	plugins:[
		new HtmlWebpackPlugin({
			// 默认生成文件名字
			filename:'index.html',
			template:'./src/view/index.html',
			inject:'head',
			hash:true
		}),
		new CleanWebpackPlugin(['dist'])
	],
	devServer:{
		contentBase:'./dist',
		port:8080
	}
}
// 打包：npx webpack --config webpack.config.js