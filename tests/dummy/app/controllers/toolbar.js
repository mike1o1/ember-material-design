import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

export default BaseDemoController.extend({
    init: function() {
        var content = [
            {name: 'hbs', content: 'toolbar.hbs' }
        ];

        this.setSourceFiles(content);
    }

});
