var fs = require('fs');
var fsExtra = require('fs-extra')
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');
var project = require('./project.config');
var packageSettings = require('./package.json');

function _isArray(arr){
    return Object.prototype.toString.call(arr) === '[object Array]';
}

function removeBuildFilesFromServer(){
    try {
    	fsExtra.removeSync(project.remoteClientPath);
    	console.log(`Removing success: ${project.remoteClientPath}`);
    } catch(err) {

    }
    try {
    	fsExtra.removeSync(project.remoteServerPath);
    	console.log(`Removing success: ${project.remoteServerPath}`);
    } catch(err) {
    	console.log(err);
    }
}

function copySomeFilesToServer(){
    try {
    	fsExtra.copySync(path.join(project.localClientPath, project.htmlFileName), path.join(project.remoteClientPath, project.htmlFileName));
    	console.log(`Copying success: ${path.join(project.localClientPath, project.htmlFileName)}`);
    } catch(err) {

    }
    try {
    	fsExtra.copySync(project.localServerPath, project.remoteServerPath);
    	console.log(`Copying success: ${project.localServerPath}`);
    } catch(err) {
    	console.log(err);
    }
}

module.exports = {
    entry: {
        main: './src/index',
        react: ['react']
    },
    output: {
        path: project.remoteClientPath,
        publicPath: '/',
        filename: '[hash].bundle.js',
        library: '[name]'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        preLoaders: [
            {
                test: /(\.js$)|(\.jsx$)/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
            }
        ],
        loaders: [
            {
                test: /\.woff(2)?(\?)?(\d+)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: `url-loader?name=fonts/[hash].[name].[ext]&limit=65000&mimetype=application/font-woff&publicPath=/${packageSettings.name}/client/`
            },
            {
                test: /\.(ttf|eot|svg)(\?)?(\d+)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: `url-loader?name=fonts/[hash].[name].[ext]&limit=65000&publicPath=/${packageSettings.name}/client/`
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader")
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: `url-loader?name=images/[hash].[name].[ext]&publicPath=/${packageSettings.name}/client/`
            },
            {
                test: /\.jsx$/,
                loaders: ['react-hot', 'babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
            }
        ]
    },

    plugins: [
    	new webpack.DefinePlugin({
	      'process.env': {
	        'NODE_ENV': '"production"'
	      }
	    }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'react',
            filename: '[hash].react.js'
        }),
        new ExtractTextPlugin('style/[hash].style.min.css', { allChunks: true }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
        new webpack.optimize.UglifyJsPlugin({ mangle: false }),
        function build() {
            this.plugin('compile', function(statsData){
                removeBuildFilesFromServer();
            });
            this.plugin('done', function(statsData){
                var stats = statsData.toJson();

                if (!stats.errors.length) {
                    var shtml = fs.readFileSync(path.join(__dirname, 'dist', 'sindex.html'), "utf8");

                    //<script src=<%=getRelativePath(AbsoluteUrl("react.js")) %>></script>
                    var react = _isArray(stats.assetsByChunkName.react) ? stats.assetsByChunkName.react[0] : stats.assetsByChunkName.react;
                    var style = stats.assetsByChunkName.main[1];
                    var bundle = stats.assetsByChunkName.main[0];
                    var htmlOutput = shtml
                        .replace(/<script\s+src=(<%=)?(?:\s+)?([A-Za-z0-9_()]+)(["'])\/react\.js(["'])([()]+)(?:\s+)?(%>)?/i,
                            "<script src=$1$2$3" + react + "$4$5$6")
                        .replace(/<link\s+(?:rel=["']stylesheet["']\s+type=["']text\/css["'])?\s+href=(<%=)?(?:\s+)?([A-Za-z0-9_()]+)(["'])\/style\/style\.min\.css(["'])([()]+)(?:\s+)?(%>)?/i,
                            "<link rel=\"stylesheet\" type=\"text/css\" href=$1$2$3" + style + "$4$5$6")
                        .replace(/<script\s+src=(<%=)?(?:\s+)?([A-Za-z0-9_()]+)(["'])\/bundle\.js(["'])([()]+)(?:\s+)?(%>)?/i,
                            "<script src=$1$2$3" + bundle + "$4$5$6")

                    fs.writeFileSync(
                        path.join(__dirname, 'dist', project.htmlFileName),
                        htmlOutput
                    );
                    /*fs.writeFileSync(
                        path.join(__dirname, 'stats.json'),
                        JSON.stringify(stats)
                    );*/

                    copySomeFilesToServer();
                }
            });
        }
    ]
}
