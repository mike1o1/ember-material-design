import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

var CardController = BaseDemoController.extend({
    demoName: 'buttons',

    init: function() {
        var content = [
            {name: 'hbs', content: 'card.hbs' }
        ];

        this.setSourceFiles(content);
    }
});

export default CardController;
