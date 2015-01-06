define(
    [
        'backbone',
        'handlebars',
        'text!templates/todos.html'
    ],
    function (Backbone, Handlebars, todosTemplate) {
        return Backbone.View.extend({
            tagName: 'li',
            template: Handlebars.compile(todosTemplate),
            events: {
                'click .check': 'toggleDone',
                'dblclick label': 'edit',
                'click span.todo-destroy': 'clear',
                'keypress .edit': 'updateOnEnter',
                'blur .edit': 'close'
            },
            initialize: function () {
                this.listenTo(this.model, 'change', this.render);
            },
            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                this.$input = this.$('.edit');
                return this;
            }
        });
    }
);
