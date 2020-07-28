import * as React from "react";
import * as ReactDOM from "react-dom";
import Popup from "./Popup";

chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
  chrome.storage.sync.get(["imageUrl", "id"], function (result) {
    ReactDOM.render(
      <Popup imageUrl={result.imageUrl} userId={result.id} />,
      document.getElementById("popup")
    );
  });
});
