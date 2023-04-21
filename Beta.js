import { __uv$config } from './config.js';

function link() {
  const linkValue = prompt("Enter your link:");
  if (linkValue) {
    const url = linkValue.trim();
    if (!isUrl(url)) {
      alert('Invalid URL');
      return;
    }

    const newTab = window.open("about:blank", "_blank");
    newTab.document.write("<!DOCTYPE html><html><head><title>Canvas</title><link rel='icon' href='https://ssl.gstatic.com/classroom/favicon.png' /></head><body><iframe src='" + url + "' style='position:fixed; top:0; bottom:0; left:0; right:0; width:100%; height:100%; border:none;'></iframe></body></html>");
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
