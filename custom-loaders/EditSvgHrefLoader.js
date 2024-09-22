const loaderUtils = require('loader-utils');
module.exports = function (source) {
  const { svgFileName, prefix } = loaderUtils.getOptions(this);

  const modifiedSource = source.replace(
    new RegExp(`#${prefix}`, 'g'),
    `${svgFileName}#${prefix}`
  );

  return modifiedSource;
};