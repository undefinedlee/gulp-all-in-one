'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var allInOne = require('all-in-one');

module.exports = function (name) {
    return through.obj(function (chunk, enc, callback) {
        if (chunk.isNull()) {
            this.push(chunk);
            return callback();
        }

        if (chunk.isStream()) {
            this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return callback();
        }

        if (chunk.history.length !== 1) {
            this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Must first'));
            return callback();
        }

        allInOne({
        	name: name,
        	src: chunk.history[0]
        }, function(content){
        	chunk.contents = new Buffer(content);
        	this.push(chunk);
        	callback();
        }.bind(this));
    });
};