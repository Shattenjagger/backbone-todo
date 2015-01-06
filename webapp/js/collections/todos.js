define(
    [
        'backbone',
        'localstorage',
        'models/todo'
    ],
    function (Backbone, LocalStorage, TodoModel) {
        console.log(typeof LocalStorage);
        var TodoList = Backbone.Collection.extend({
            model: TodoModel
        });
        return TodoList;
    }
);
