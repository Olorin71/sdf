const fs = require('fs');
const path = require('path');

function Collect(dir = './src/pages/') {
	return fs.readdirSync(dir)
		.map(file => ({name: file.replace(/((^[0-9]+.)|((\.default)?\.md$))/g, ''), file, isDefault: /\.default\.md$/.test(file)}));
}

function MarkdownDependencyPlugin(dir = './src/pages/') {
	this.dir = dir;
	this.files = Collect(dir).map(file => file.file);
}

MarkdownDependencyPlugin.prototype.apply = function(compiler) {
	compiler.plugin("emit", (compilation, callback) => {
		this.files.forEach(file => {
			const pathToFile = path.join(compiler.context, this.dir, file);
			compilation.fileDependencies.push(pathToFile);
			fs.readFile(pathToFile, "utf8", (err, data) => {
				compilation.assets[file] = {
					source: () => data,
					size: () => data.length
				};
				callback();
			});
		});
	});
};

exports.MarkdownDependencyPlugin = MarkdownDependencyPlugin;
exports.Collect = Collect;
