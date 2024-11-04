import './index.css';

const elements = {
  alwaysOnTopButton: document.getElementById('browser-always-on-top'),
  alwaysOnTopIcon: document.querySelector('#browser-always-on-top i'),
  backButton: document.getElementById('browser-back'),
  forwardButton: document.getElementById('browser-forward'),
  refreshButton: document.getElementById('browser-refresh'),
  homeButton: document.getElementById('browser-home'),
  newTabButton: document.getElementById('browser-new-tab'),
  addressInput: document.getElementById('browser-address'),
  closeButton: document.getElementById('window-close'),
  minimizeButton: document.getElementById('window-minimize'),
  maximizeButton: document.getElementById('window-maximize'),
  webview: document.getElementById('webview'),
};

let isAlwaysOnTop = false;

const init = () => {
  elements.webview.src = "https://www.google.com";
  elements.addressInput.value = elements.webview.src;
  elements.alwaysOnTopIcon.classList.add('always-on-top-off');

};

const updateAddressBar = () => {
  elements.addressInput.value = elements.webview.src;
};

const goBack = () => elements.webview.goBack();
const goForward = () => elements.webview.goForward();
const reloadPage = () => elements.webview.reload();
const goHome = () => {
  elements.webview.src = "https://www.google.com";
  updateAddressBar();
};

const toggleAlwaysOnTop = () => {
  isAlwaysOnTop = !isAlwaysOnTop;

  elements.alwaysOnTopIcon.classList.toggle('always-on-top-on', isAlwaysOnTop);
  elements.alwaysOnTopIcon.classList.toggle('always-on-top-off', !isAlwaysOnTop);

  api.toggleAlwaysOnTop();
};

const handleAddressInput = (event) => {
  if (event.key === 'Enter') {
    const input = elements.addressInput.value;
    if (input.startsWith("http://") || input.startsWith("https://")) {
      elements.webview.src = input;
    } else if (input.startsWith("www.") || input.includes(".")) {
      elements.webview.src = `https://${input.startsWith("www.") ? input : 'www.' + input}`;
    } else {
      elements.webview.src = `https://www.google.com/search?q=${input}`;
    }
    updateAddressBar();
  }
};

const bindEvents = () => {
  elements.backButton.addEventListener('click', goBack);
  elements.forwardButton.addEventListener('click', goForward);
  elements.refreshButton.addEventListener('click', reloadPage);
  elements.homeButton.addEventListener('click', goHome);

  elements.addressInput.addEventListener('focusin', () => elements.addressInput.select());
  elements.addressInput.addEventListener('focusout', updateAddressBar);
  elements.addressInput.addEventListener('keyup', handleAddressInput);

  elements.closeButton.addEventListener('click', api.windowCloseButton);
  elements.minimizeButton.addEventListener('click', api.windowMinimizeButton);
  elements.maximizeButton.addEventListener('click', api.windowMaximizeButton);

  elements.alwaysOnTopButton.addEventListener('click', toggleAlwaysOnTop);
  elements.newTabButton.addEventListener('click', api.newTab);

  elements.webview.addEventListener('did-navigate', (event) => elements.addressInput.value = event.url);
  elements.webview.addEventListener('did-navigate-in-page', (event) => elements.addressInput.value = event.url);
};

init();
bindEvents();
