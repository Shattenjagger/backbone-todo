define(
    [
        'jquery',
        'underscore',
        'backbone',
        'handlebars',
        'text!templates/todos.html'
    ],
    function ($, _, Backbone, Handlebars, todosTemplate) {
        console.log(Handlebars);
        var source = $("test-template").html();
        console.log(source);
        //var template = Handlebars.compile(todosTemplate);
        var template = Handlebars.compile(source);
        console.log(template);
        var context = {
            'test-data': "Hello, world!"
        };
        var html = template(context);
        console.log(html);
    }
);
