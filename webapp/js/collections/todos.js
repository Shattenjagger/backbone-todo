define(
    [
        'backbone',
        'localstorage',
        'models/todo'
    ],
    function (Backbone, LocalStorage, TodoModel) {
        var TodoList = Backbone.Collection.extend({
            model: TodoModel,
            localStorage: new LocalStorage('todos-backbone')
        });
        return TodoList;
    }
);
