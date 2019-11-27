const host = 'twitter.com';
const defaultBackgroundColor = '#213d6f'; // dark blue

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: defaultBackgroundColor }, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: host }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
