var project = require('../project.config');
var fsExtra = require('fs-extra');
var path = require('path');

function removeFiles(cb){
    var rPath = project.source.remoteSourcePath;

    fsExtra.remove(rPath, function(err){
        if (err) return console.error(err);
        console.log(`Removing source files success: ${rPath}`);
        if (cb){
            cb();
        }
    });
}

function copyFiles(){
    var proj = project.source;

    var include = (proj.include || []).map(function(f) {
        return path.resolve(f);
    });
    var exclude = (proj.exclude || []).map(function(f) {
        return path.resolve(f);
    });

    var isIn = function(src, paths){
        for (var i = paths.length - 1; i >= 0; i--) {
        	var is =
                src.replace('\/', '\/\/')
                .indexOf(paths[i].replace('\/', '\/\/'));
            if (is !== -1){
                return true;
            }
        }
        return false;
    }

    fsExtra.copy(proj.localSourcePath, proj.remoteSourcePath, { filter: function(src, dest) {

        var isCopy = (isIn(src, include) || !include.length) && (!isIn(src, exclude) || !exclude.length);
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
