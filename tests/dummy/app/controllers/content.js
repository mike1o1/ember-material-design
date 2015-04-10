import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

export default BaseDemoController.extend({
    demoName: 'content',

    init: function() {
        var content = [
            {name: 'hbs', content: 'content.hbs' }
        ];

        this.setSourceFiles(content);
    }

});
