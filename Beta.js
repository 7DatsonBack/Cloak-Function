import { __uv$config } from './uv.config.js';

function link() {
  const linkValue = prompt("Enter your link:");
  if (linkValue) {
    let url = linkValue.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

    window.navigator.serviceWorker.register('./sw.js', {
      scope: __uv$config.prefix
    }).then(() => {
      window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
  }
}

function isUrl(val = '') {
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
}

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
  event.preventDefault();
  link();
});
