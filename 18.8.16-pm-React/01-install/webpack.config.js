const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 导出配置
module.exports = {
	// 配置警告
	mode:'development',
	// 指定文件入口
	entry:'./src/index.js',
	// entry:'./src/test.js',
	/*entry:{
		main:'./src/index.js'
	},*/
	// 指定文件出口
	output:{
		// 目标文件名称
		// filename:'bundle.js',
		// filename:'test.js',
		// filename:'[name].[hash].main.js',
		filename:'[name].bundle.js',
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
			},
			{
                test:/\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }               
            }
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			// 默认生成文件名字
			template:'./src/index.html',
			filename:'index.html',
			inject:true,
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