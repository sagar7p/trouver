// Listen to messages sent from other parts of the extension.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // onMessage must return "true" if response is async.
  const isResponseAsync = false;

  if (request.popupMounted) {
    console.log("eventPage notified that Popup.tsx has mounted.");
  }

  return isResponseAsync;
});

// create the context menu
chrome.contextMenus.create({
  title: "Save Image",
  contexts: ["image"],
  onclick: addPlace,
});

// get user id
chrome.identity.getProfileUserInfo(function (userInfo) {
  console.log(userInfo.email + "  " + userInfo.id);
  const id = userInfo.id.length > 0 ? userInfo.id : "Guest";
  chrome.storage.sync.set({ id: id }, function () {});
});

// add place
function addPlace(image: chrome.contextMenus.OnClickData) {
  const imageUrl = image.srcUrl;
  console.log("clicked image");
  chrome.storage.sync.set({ imageUrl: imageUrl }, function () {
    console.log("Value is set to " + imageUrl);
    const w = 700;
    const h = 700;
    const left = screen.width / 2 - w / 2;
    const top = screen.height / 2 - h / 2;
    chrome.windows.create({
      url: chrome.runtime.getURL("popup.html"),
      type: "popup",
      width: w,
      height: h,
      left: left,
      top: top,
    });
  });
}
