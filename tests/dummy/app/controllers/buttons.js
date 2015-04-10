import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

var ButtonsController = BaseDemoController.extend({
    demoName: 'buttons',

    init: function() {
        var content = [
            {name: 'hbs', content: 'buttons.hbs' },
            {name: 'controller', content: 'buttons-controller.js' }
        ];

        this.setSourceFiles(content);
    }
});

export default ButtonsController;
