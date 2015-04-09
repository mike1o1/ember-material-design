import {
	moduleFor,
	test
}
from 'ember-qunit';

import Ember from 'ember';

moduleFor('service:icon', {
	// Specify the other units that are required for this test.
	// needs: ['service:foo']
});

function updateDefaults(svg) {
	svg = Ember.$(svg);

	svg[0].setAttribute('xmlns', 'http://www.w3.org/2000/svg');

	svg[0].setAttribute('fit', '');
	svg[0].setAttribute('height', '100%');
	svg[0].setAttribute('width', '100%');
	svg[0].setAttribute('preserveAspectRatio', 'xMidYMid meet');


	svg[0].setAttribute('viewBox', ('0 0 24 24'));

	svg.css({
		'pointer-events': 'none',
		'display': 'block'
	});


	return svg[0].outerHTML;
}

// Replace this with your real tests.
test('it exists', function(assert) {
	var service = this.subject();
	assert.ok(service);
});

test('should get a single svg icon', function(assert) {

	var icon,
		expected = updateDefaults('<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'),
		service = this.subject();

	Ember.run(() => {
		service.getIcon('cancel').then((result) => {
			icon = result;
		});
	});

	assert.equal(icon[0].outerHTML, expected);
});