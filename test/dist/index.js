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

	function $all_in_one_css_injector(content){
		var styleNode = document.createElement("div");
		styleNode.innerHTML = '<br /><style type="text/css">' + content + '</style>';
		return styleNode = document.getElementsByTagName("head")[0].appendChild(styleNode.lastChild);
	}
	
	
	// c.js
	define("2", function(require, exports, module){
		module.exports = "c";
	});

	// d.styl
	define("3", function(require, exports, module){
		module.exports = $all_in_one_css_injector('.a {\n  position: absolute;\n}\n');
	});

	// e.tpl
	define("4", function(require, exports, module){
		module.exports = 'tpl\ntpl\ntpl';
	});

	// b.js
	define("5", function(require, exports, module){
		module.exports = "b";
	});

	// a.js
	define("1", function(require, exports, module){
		var b = require("5");
		
		module.exports = "a";
	});

	// index.js
	define("0", function(require, exports, module){
		var a = require("1");
		var c = require("2");
		require("3");
		require("4");
		
		module.exports = "index";
	});

	return require("0");
})());