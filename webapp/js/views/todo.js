define(
    [
        'jquery',
        'underscore',
        'backbone',
        'handlebars',
        'text!templates/todos.html'
    ],
    function ($, _, Backbone, Handlebars, todosTemplate) {
        var TodoView = Backbone.View.extend({
            tagName: 'li',
            template: Handlebars.compile(todosTemplate),
            events: {
                'click .check': 'toggleDone',
                'dblclick div.todo-content': 'edit',
                'click span.todo-destroy': 'clear',
                'keypress .todo-input': 'updateOnEnter'
            }
        });
        return TodoView;
    }
);
