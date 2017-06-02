var packageSettings = require('./package.json');
var path = require('path');
var exportPath = '\\\\msk-kltn-app007\\d$\\WebSoft\\WebTutorServer\\wt\\web';
//var exportPath = path.join(__dirname, 'dist');

module.exports = {
	htmlFileName: 'pindex.html',
	localClientPath: path.join(__dirname, 'dist'),
	localServerPath: path.join(__dirname, 'server'),
	remoteClientPath: path.join(exportPath, packageSettings.name, 'client'),
	remoteServerPath: path.join(exportPath, packageSettings.name, 'server')
}
