var recast = require('recast');

function isRouteOrResource(node) {
  var callee = node.expression.callee;
  return callee.type === 'MemberExpression' && (callee.property.name === 'route' || callee.property.name === 'resource');
}

module.exports = function hasRoute(name, routes) {
  var nodePath = false;

  recast.visit(routes, {
    visitExpressionStatement: function(path) {
      var node = path.node;

      if (isRouteOrResource(node) &&
          node.expression.arguments[0].value === name) {
        nodePath = path;

        return false;
      } else {
        this.traverse(path);
      }
    }
  });

  return nodePath;
};
