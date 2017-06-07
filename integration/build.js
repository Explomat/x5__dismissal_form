var project = require('../project.config');
var fsExtra = require('fs-extra');

function removeAllFiles(){
    try {
    	fsExtra.removeSync(project.build.remoteClientPath);
        fsExtra.removeSync(project.build.remoteServerPath);
    	console.log(`Removing build files success: ${project.common.remotePath}`);
    } catch(err) {
        return console.log(err);
    }
}

function copyServerFiles(){
    fsExtra.copy(project.build.localServerPath, project.build.remoteServerPath, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log(`Copying server build files success: ${project.build.remoteServerPath}`);
    });
}

module.exports = {
    removeAllFiles: removeAllFiles,
    copyServerFiles: copyServerFiles
}
