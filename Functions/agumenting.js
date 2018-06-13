Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
  return this;
};

String.method('trim', function() {
  return this.replace(/^\s+|\s+$/g, '');
});

console.log('    abc      '.trim());

