define(
    [
        'backbone',
        'localstorage',
        'models/todo'
    ],
    function (Backbone, LocalStorage, TodoModel) {
        var TodoList = Backbone.Collection.extend({
            model: TodoModel,
            localStorage: LocalStorage
        });
        return TodoList;
    }
);
