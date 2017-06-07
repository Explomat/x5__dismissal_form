var packageSettings = require('./package.json');
var path = require('path');
var exportPath = '\\\\msk-kltn-app007\\d$\\WebSoft\\WebTutorServer\\wt\\web';
var remoteSourcePath = path.join(exportPath, 'x5__sources', packageSettings.name);
//var exportPath = path.join(__dirname, 'dist');

var build = {
	htmlFileName: 'pindex.html',
	localClientPath: path.join(__dirname, 'dist'),
	localServerPath: path.join(__dirname, 'server'),
	remoteClientPath: path.join(exportPath, packageSettings.name, 'client'),
	remoteServerPath: path.join(exportPath, packageSettings.name, 'server')
}

var source = {
	client: {
		remoteSourcePath: path.join(remoteSourcePath, 'client'),
		exclude: ['.git', 'dist', 'node_modules', 'server' ]
	},
	server: {
		remoteSourcePath: path.join(remoteSourcePath, 'server'),
		include: [ 'server' ]
	}
}

module.exports = {
	build: build,
	source: source
}
