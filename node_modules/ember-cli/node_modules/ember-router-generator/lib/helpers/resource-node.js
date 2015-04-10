var builders         = require('recast').types.builders;
var newFunction      = require('./new-function-expression');
var routeOptionsNode = require('./route-options-node');

module.exports = function resourceNode(name, options) {
  options = options || {};

  var node = builders.expressionStatement(
    builders.callExpression(
      builders.memberExpression(
        builders.thisExpression(),
        builders.identifier('resource'),
        false
      ),
      [builders.literal(name)]
    )
  );

  if (options.path) {
    node.expression.arguments.push(routeOptionsNode(options));
  }

  node.expression.arguments.push(newFunction());

  return node;
};
