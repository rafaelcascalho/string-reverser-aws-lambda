'use strict';

console.log('[aws] loading function...');

exports.handler = async (event) => {
  console.log('[reverser] starting handler');

  let reverse = '';

  const body = JSON.parse(event.body);
  const string = body.string;
  const end = string.length - 1;

  for (let index = end; index > -1; index--) {
    reverse += string[index];
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      original: string,
      reversed: reverse,
    }),
  };

  console.log('[reverser] finished process. Returning result');

  return response;
};
