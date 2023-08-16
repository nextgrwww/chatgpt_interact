document.getElementById('openChatButton').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://chat.openai.com' });
});
