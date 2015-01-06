var app = app || {};

require.config({
    baseUrl: './js',
    paths: {
        jquery: 'libs/jquery/jquery-2.1.3.min',
        underscore: 'libs/underscore/underscore-min',
        handlebars: 'libs/handlebars/handlebars-v2.0.0',
        backbone: 'libs/backbone/backbone-min',
        localstorage: 'libs/backbone/backbone.localStorage-min',
        text: 'libs/requirejs/text'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        handlebars: {
            deps: ['jquery'],
            exports: 'Handlebars'
        },
        localstorage: {
            deps: ['backbone'],
            exports: 'LocalStorage'
        }
    }
});

require(['views/app'], function (AppView) {
    new AppView;
});
