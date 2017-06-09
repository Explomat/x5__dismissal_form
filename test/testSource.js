var integration = require('../integration/source');



integration.syncFiles();

const fs = require('fs');
const path = require('path');

var mm = require('micromatch');

var include = [path.resolve('dist/*.html').replace(/\\/g, '\/'), path.resolve('server/**').replace(/\\/g, '\/')];
var exclude = [path.resolve('.git/**').replace(/\\/g, '\/'), path.resolve('node_modules/**').replace(/\\/g, '\/')];


/*var walkSync = function(dir, filelist) {
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
    	var name = path.join(dir, file);
    	mm.any(src, include)
        if (fs.statSync(name).isDirectory()) {
        	console.log('dir :' + name);
            filelist.push(walkSync(name, []));
        }
        else { 
        	console.log('file :' + name);
        	filelist.push(name);
        }
    });
    return filelist;
};


fs.writeFileSync(
    path.join(__dirname, 'stats.json'),
    JSON.stringify(flist)
);*/

var arr = [
	"c:\\repos\\x5__dismissal_form\\dist\\index.html",

	"c:\\repos\\x5__dismissal_form\\server",
	"c:\\repos\\x5__dismissal_form\\server\\dismissal_form_submit.js",

	"c:\\repos\\x5__dismissal_form\\.babelrc",

	"c:\\repos\\x5__dismissal_form\\.git",
	"c:\\repos\\x5__dismissal_form\\.git\\COMMIT_EDITMSG",
	"c:\\repos\\x5__dismissal_form\\.git\\hooks\\applypatch-msg.sample",
	"c:\\repos\\x5__dismissal_form\\.git\\objects\\07\\df9d17fc3d4a9ed6ef078884ecbcc3def461c8",

	"c:\\repos\\x5__dismissal_form\\node_modules",
	"c:\\repos\\x5__dismissal_form\\node_modules\\babel-types\\.npmignore",

	"c:\\repos\\x5__dismissal_form\\src",
	"c:\\repos\\x5__dismissal_form\\src\\config.js",
	"c:\\repos\\x5__dismissal_form\\src\\components",
	"c:\\repos\\x5__dismissal_form\\src\\components\\App.jsx"
]


/*for (var i = arr.length - 1; i >= 0; i--) {
	//console.log(arr[i] + '\r\n', mm.any(arr[i].replace(/\\/g, '\/'), include));
	console.log(arr[i] + '\r\n', !mm.any(arr[i].replace(/\\/g, '\/'), exclude));
}
*/
//console.log(mm.isMatch('a\\abc', 'a\\*'))
//console.log(mm.isMatch('c:\\repos\\x5__dismissal_form\\dist\\index.html'.replace(/\\/g, '\/'), 'c:\\repos\\x5__dismissal_form\\dist\\*.html'.replace(/\\/g, '\/')));
//console.log('c:\\repos\\x5__dismissal_form\\dist\\*.html'.replace(/\\/g, '\/'));

console.log(mm.isMatch('c:/repos/x5__dismissal_form/node_modules', 'c:/repos/x5__dismissal_form/node_modules/**', { dot: true }));
console.log(mm.any('c:/repos/x5__dismissal_form/node_modules', ['c:/repos/x5__dismissal_form/node_modules/**'], { dot: true }));

