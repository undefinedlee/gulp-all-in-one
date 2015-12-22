;(function(main){
	window["xxx"] = main;
})((function(){
	var mods = {};
	function require(id){
		return mods[id];
	}
	function define(id, factory){
		var module = {exports: {}};
		factory(require, module.exports, module);
		mods[id] = module.exports;
	}
	
	// index.js
	define("0", function(require, exports, module){
		var a = require("1");
		var c = require("2");
		
		module.exports = "index";
	});

	// a.js
	define("1", function(require, exports, module){
		var b = require("3");
		
		module.exports = "a";
	});

	// c.js
	define("2", function(require, exports, module){
		module.exports = "c";
	});

	// b.js
	define("3", function(require, exports, module){
		module.exports = "b";
	});

	return require("0");
})());