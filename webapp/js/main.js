require.config({
    baseUrl: './js',
    paths: {
        jquery: 'libs/jquery/jquery-2.1.3.min.js',
        underscore: 'libs/underscore/underscore-min',
        handlebars: 'libs/handlebars/handlebars.runtime-v2.0.0',
        backbone: 'libs/backbone/backbone-min',
        text: 'libs/requirejs/text'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone'
        },
        handlebars: {
            deps: ['jquery'],
            exports: 'Handlebars'
        }
    }
});

require(['views/todo'], function () {
    console.log("We're here");
});

//require(['views/app'], function (AppView) {
//    var app_view = new AppView;
//})
