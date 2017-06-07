var project = require('../project.config');
var fsExtra = require('fs-extra');
var path = require('path');

function removeFiles(){
    try {
        console.log(project.build.remoteClientPath);
    	fsExtra.removeSync(project.build.remoteClientPath);
    	console.log(`Removing client build files success: ${project.build.remoteClientPath}`);
    } catch(err) {
        console.log(err);
    }
    try {
    	fsExtra.removeSync(project.build.remoteServerPath);
    	console.log(`Removing client build files success: ${project.build.remoteServerPath}`);
    } catch(err) {
    	console.log(err);
    }
}

function copyFiles(){
    try {
    	fsExtra.copySync(path.join(project.build.localClientPath, project.build.htmlFileName), path.join(project.build.remoteClientPath, project.build.htmlFileName));
    	console.log(`Copying client build files success: ${path.join(project.build.localClientPath, project.build.htmlFileName)}`);
    } catch(err) {
        console.log(err);
    }
    try {
    	fsExtra.copySync(project.build.localServerPath, project.build.remoteServerPath);
    	console.log(`Copying client build files success: ${project.build.localServerPath}`);
    } catch(err) {
    	console.log(err);
    }
}

module.exports = {
    removeFiles: removeFiles,
    copyFiles: copyFiles
}
