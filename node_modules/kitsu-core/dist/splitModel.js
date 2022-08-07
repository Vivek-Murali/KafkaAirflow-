'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function splitModel(url) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!options.pluralModel) options.pluralModel = s => s;
  if (!options.resourceCase) options.resourceCase = s => s;
  const urlSegments = url.split('/');
  const resourceModel = urlSegments.pop();
  urlSegments.push(options.pluralModel(options.resourceCase(resourceModel)));
  const newUrl = urlSegments.join('/');
  return [resourceModel, newUrl];
}

exports.splitModel = splitModel;
