import { marked } from 'marked';

function component() {
  const element = document.createElement('div');

  element.innerHTML = marked.parse('# Hello, World!');

  return element;
}

document.body.appendChild(component());
