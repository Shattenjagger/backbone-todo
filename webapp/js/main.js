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

require(['collections/todos'], function (TodoList) {
    var todo_list = new TodoList;
    todo_list.create({ title: 'Hello, world!', completed: true });
    console.log(todo_list);
})

//require(['views/app'], function (AppView) {
//    var app_view = new AppView;
//})
