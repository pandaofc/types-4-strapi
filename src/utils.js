module.exports.pascalCase = (str) => {
  if (!str) return;
  const words = str.match(/[a-z]+/gi);
  return words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join('');
};

module.exports.isOptional = (attributeValue) => {
  // arrays are never null
  if (attributeValue.relation === 'oneToMany' || attributeValue.repeatable) {
    return false;
  }
  return attributeValue.required !== true;
};

module.exports.switchName = (string) => {
  const s = string.charAt(0).toLowerCase() + string.slice(1);
  return s.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
}