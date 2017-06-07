var project = require('../project.config');
var fsExtra = require('fs-extra');
var fs = require('fs');
var path = require('path');

function removeFiles(cb){
    fsExtra.remove(project.source.client.remoteClientSourcePath, function(err){
        if (err) return console.error(err);
        console.log(`Removing client source files success: ${project.build.remoteClientSourcePath}`);

        fsExtra.remove(project.source.server.remoteServerSourcePath, function(err){
            if (err) return console.error(err);
            console.log(`Removing server source files success: ${project.build.remoteServerSourcePath}`);
            if (cb){
                cb();
            }
        });
    });
}

function copyFiles(){
    var clientProj = project.source.client;
    var serverProj = project.source.server;

    var remoteClientSourcePath = clientProj.remoteSourcePath;
    var remoteServerSourcePath = serverProj.remoteSourcePath;
    var clientInclude = (clientProj.include || []).map(function(f) {
        return path.resolve(f);
    });
    var clientExclude = (clientProj.exclude || []).map(function(f) {
        return path.resolve(f);
    });
    var serverInclude = (serverProj.include || []).map(function(f) {
        return path.resolve(f);
    });
    var serverExclude = (serverProj.exclude || []).map(function(f) {
        return path.resolve(f);
    });

    var isIn = function(src, paths){
        for (var i = paths.length - 1; i >= 0; i--) {
            //console.log('src ----: ' + src.replace('\/', '\/\/'));
            //console.log('paths['+i+']-----: ' + paths[i]);

        	var is =
                src.replace('\/', '\/\/')
                .indexOf(paths[i].replace('\/', '\/\/'));
            if (is !== -1){
                console.log('-------is--------\r\n')
                return true;
            }
        }
        return false;
    }

    fsExtra.copy('c:\\repos\\x5__dismissal_form\\', remoteClientSourcePath, { filter: function(src, dest) {

        var isCopy = (isIn(src, clientInclude) || !clientInclude.length) && (!isIn(src, clientExclude) || !clientExclude.length);
        if (isCopy){
            console.log('Copying source' + src);
            return isCopy;
        }
    }}, function(err) {
        console.log(err);
    });
}
module.exports = {
    removeFiles: removeFiles,
    copyFiles: copyFiles
}
