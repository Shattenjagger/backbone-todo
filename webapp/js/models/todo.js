define(
    [
        'backbone'
    ],
    function (Backbone) {
        var TodoModel = Backbone.View.extend({
            tagName: 'li',
            template: Handlebars.compile(todosTemplate),
            events: {
                'click .check': 'toggleDone',
                'dblclick div.todo-content': 'edit',
                'click span.todo-destroy': 'clear',
                'keypress .todo-input': 'updateOnEnter'
            }
        });
        return TodoModel;
    }
);
