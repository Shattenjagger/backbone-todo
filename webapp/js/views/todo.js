define(
    [
        'jquery',
        'underscore',
        'backbone',
        'handlebars',
        'text!templates/todos.html'
    ],
    function ($, _, Backbone, Handlebars, todosTemplate) {
        var template = Handlebars.compile(todosTemplate);
        console.log(template);
        var context = {
            done: true
        };
        var html = template(context);
        console.log(html);
    }
);
