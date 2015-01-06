define(
    [
        'backbone',
        'handlebars',
        'text!templates/stats.html'
    ],
    function (Backbone, Handlebars, statsTemplate) {
        return Backbone.View.extend({
            el: "#todoapp",
            template: Handlebars.compile(statsTemplate),
            initialize: function () {
                this.allCheckbox = this.$('#toggle-all')[0];
                this.$input = this.$('#new-todo');
                this.$footer = this.$('#footer');
                this.$main = this.$('#main');
            }
        });
    }
);
/**
 * Created by guldan on 1/6/15.
 */
