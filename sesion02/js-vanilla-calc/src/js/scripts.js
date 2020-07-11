const title = document.querySelector('h1');
const n1 = document.querySelector('#primer-numero');
const n2 = document.querySelector('#segundo-numero');
const sumButton = document.querySelector('#sum-button');
const resButton = document.querySelector('#res-button');
const resultNode = document.querySelector('#result');

sumButton.addEventListener('click', function () {
  const n1Int = parseInt(n1.value);
  const n2Int = parseInt(n2.value);

  const result = n1Int + n2Int;
  console.log(result);

  const textContent = document.createTextNode(result);
  const spanElement = document.createElement('span');
  spanElement.appendChild(textContent);

  // eliminar cuando ya haya resultado
  if (resultNode.childNodes.length > 3) {
    resultNode.removeChild(resultNode.childNodes[3]);
  }

  resultNode.appendChild(spanElement);
});

resButton.addEventListener('click', function () {
  const n1Int = parseInt(n1.value);
  const n2Int = parseInt(n2.value);

  const result = n1Int - n2Int;
  console.log(result);

  const textContent = document.createTextNode(result);
  const spanElement = document.createElement('span');
  spanElement.appendChild(textContent);

  // eliminar cuando ya haya resultado
  if (resultNode.childNodes.length > 3) {
    resultNode.removeChild(resultNode.childNodes[3]);
  }

  resultNode.appendChild(spanElement);
});

title.addEventListener('click', function () {
  console.log('click sobre el titulo');
});
