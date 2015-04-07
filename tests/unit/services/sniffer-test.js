import {
    moduleFor,
    test
    } from 'ember-qunit';

moduleFor('service:sniffer', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
    var service = this.subject();
    assert.ok(service);
});

test('it should return the correct vendor prefix based on the browser', function(assert) {
    var expectedPrefix;
    var ua = window.navigator.userAgent.toLowerCase();

    if (/chrome/i.test(ua) || /safari/i.test(ua) || /webkit/i.test(ua)) {
        expectedPrefix = 'Webkit';
    } else if (/firefox/i.test(ua)) {
        expectedPrefix = 'Moz';
    } else if (/ie/i.test(ua) || /trident/i.test(ua)) {
        expectedPrefix = 'Ms';
    }

    var service = this.subject();
    var vendorPrefix = service.get('vendorPrefix');

    assert.equal(expectedPrefix, vendorPrefix);
});

test('it should work with older version of webkit', function(assert) {

    var doc = {
        body: {
            style: {
                WebkitOpacity: '0'
            }
        }
    };

    var service = this.subject({
        document: $(doc)[0]
    });

    assert.equal(service.get('vendorPrefix'), 'webkit');

});

test('animations should be either true or false', function(assert) {
    var service = this.subject();
    assert.notEqual(service.get('animations'), undefined);
});

test('animations should be false when there are no animations style', function(assert) {
    var doc = {
        body: {
            style: {}
        }
    };

    var service = this.subject({
        document: $(doc)[0]
    });

    assert.equal(service.get('animations'), false);
});

test('animations should be true with vendor specific animations', function(assert) {
    var animationStyle = 'some_animation 2s linear';
    var doc = {
        body: {
            style: {
                WebkitAnimation: animationStyle,
                MozAnimation: animationStyle
            }
        }
    };

    var service = this.subject({
        document: $(doc)[0]
    });

    assert.equal(service.get('animations'), true);
});

test('animations should be true with w3c-style animations', function(assert) {
    var animationStyle = 'some_animation 2s linear';
    var doc = {
        body: {
            style: {
                animation: animationStyle
            }
        }
    };

    var service = this.subject({
        document: $(doc)[0]
    });

    assert.equal(service.get('animations'), true);

});

test('animations should be true on android with older body style properties', function(assert) {
    var doc = {
        body: {
            style: {
                webkitAnimation: ''
            }
        }
    };
    var win = {
        navigator: {
            userAgent: 'android 2'
        }
    };

    var service = this.subject({
        document: $(doc)[0],
        window: win
    });

    assert.equal(service.get('animations'), true);
});

test('animations should be true when an older version of webkit is used', function(assert) {
    var doc = {
        body: {
            style: {
                WebkitOpacity: '0'
            }
        }
    };

    var service = this.subject({
        document: $(doc)[0]
    });

    assert.equal(service.get('animations'), false);
});

test('transitions should be either true or false', function(assert) {
    var service = this.subject();

    assert.notEqual(service.get('transitions'), undefined);
});

test('transitions should be false when there is no transition style', function(assert) {
    var doc = {
        body: {
            style: {}
        }
    };

    var service = this.subject({
        document: $(doc)[0]
    });

    assert.equal(service.get('transitions'), false);
});

test('transitions should be true with vendor specific transitions', function(assert) {
    var transitionStyle = '1s linear all';
    var doc = {
        body: {
            style: {
                WebkitTransition: transitionStyle,
                MozTransition: transitionStyle
            }
        }
    };

    var service = this.subject({
        document: $(doc)[0]
    });

    assert.equal(service.get('transitions'), true);
});

test('transitions should be true with w3c-style transitions', function(assert) {
    var doc = {
        body: {
            style: {
                transition: '1s linear all'
            }
        }
    };

    var service = this.subject({
        document: $(doc)[0]
    });

    assert.equal(service.get('transitions'), true);
});

test('transitions should be true on android with older body style properties', function(assert) {
    var doc = {
        body: {
            style: {
                webkitTransition: ''
            }
        }
    };
    var win = {
        navigator: {
            userAgent: 'android 2'
        }
    };

    var service = this.subject({
        document: $(doc)[0],
        window: win
    });

    assert.equal(service.get('transitions'), true);
});
