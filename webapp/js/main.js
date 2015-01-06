require.config({
    baseUrl: './js',
    paths: {
        jquery: 'libs/jquery/jquery-2.1.3.min',
        underscore: 'libs/underscore/underscore-min',
        handlebars: 'libs/handlebars/handlebars-v2.0.0',
        backbone: 'libs/backbone/backbone-min',
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
        }
    }
});

require(['models/todo'], function (TodoModel) {
    var model = new TodoModel;
    console.log(model);
    model.set({completed: true});
    console.log(model);
})

require(['views/app'], function (AppView) {
    var app_view = new AppView;
})
