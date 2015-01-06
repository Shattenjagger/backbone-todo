define(
    [
        'backbone',
        'handlebars',
        'views/todo',
        'collections/todos',
        'text!templates/stats.html'
    ],
    function (Backbone, Handlebars, TodoView, TodoCollection, statsTemplate) {
        return Backbone.View.extend({
            el: "#todoapp",
            template: Handlebars.compile(statsTemplate),
            initialize: function () {
                this.allCheckbox = this.$('#toggle-all')[0];
                this.$input = this.$('#new-todo');
                this.$footer = this.$('#footer');
                this.$main = this.$('#main');
                this.$todo_list = this.$('#todo-list');

                this.Todos = new TodoCollection();

                this.listenTo(this.Todos, 'add', this.addOne);
                this.listenTo(this.Todos, 'reset', this.addAll);
            },
            addOne: function (todo) {
                var view = new TodoView({model: todo});
                this.$todo_list.append(view.render().el);
            },
            addAll: function () {
                this.$todo_list.html('');
                this.Todos.each(this.addOne, this);
            }

        });
    }
);
/**
 * Created by guldan on 1/6/15.
 */
