import './index.css';

const leftSidebarButton = document.getElementById('left-sidebar');
const backBrowserButton = document.getElementById('browser-back');
const forwardBrowserButton = document.getElementById('browser-forward');
const refreshBrowserButton = document.getElementById('browser-refresh');
const homeBrowserButton = document.getElementById('browser-home');
const addressBarBrowserInput = document.getElementById('browser-address');
const windowCloseButton = document.getElementById('window-close');
const windowMinimizeButton = document.getElementById('window-minimize');
const windowMaximizeButton = document.getElementById('window-maximize');
const webview = document.getElementById('webview');

const init = () => {
  webview.src = "https://www.google.com";
  addressBarBrowserInput.value = webview.src;
}

backBrowserButton.addEventListener('click', () => {
  webview.goBack();
  addressBarBrowserInput.value = webview.src;
});

forwardBrowserButton.addEventListener('click', () => {
  webview.goForward();
  addressBarBrowserInput.value = webview.src;
});

refreshBrowserButton.addEventListener('click', () => {
  webview.reload();
});

homeBrowserButton.addEventListener('click', () => {
  webview.src = "https://www.google.com";
  addressBarBrowserInput.value = webview.src;
});

addressBarBrowserInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    if (addressBarBrowserInput.value.startsWith("http://") || addressBarBrowserInput.value
      .startsWith("https://")) {
      webview.src = addressBarBrowserInput.value;
    } else if (addressBarBrowserInput.value.startsWith("www.")) {
      webview.src = "https://" + addressBarBrowserInput.value;
    } else if (addressBarBrowserInput.value.includes(".")) {
      webview.src = "https://www." + addressBarBrowserInput.value;
    } else {
      webview.src = "https://www.google.com/search?q=" + addressBarBrowserInput.value;
    }
    addressBarBrowserInput.value = webview.src;
  }
});

windowCloseButton.addEventListener('click', () => {
  api.windowCloseButton();
});

windowMinimizeButton.addEventListener('click', () => {
  api.windowMinimizeButton();
});

windowMaximizeButton.addEventListener('click', () => {
  api.windowMaximizeButton();
});

webview.addEventListener('did-navigate', (event) => {
  addressBarBrowserInput.value = event.url;
});

webview.addEventListener('did-navigate-in-page', (event) => {
  addressBarBrowserInput.value = event.url;
});

init()