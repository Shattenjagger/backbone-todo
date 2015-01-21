define(
    [
        'backbone'
    ],
    function (Backbone) {
        return Backbone.Router.extend({
            routes: {
                '*page': 'setPage'
            },
            setPage: function (param) {
                console.log('Set page: ' + param);
                //app.TodoFilter = param;
                //app.Todos.trigger('filter');
            }
        });
    }
);