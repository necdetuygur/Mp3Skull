chrome.contextMenus.create({
  title: "Mp3Skull",
  contexts: ["link"],
  onclick: function (word) {
    var query = word.linkUrl;
    chrome.tabs.create({
      url: "https://mp3skull.org/#" + query
    });
  }
});