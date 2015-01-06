define(
    [
        'underscore',
        'backbone',
        'handlebars',
        'views/todo',
        'collections/todos',
        'text!templates/stats.html'
    ],
    function (_, Backbone, Handlebars, TodoView, TodoCollection, statsTemplate) {
        return Backbone.View.extend({
            el: "#todoapp",
            template: Handlebars.compile(statsTemplate),
            events: {
                'keypress #new-todo': 'createOnEnter',
                'click #clearCompleted': 'clearCompleted',
                'click #toggle-all': 'toggleAllComplete'
            },
            initialize: function () {
                this.allCheckbox = this.$('#toggle-all')[0];
                this.$input = this.$('#new-todo');
                this.$footer = this.$('#footer');
                this.$main = this.$('#main');
                this.$todo_list = this.$('#todo-list');

                this.Todos = new TodoCollection();
                this.TodoFilter = '';

                this.listenTo(this.Todos, 'add', this.addOne);
                this.listenTo(this.Todos, 'reset', this.addAll);
                this.listenTo(this.Todos, 'change:completed', this.filterOne);
                this.listenTo(this.Todos, 'filter', this.filterAll);
                this.listenTo(this.Todos, 'all', this.render);

                this.Todos.fetch();
            },
            render: function () {
                var completed = this.Todos.completed().length;
                var remaining = this.Todos.remaining().length;
                if (this.Todos.length) {
                    this.$main.show();
                    this.$footer.show();
                    this.$footer.html(this.template({
                        single_remaining: remaining === 1,
                        completed: completed,
                        remaining: remaining
                    }));
                    this.$('#filters li a')
                        .removeClass('selected')
                        .filter('[href="#/' + this.TodoFilter + '"]')
                        .addClass('selected');
                } else {
                    this.$main.hide();
                    this.$footer.hide();
                }
                this.allCheckbox.checked = !remaining;
            },
            addOne: function (todo) {
                var view = new TodoView({model: todo});
                this.$todo_list.append(view.render().el);
            },
            addAll: function () {
                this.$todo_list.html('');
                this.Todos.each(this.addOne, this);
            },
            filterOne: function (todo) {
                todo.trigger('visible');
            },
            filterAll: function () {
                this.Todos.each(this.filterOne, this);
            },
            newAttributes: function () {
                return {
                    title: this.$input.val().trim(),
                    order: this.Todos.nextOrder(),
                    completed: false
                };
            },
            createOnEnter: function (event) {
                if (event.which != 13 || !this.$input.val().trim()) return;
                this.Todos.create(this.newAttributes());
                this.$input.val('');
            },
            clearCompleted: function () {
                _.invoke(this.Todos.completed(), 'destroy');
                return false;
            },
            toggleAllComplete: function () {
                var completed = this.allCheckbox.checked;
                this.Todos.each(function (todo) {
                    todo.save({
                        completed: completed
                    });
                });
            }
        });
    }
);
/**
 * Created by guldan on 1/6/15.
 */
