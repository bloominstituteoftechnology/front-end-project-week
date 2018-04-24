'use strict';

const co = require('co');
const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');
const chokidar = require('chokidar');
const promisify = require('es6-promisify');

const fsStat = promisify(fs.stat);
const fsReadFile = promisify(fs.readFile);


const FileSystemAsyncLoader = nunjucks.Loader.extend({
    async: true,

    init: function(searchPaths, opts) {
        opts = opts || {};
        this.pathsToNames = {};

        if (searchPaths) {
            searchPaths = Array.isArray(searchPaths) ? searchPaths : [searchPaths];
            searchPaths = searchPaths.map(path.normalize);
        } else {
            searchPaths = ['.'];
        }

        this.searchPaths = searchPaths;
        this.noCache = !!opts.noCache;

        if (opts.watch) {
            this.watchDirs(searchPaths).catch(console.error);
        }
    },

    watchDirs: co.wrap(function*(searchPaths) {
        var paths = [];

        for (var i = 0; i < searchPaths.length; i++) {
            var fullPath = path.resolve(searchPaths[i]);
            var stat;
            try {
                stat = yield fsStat(fullPath);
            } catch (err) {
                stat = null;
            }
            if (stat && stat.isDirectory()) {
                paths.push(fullPath);
            }
        }

        var self = this;
        var watcher = chokidar.watch(paths);

        watcher.on('all', (event, fullPath) => {
            fullPath = path.resolve(fullPath);
            if (event === 'change' && fullPath in self.pathsToNames) {
                self.emit('update', self.pathsToNames[fullPath]);
            }
        });

        watcher.on('error', err => {
            console.error('Watcher error: ' + err);
        });
    }),

    getSourceAsync: co.wrap(function*(name) {
        var res = null;
        var paths = this.searchPaths;

        if (!name) {
            throw new Error('The `name` parameter is not specified: ' + name);
        }

        for (var i = 0; i < paths.length; i++) {
            var p = paths[i];
            var basePath = path.resolve(p);
            var fullPath = path.resolve(p, name);
            if (fullPath.indexOf(basePath) === 0) {
                var stat;
                try {
                    stat = yield fsStat(fullPath);
                } catch (err) {
                    stat = null;
                }

                if (stat && stat.isFile()) {
                    var data = yield fsReadFile(fullPath, 'utf-8');
                    res = {src: data, path: fullPath, noCache: this.noCache};
                    this.pathsToNames[fullPath] = name;
                    break;
                }
            }
        }
        return res;
    }),

    getSource: function(name, cb) {
        this.getSourceAsync(name)
            .then(function(res) {
                cb(null, res);
            })
            .catch(cb);
    }
});

module.exports = FileSystemAsyncLoader;
