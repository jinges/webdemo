var url = '../common/app/controllers';
require.config({
	paths: {
		zepto:  '../lib/zepto.min',
		uploadlib: '../lib/lrz.bundle',
		chunk1: '../lib/1.chunk',
		chunk2: '../lib/2.chunk',
		controlls: './controllers',
		models: './app/models',
		alert:  url+'/alertController',
		configer:  '../common/configer'
	},
	shim: {
		zepto: {
			exports:'$'
		},
		uploadlib: {
			exports: 'lrz'
		},
		chunk1: {
			exports: '1.chunk'
		},
		chunk2: {
			exports: '2.chunk'
		}
	}
	// ,urlArgs: "bust=" +  (new Date()).getTime()
});