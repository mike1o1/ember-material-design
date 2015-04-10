import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

export default BaseDemoController.extend({

    demoName: 'checkbox',

    data: {
        cb1: true,
        cb2: false,
        cb3: false,
        cb4: true,
        cb5: false
    }
});
